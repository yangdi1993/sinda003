<template>
  <div class="r-outter">
    <!--内容-->
    <div class="r-content">
      <p class="msg">{{message}}</p>
        <li class="phone"><input type="text" placeholder="请输入手机号" v-model="forgetPhone" v-on:blur="fpBlur" v-on:focus="fpFocus">
        </li>
        <li class="code-img">
          <input type="text" placeholder="请输入验证码" v-model="fImg" v-on:blur="fiBlur" v-on:focus="fiFocus">
          <img :src="imgUrl" alt="" v-on:click="buttonChange">
        </li>
        <li class="code-phone">
          <input type="text" placeholder="请输入验证码" v-model="fCmg" v-on:blur="fcBlur" v-on:focus="fcFocus">
          <button @click="gutCode"  :class="{blue:disable==true}" v-bind:disabled="disable">
            <span v-show="fget" id="blueget">点击获取</span>
            <span v-show="fgetNew" id="bluegetNew">重新获取{{count}}</span>
          </button>
        </li>
        <li class="newPw">
          <input :type="newPwType" placeholder="请输入新密码" v-model="fNew" v-on:blur="fnBlur" v-on:focus="fnFocus">
          <img :src="newUrl" alt="" class="eye" @click="changeType">
          <!-- <a href="#">密码由6-16位数字和字母组成</a> -->
        </li>
        <li class="pw">
          <input :type="pwType" placeholder="请再次输入密码" v-model="fPw" v-on:blur="fPwBlur" v-on:focus="fPwFocus">
          <img :src="verUrl" alt="" class="eye" @click="chVerType">
        </li>
        <li class="modify">
          <button @click="modifyBut">确认修改</button>
        </li>
      </ul>
     </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
var md5 = require("md5");
const eye = [
  require("../images/login/invisible.png"),
  require("../images/login/visible.png")
];
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "",
      // 手机号验证
      forgetPhone: "",
      // 图片验证码验证
      fImg: "",
      // 动态验证码验证
      disable: false,
      fCmg: "",
      // 新密码验证
      fNew: "",
      newPwType: "password",
      newUrl: eye[0],
      // 确认密码验证
      fPw: "",
      pwType: "password",
      verUrl: eye[0],
      // 获取动态验证码按钮
      fgetNew: false,
      fget: true,
      count: "",
      msg: "Welcome to Your Vue.js App",
      imgUrl: "/xinda-api/ajaxAuthcode"
    };
  },
  created(){
    this.setTitle('忘记密码')
  },
  methods: {
    
...mapActions(['setTitle']),
    //点击更换图片验证码
    buttonChange: function() {
      this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
    },
    // 手机号焦点事件
    fpBlur: function() {
      if (this.forgetPhone == "") {
        this.message = '手机号不能为空';
      }
    },
    fpFocus: function() {
      this.message = '';
    },
    // 图片验证码焦点事件
    fiBlur: function() {
      if (this.fImg == "") {
        this.message = '图片验证码不能为空';
      } else {
        this.ajax
          .post(
            "/xinda-api/register/valid-sms",
            this.qs.stringify({
              cellphone: this.forgetPhone,
              smsType: 1,
              validCode: 111111
            })
          )
          .then(data => {
            // console.log(data.data.msg, data.data.status)
            if (data.data.status == -2) {
              // 手机号已注册，可完成修改密码
              this.message = '';
            } else if (data.data.status == 1) {
              // 手机号未注册，报错
              this.message = '手机号未注册';
            } else if (data.data.status == -3) {
              this.message = '图片验证码错误';
            } else {
              this.message = '手机号格式错误';
            }
          });
      }
    },
    // 图片文本框获得焦点
    fiFocus: function() {
      this.message = '';
      if (this.fImg != "") {
        //验证失败后更新图片验证码
        this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
        this.fImg = ""
      }
    },
    // 动态验证码焦点事件
    fcBlur: function() {
      if (this.fCmg == "") {
        this.message = '动态验证码不能为空';
      } else if (this.fCmg == 111111) {
        this.message = '';
      } else {
        this.message = '动态验证码错误';
      }
    },
    fcFocus: function() {
      this.message = '';
    },

    // 密码焦点事件
    fnBlur: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.fNew == "") {
        this.message = '新密码不能为空';
      } else if (newPwReg.test(this.fNew)) {
        // 验证通过
        this.message = '';
      } else {
        this.message = '新密码格式错误';
      }
    },
    fnFocus: function() {
      this.message = '';
    },
    // 新密码切换明码和暗码
    changeType: function() {
      this.newPwType = this.newPwType === "password" ? "text" : "password";
      if (this.newPwType === "password") {
        // 密码
        this.newUrl = eye[0];
      } else {
        // 明码
        this.newUrl = eye[1];
      }
    },
    // 确认切换密码明码和暗骂
    chVerType: function() {
      this.pwType = this.pwType === "password" ? "text" : "password";
      if (this.pwType === "password") {
        // 密码
        this.verUrl = eye[0];
      } else {
        // 明码
        this.verUrl = eye[1];
      }
    },
    // 确认密码焦点事件
    fPwBlur: function() {
      if (this.fPw == "") {
        this.message = '确认密码不能为空';
      } else if (this.fNew == this.fPw) {
        // 通过验证
        this.message = '';
      } else {
        this.message = '两次输入密码不一致';
      }
    },
    fPwFocus: function() {
      this.message = '';
    },

    // 点击获得动态验证码
    gutCode: function() {
      if (this.forgetPhone == "") {
        this.message = '手机号不能为空';
      } else if (/^1[3578]\d{9}$/.test(this.forgetPhone)) {
        this.message = '';
        if (this.fImg == "") {
          this.message = '图片验证码不能为空';
        } else {
          // 图片验证码匹配
          this.ajax
            .post(
              "/xinda-api/register/sendsms",
              this.qs.stringify({
                cellphone: this.forgetPhone,
                smsType: 1,
                imgCode: this.fImg
              })
            )
            .then(data => {
              // console.log(data.data.msg, data.data.status);
              if (data.data.status == 1) {
                this.message = '';
                //设置点击按钮不可用
                this.disable = true;
                // 切换按钮内容显示
                this.fgetNew = true;
                this.fget = false;
                // 60秒倒计时
                var that = this;
                this.count = 60;
                var reduce = setInterval(function() {
                  that.count--;
                  if (that.count == 1) {
                    // 60秒倒计时结束后清除计时器
                    clearInterval(reduce);
                    //设置点击按钮可用
                    that.disable = false;
                    // 切换按钮内容显示
                    that.fgetNew = false;
                    that.fget = true;
                    this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
                  }
                }, 1000);
              } else {
                // 图片验证码匹配失败
                this.message = '图片验证码错误';
              }
            });
        }
      } else {
        this.message = '手机号格式错误';
      }
    },

    // 确认修改按钮
    modifyBut: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.forgetPhone == "") {
        this.message = '手机号不能为空';
      } else if (this.fImg == "") {
        this.message = '图片验证码不能为空';
      } else if (this.fCmg == "") {
        this.message = '动态验证码不能为空';
      } else if (this.fNew == "") {
        this.message = '新密码不能为空';
      } else if (this.fPw == "") {
        this.message = '确认密码不能为空';
      }
      this.ajax
        .post(
          "http://115.182.107.203:8088/xinda/xinda-api/register/findpas",
          this.qs.stringify({
            cellphone: this.forgetPhone,
            smsType: 1,
            validCode: 111111,
            password: md5(this.fNew)
          })
        )
        .then(data => {
          // console.log(data.data.status, data.data.msg);
          if (
            data.data.status == 1 &&
            newPwReg.test(this.fNew) &&
            this.fNew == this.fPw
          ) {
            location.href = "#/weChatdog/wLogin";
            this.message = '';
          } else if (data.data.status == -2) {
            this.message = '手机号未注册';
          } else if (data.data.status == -3) {
            this.message = '图片验证码错误';
          }
        });
    }
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.r-outter {
  margin-top: 2rem;
  width: 7.5rem;
  height: 13.34rem;
}
.msg {
  margin: 0.07rem auto -0.5rem;
  font-size: 0.28rem;
  color: #ff0000;
}
li {
  list-style: none;
  display: flex;
  margin: 0 0 0.32rem 1.01rem;
  position: relative;
  input {
    padding-left: 0.19rem;
    width: 5.46rem;
    height: 0.73rem;
    border: 1px solid #b0b0b0;
    outline: 0;
    font-size: 0.28rem;
  }
  input::-webkit-input-placeholder {
    font-size: 0.28rem;
  }
  a {
    position: absolute;
    font-size: 0.11rem;
  }
}
.phone {
  margin-top: 0.71rem;
}
.code-img input,
.code-phone input {
  width: 2.72rem;
  margin-right: 0.3rem;
}
.code-img img {
  width: 2.43rem;
}
.code-phone button {
  width: 2.43rem;
  background: #2693d4;
  color: #fff;
  font-size: 0.28rem;
}
  .code-phone .blue{
    background: #999;
  }
.newPw,
.pw {
  position: relative;
}
.pw img,
.newPw img {
    position: absolute;
    margin: 0.2rem 0 0 5rem;
    width: 0.5rem;
    height: 0.25rem;
}
.modify button {
  margin: 1.13rem 0 4.67rem 0;
  width: 5.65rem;
  height: 0.73rem;
  background: #2693d4;
  color: #fff;
  outline: 0;
  font-size: 0.28rem;
}
</style>


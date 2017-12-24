<template>
  <div class="r-outter">
    <div  class="title">
      <img  @click="back"src="../images/login/back.png" alt="">
      <p class="title">登录</p>
    </div>
    <ul class="r-content">
      <p class="msg">{{message}}</p>
      <li class="phone">
        <input type="text" placeholder="请输入手机号" v-model="loginPhone" v-on:blur="lpBlur" v-on:focus="lpFocus">
      </li>
      <li class="pw">
        <input :type="pwType" placeholder="请输入密码" v-model="loginPw" v-on:blur="lwBlur" v-on:focus="lwFocus">
        <img :src="loginUrl" alt="" class="eye" @click="changeType">
      </li>
      <li class="code-img">
        <input type="text" placeholder="请输入验证码" v-model="codeImage" v-on:blur="ciBlur" v-on:focus="ciFocus">
        <img :src="imgUrl" alt=""  v-on:click="buttonChange">
      </li>
      <li class="loginBut">
        <button @click="loginBut">立即登录</button>
      </li>
    </ul>
    <div class="regBut">
      <p>还没有信达账号</p>
      <a href="#/weChatdog/wRegister"><button>立即注册</button></a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
var md5 = require("md5");
const eye = [
  require('../images/login/invisible.png'),
  require('../images/login/visible.png'),
];;
export default {
  data() {
    return {
      message:'',
      // 手机号
      loginPhone: "",
      // 密码
      loginPw: "",
      loginUrl: eye[0],
      // 切换密码可不可见
      pwType: "password",
      // 验证码
      codeImage: "",
      imgUrl: "/xinda-api/ajaxAuthcode"
    };
  },
 
  methods: {
    ...mapActions(["setName"]),
    back:function(){
      history.go(-1)
    },
    //点击更换图片验证码
    buttonChange: function() {
      this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
    },

    // 手机号焦点事件
    lpBlur: function() {
      if (this.loginPhone == "") {
        this.message = '手机号不能为空';
      }else if(/^1[3578]\d{9}$/.test(this.loginPhone)){
        this.message = '';
      }else{
        this.message = '手机号格式错误';
      }
    },
    // 手机号获得焦点
    lpFocus: function() {
      this.message = '';
    },
    // 密码焦点事件
    lwBlur: function() {
      if (this.loginPw == "") {
        this.message = '密码不能为空';
      }
    },
    // 密码获得焦点
    lwFocus: function() {
      this.message = '';
    },
    // 验证码焦点事件
    ciBlur: function() {
      if (this.codeImage == "") {
        this.message = '验证码不能为空';
      }
    },
    // 切换密码明码和暗骂
    changeType: function() {
      this.pwType = this.pwType === 'password' ? 'text' : 'password'
      if (this.pwType === 'password') {
        // 密码
        this.loginUrl = eye[0];
      } else {
        // 明码
        this.loginUrl = eye[1];
      }
    },
    // 验证码获得焦点
    ciFocus: function() {
      this.limgErr = "\u2736";
      if (this.codeImage != "") {
        this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
        this.codeImage = "";
      }
    },
    // 登录按钮
    loginBut: function() {
      // console.log('loginUser'+loginUser)
      var md5 = require("md5");
      if (this.loginPhone == "") {
        this.message = '手机号不能为空';
      } else if (this.loginPw == "") {
        this.message = '密码不能为空';
      } else if (this.codeImage == "") {
        //验证码不能为空
        this.message = '验证码不能为空';
      } else if (/^1[3578]\d{9}$/.test(this.loginPhone)) {
        // 判断登录条件
        //判断手机号存在
        this.ajax.post(
            "/xinda-api/sso/login",
            this.qs.stringify({loginId: this.loginPhone,password: md5(this.loginPw),imgCode: this.codeImage
            })).then(data => {
            console.log(data.data.msg, data.data.status)
            if (data.data.msg == "账号不存在") {
              this.message = '手机号未注册';
              console.log(this.message)
              this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
              this.codeImage='';
            }
            if (data.data.msg == "图片验证码错误！") {
              this.message = '验证码错误';
              this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
              this.codeImage='';
            }
            if (data.data.msg == "账号或密码不正确！") {
              this.message = '密码错误';
              this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
              this.codeImage='';
            }
            if (data.data.status == 1) {
              // 登陆失败提示信息
              this.fail = false;
              this.message = '';
              // 登录成功后保存当前用户名
              var loginUser = {};
              loginUser.username = this.loginPhone;
              loginUser.password = this.loginPw;

              sessionStorage.setItem("userPhone", this.loginPhone); //此处为登录状态信息，登陆后判断状态是否为登录
              location.replace("/#/inner/homepage");
              this.setName(this.loginPhone);
              this.$router.push({ path: "/weChat/index" });
            } else {
              this.message = '';
            }
          });
      } else {
        this.this.message = '手机号格式错误';
      }
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
  width: 7.5rem;
  height: 13.34rem;
}
.title {
  display: flex;
  width: 7.5rem;
  height: 0.77rem;
  line-height: 0.77rem;
  background: #e5e5e5;
  p {
    margin-left: 3.08rem;
    font-size: 0.28rem;
  }
  img {
    margin: 0.23rem 0.21rem;
    width: 0.15rem;
    height: 0.28rem;
  }
}
.msg {
    margin: 0.07rem auto -0.5rem;
    font-size: 0.28rem;
    color: #ff0000;
  }
li {
  display: flex;
  margin: 0 0 0.32rem 1.01rem;
  input {
    padding-left: 0.19rem;
    width: 5.46rem;
    height: 0.73rem;
    border: 1px solid #b0b0b0;
    outline: 0;
    font-size: 0.28rem;
  }
  input::-webkit-input-placeholder{
    font-size: 0.28rem;
  }
}
.phone {
  margin-top: 0.71rem;
}
.code-img {
  input {
    margin-right: 0.3rem;
    width: 2.72rem;
  }
  img {
    width: 2.43rem;
  }
}
  .pw{
    position: relative;
    img{
      position: absolute;
      margin: 0.2rem 0 0 5rem;
      width: 0.5rem;
      height: 0.25rem;
    }
  }
.loginBut button {
  margin: 1.13rem 0 5.7rem 0;
  width: 5.65rem;
  height: 0.73rem;
  background: #2693d4;
  color: #fff;
  outline: 0;
  font-size: 0.28rem;
}
.regBut {
  display: flex;
  width: 7.5rem;
  height: 0.77rem;
  line-height: 0.77rem;
  background: #4d4d4d;
  color: #fff;
  p {
    line-height: 0.77rem;
    margin-left: 0.64rem;
    font-size: 0.28rem;
  }
  a {
    margin-top: -0.25rem;
    button {
      margin: 0.14rem 0 0 2.63rem;
      width: 1.8rem;
      height: 0.5rem;
      color: #fff;
      background: #2693d4;
      font-size: 0.28rem;
    }
  }
}
</style>


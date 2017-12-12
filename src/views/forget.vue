<template>
  <div class="r-outter">
    <!--小导航-->
    <div class="outBox">
      <div class="r-header">
        <a href="/#/inner/homepage">
          <div class="r-logo"></div>
        </a>
        <p>找回密码</p>
      </div>
    </div>

    <!--内容-->
    <div class="r-content">
      <!--注册操作界面-->
      <ul class="r-operate">
        <li class="phone"><input type="text" placeholder="请输入手机号" v-model="forgetPhone" v-on:blur="fpBlur" v-on:focus="fpFocus">
          <span v-show="fpNull">手机号不能为空</span>
          <span v-show="fpWrong">手机号未注册</span>
          <span v-show="fpRight" id="right">✔</span>
          <span v-show="fpStar">*</span>
        </li>
        <li class="code-img">
          <input type="text" placeholder="请输入验证码" v-model="fImg" v-on:blur="fiBlur" v-on:focus="fiFocus">
          <img :src="imgUrl" alt="">
          <span v-show="fiNull">图片验证码错误</span>
          <span v-show="fiWrong">图片验证码不正确</span>
          <span v-show="fiRight" id="right">✔</span>
          <span v-show="fiStar">*</span>
          <button v-on:click="buttonChange">看不清？换一张</button>
        </li>
        <li class="code-phone">
          <input type="text" placeholder="请输入验证码" v-model="fCmg" v-on:blur="fcBlur" v-on:focus="fcFocus">
          <button @click="gutCode" v-bind:disabled="disable">
            <span v-show="fget" id="blueget">点击获取</span>
            <span v-show="fgetNew" id="bluegetNew">重新获取{{count}}</span>
          </button>
          <span v-show="fCodeNull">动态验证码不能为空</span>
          <span v-show="fCodeWrong">动态验证码错误</span>
          <span v-show="fCodeRight" id="right">✔</span>
          <span v-show="fCodeStar">*</span>
        </li>
        <li class="newPw">
          <input type="password" placeholder="请输入新密码" v-model="fNew" v-on:blur="fnBlur" v-on:focus="fnFocus">
          <a href="#">密码由6-16位数字和字母组成</a>
          <span v-show="fpwNull">新密码不能为空</span>
          <span v-show="fpwWrong">新密码格式错误</span>
          <span v-show="fpwRight" id="right">✔</span>
          <span v-show="fpwStar">*</span>
        </li>
        <li class="pw">
          <input type="password" placeholder="请再次输入密码" v-model="fPw" v-on:blur="fPwBlur" v-on:focus="fPwFocus">
          <span v-show="fpwNewNull">确认密码不能为空</span>
          <span v-show="fpwNewWrong">两次输入密码不一致</span>
          <span v-show="fpwNewRight" id="right">✔</span>
          <span v-show="fpwNewStar">*</span>
        </li>
        <li class="modify">
          <button @click="modifyBut">确认修改</button>
        </li>
      </ul>
      <!--跳转登录界面-->
      <div class="r-goto">
        <p>想起密码来了?</p>
        <div>
          <a href="#/outter/login">返回登录>></a>

        </div>
      </div>
    </div>
    <!--<router-view/>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {

      // 手机号验证
      forgetPhone: '',
      fpNull: '',
      fpWrong: '',
      fpRight: '',
      fpStar: '',
      // 图片验证码验证
      fImg: '',
      fiNull: '',
      fiWrong: '',
      fiRight: '',
      fiStar: '',
      // 动态验证码验证
      disable: false,
      fCmg: '',
      fCodeNull: '',
      fCodeWrong: '',
      fCodeRight: '',
      fCodeStar: '',
      // 新密码验证
      fNew: '',
      fpwNull: '',
      fpwWrong: '',
      fpwRight: '',
      fpwStar: '',
      // 确认密码验证
      fPw: '',
      fpwNewNull: '',
      fpwNewWrong: '',
      fpwNewRight: '',
      fpwNewStar: '',
      // 获取动态验证码按钮
      fgetNew: false,
      fget: true,
      count: 60,
      msg: 'Welcome to Your Vue.js App',
      imgUrl: '/xinda-api/ajaxAuthcode',

    }
  },
  methods: {
    //点击更换图片验证码
    buttonChange: function() {
      this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
    },
    // 手机号焦点事件
    fpBlur: function() {
      if (this.forgetPhone == '') {
        //手机号不能为空
        this.fpNull = true;
        this.fpStar = false;
      }
    },
    fpFocus: function() {
      this.fpNull = false;
      this.fpExist = false;
      this.fpWrong = false;
      this.fpStar = true;
      this.fpRight = false;
    },
    // 图片验证码焦点事件
    fiBlur: function() {
      if (this.fImg == '') {
        //图片验证码不能为空
        this.fiNull = true;
        this.fiStar = false;
      } else {
        this.ajax.post('/xinda-api/register/valid-sms', this.qs.stringify({ cellphone: this.forgetPhone, smsType: 1, validCode: 111111 })).then(data => {
          // console.log(data.data.msg, data.data.status)
          if (data.data.status == -2) {
            // 手机号已注册，可完成修改密码
            this.fpStar = false;
            this.fpRight = true;
          } else if (data.data.status == 1) {
            // 手机号未注册，报错
            this.fpWrong = true;
            this.fpStar = false;
          } else if (data.data.status == -3) {
            // 图片验证码错误
            this.fiStar = false;
            // this.fiWrong = true;
          } else {
            this.fpWrong = true;
            this.fpStar = false;
          }
        })
      }
    },
    // 图片文本框获得焦点
    fiFocus: function() {
      this.fiNull = false;
      this.fiWrong = false;
      this.fiStar = true;
      this.fiRight = false;
      if (this.fImg != '') {
        //验证失败后更新图片验证码
        this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
      }
    },
    // 动态验证码焦点事件
    fcBlur: function() {
      if (this.fCmg == '') {
        this.fCodeNull = true;
        this.fCodeStar = false;
      } else if (this.fCmg == 111111) {
        this.fCodeStar = false;
        this.fCodeRight = true;
      } else {
        this.fCodeWrong = true;
        this.fCodeStar = false;
      }
    },
    fcFocus: function() {
      this.fCodeNull = false;
      this.fCodeWrong = false;
      this.fCodeiStar = true;
      this.fCodeRight = false;
    },

    // 密码焦点事件
    fnBlur: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.fNew == '') {
        //新密码不能为空
        this.fpwNull = true;
        this.fpwiStar = false;
      } else if (newPwReg.test(this.fNew)) {
        // 验证通过
        this.fpwiStar = false;
        this.fpwRight = true;
      } else {
        //新密码格式错误
        this.fpwWrong = true;
        this.fpwiStar = false;
      }
    },
    fnFocus: function() {
      this.fpwNull = false;
      this.fpwWrong = false;
      this.fpwiStar = true;
      this.fpwRight = false;
    },
    // 确认密码焦点事件
    fPwBlur: function() {
      if (this.fPw == '') {
        //确认密码不能为空
        this.fpwNewNull = true;
        this.fpwNewiStar = false;
      } else if (this.fNew == this.fPw) {
        // 通过验证
        this.fpwNewiStar = false;
        this.fpwNewRight = true;
      } else {
        // 两次输入密码不一致
        this.fpwNewWrong = true;
        this.fpwNewiStar = false;
      }
    },
    fPwFocus: function() {
      this.fpwNewNull = false;
      this.fpwNewWrong = false;
      this.fpwNewiStar = true;
      this.fpwNewRight = false;
    },

    // 点击获得动态验证码
    gutCode: function() {
      if (this.forgetPhone == '') {
        //电话号码不能为空
        this.fpNull = true;
        this.fpStar = false;
      } else if (/^1[3578]\d{9}$/.test(this.forgetPhone)) {
        // 手机号匹配正确
        if (this.fImg == '') {
          // 图片验证码不为空
          this.ifiNull = true;
          this.fiStar = false;
        } else {
          // 图片验证码匹配
          this.ajax.post('/xinda-api/register/sendsms', this.qs.stringify({ cellphone: this.forgetPhone, smsType: 1, imgCode: this.fImg })).then(data => {
            console.log(data.data.msg, data.data.status);
            if (data.data.status == 1) {
              this.fiNull = false;
              this.fiWrong = false;
              this.fiStar = false;
              this.fiRight = true;
              //设置点击按钮不可用
              this.disable = true;
              // 切换按钮内容显示
              this.fgetNew = true;
              this.fget = false;
              // 60秒倒计时
              var that = this;
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
                  this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
                }
              }, 1000);
            } else {
              // 图片验证码匹配失败
              this.fiWrong = true;
              this.fiStar = false;
              this.fiRight = false;
            }
          })
        }
      } else {
        //电话号码格式错误
        this.fpWrong = true;
        this.fpStar = false;
      }
    },

    // 确认修改按钮
    modifyBut: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.forgetPhone == '') {
        //手机号不能为空
        this.fpNull = true;
        this.fpStar = false;
      } else if (this.fImg == '') {
        //图片验证码不能为空
        this.fiNull = true;
        this.fiStar = false;
      } else if (this.fCmg == '') {
        //动态验证码不能为空
        this.fCodeNull = true;
        this.fCodeStar = false;
      } else if (this.fNew == '') {
        //新密码不能为空
        this.fpwNull = true;
        this.fpwiStar = false;
      } else if (this.fPw == '') {
        //确认密码不能为空
        this.fpwNewNull = true;
        this.fpwNewiStar = false;
      }
      this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/register/findpas', this.qs.stringify({ cellphone: this.forgetPhone, smsType: 1, validCode: 111111, password: this.fNew })).then(data => {
        console.log(data.data.status, data.data.msg);
        if (data.data.status == 1 && newPwReg.test(this.fNew) && this.fNew == this.fPw) {
          // 修改成功提示
          // 手机提示
          this.fpRight = true;
          this.fpStar = false;
          location.href = '#/outter/login';
          // 图像验证码
          this.fiRight = true;
          this.fiStar = false;
          // 动态验证码
          this.fCodeRight = true;
          this.fCodeStar = false;
          // 新密码
          this.fpwRight = true;
          this.fpwiStar = false;
          // 确认密码
          this.fpwNewRight = true;
          this.fpwNewiStar = false;
        } else if (data.data.status == -2) {
          // 手机号未注册
          this.fpWrong = true;
          this.fpStar = false;
        } else if (data.data.status == -3) {
          // 图片验证码错误
          this.fiWrong = true;
          this.fiStar = false;
          this.fiRight = false;
        }
      })

    }
  }
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}

li {
  list-style: none;
}

.r-outter {
  margin: 0 auto; // width: 1200px;
  .outBox {
    background: #fff;
  }
  .r-header {
    margin: 0 auto 52px;
    display: flex;
    width: 1200px;
    height: 97px;
    overflow: hidden;
    .r-logo {
      width: 174px;
      height: 97px; // margin-left: 150px;
      background: url(../images/login/login_logo.png) no-repeat 0 20px;
    }
    p {
      margin-top: 39px;
      padding-left: 26px;
      height: 30px;
      border-left: 1px solid #b4b4b4;
      text-align: left;
      font-size: 16px;
      color: #434343;
    }
  }
  .r-content {
    margin: 0 auto;
    background: #fff;
    width: 1200px;
    height: 436px;
    display: flex;
    .r-operate {
      text-align: left;
      margin: 53px 19px 0 147px;
      width: 433px;
      height: 383px;
      span {
        margin-left: 5px;
        font-size: 11px;
        color: red;
      }
      li {
        margin-bottom: 20px;
      }
      li input,
      .modify button {
        padding-left: 26px;
        width: 255px;
        height: 36px;
        border-radius: 3px;
        border: 1px solid #cbcbcb;
        outline: 0;
      }
      .modify button {
        padding-left: 0px;
        width: 281px;
        background: #fff;
        color: #2693d6;
        border: 1px solid #2693d6;
      }
      .code-phone input,
      .code-img input {
        width: 166px;
      }
      .code-phone button {
        margin-left: 4px;
        background: #fff;
        width: 80px;
        height: 36px;
        border-radius: 3px;
        color: #2693d6;
        border: 1px solid #2693d6;
      }
      .code-phone button:disabled {
        background: #666;
      }
      .code-img {
        display: flex;
        img {
          // float: right;
          margin-left: 5px;
          margin-right: 5px;
          background: #fff;
          width: 85px;
          height: 34px;
          border-radius: 3px;
        }
        button {
          position: absolute;
          margin: 32px 0 0 198px;
          color: #2693d6;
          font-size: 11px;
          background: #fff;
          outline: 0;
        }
        span {
          margin-top: 7px;
        }
      }
      // p {
      //   margin: -10px auto;
      //   font-size: 13px;
      //   text-align: center;
      //   span {
      //     color: #2693d6;
      //   }
      // }
      .newPw {
        position: relative;
        a {
          position: absolute;
          font-size: 11px;
          text-decoration: none;
          color: #aaa;
          margin: 38px 0 0 -275px;
        }
      }
    }
  }

  .r-goto {
    margin: 53px 0 0 0;
    width: 602px;
    height: 383px; // background: pink;
    p {
      font-size: 15px;
      text-align: center;
      margin-bottom: 23px;
    }
    a {
      font-size: 15px;
      margin: 0 auto;
      color: #2693d6;
      text-decoration: none;
    }
    div {
      width: 600px;
      height: 261px;
      border-left: 1px solid #cbcbcb;
      background: url(../images/login/register.png) no-repeat 240px 40px;
    }
  }
  #right {
    color: green;
  }
  #bluegetNew {
    color: #fff;
  }
  #blueget {
    color: #2693d6;
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


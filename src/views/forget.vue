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
          <span>{{fpErr}}</span>
        </li>
        <li class="code-img">
          <input type="text" placeholder="请输入验证码" v-model="fImg" v-on:blur="fiBlur" v-on:focus="fiFocus">
          <img :src="imgUrl" alt="">
          <span>{{fiErr}}</span>
          <button v-on:click="buttonChange">看不清？换一张</button>
        </li>
        <li class="code-phone">
          <input type="text" placeholder="请输入验证码" v-model="fCmg" v-on:blur="fcBlur" v-on:focus="fcFocus">
          <button @click="gutCode" v-bind:disabled="disable">
            <span v-show="fget" id="blueget">点击获取</span>
            <span v-show="fgetNew" id="bluegetNew">重新获取{{count}}</span>
          </button>
          <span>{{fcErr}}</span>
        </li>
        <li class="newPw">
          <input :type="newPwType" placeholder="请输入新密码" v-model="fNew" v-on:blur="fnBlur" v-on:focus="fnFocus">
          <img :src="newUrl" alt="" class="eye" @click="changeType">
          <a href="#">密码由6-16位数字和字母组成</a>
          <span>{{fnPwErr}}</span>
        </li>
        <li class="pw">
          <input :type="pwType" placeholder="请再次输入密码" v-model="fPw" v-on:blur="fPwBlur" v-on:focus="fPwFocus">
          <img :src="verUrl" alt="" class="eye" @click="chVerType">
          <span>{{fpwErr}}</span>
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
import { mapActions } from 'vuex';
var md5 = require('md5');
const eye = [
  require('../images/login/invisible.png'),
  require('../images/login/visible.png'),
];
export default {
  name: 'HelloWorld',
  data() {
    return {

      // 手机号验证
      forgetPhone: '',
      fpErr: '\u2736',
      // 图片验证码验证
      fImg: '',
      fiErr: '\u2736',
      // 动态验证码验证
      disable: false,
      fCmg: '',
      fcErr: '\u2736',
      // 新密码验证
      fNew: '',
      fnPwErr: '\u2736',
      newPwType: 'password',
      newUrl: eye[0],
      // 确认密码验证
      fPw: '',
      fpwErr: '\u2736',
      pwType: 'password',
      verUrl: eye[0],
      // 获取动态验证码按钮
      fgetNew: false,
      fget: true,
      count: '\u2736',
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
        this.fpErr = '手机号不能为空';
      }
    },
    fpFocus: function() {
      this.fpErr = '\u2736';
    },
    // 图片验证码焦点事件
    fiBlur: function() {
      if (this.fImg == '') {
        this.fiErr = '图片验证码不能为空';
      } else {
        this.ajax.post('/xinda-api/register/valid-sms', this.qs.stringify({ 
          cellphone: this.forgetPhone, smsType: 1, validCode: 111111 })).then(data => {
          // console.log(data.data.msg, data.data.status)
          if (data.data.status == -2) {
            // 手机号已注册，可完成修改密码
            this.fpErr = '\u2736';
          } else if (data.data.status == 1) {
            // 手机号未注册，报错
            this.fpErr = '手机号未注册';
          } else if (data.data.status == -3) {
            this.fiErr = '图片验证码错误';
          } else {
            this.fpErr = '手机号格式错误';
          }
        })
      }
    },
    // 图片文本框获得焦点
    fiFocus: function() {
      this.fiErr = '\u2736';
      if (this.fImg != '') {
        //验证失败后更新图片验证码
        this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
      }
    },
    // 动态验证码焦点事件
    fcBlur: function() {
      if (this.fCmg == '') {
        this.fcErr = '动态验证码不能为空';
      } else if (this.fCmg == 111111) {
        this.fcErr = '\u2736';
      } else {
        this.fcErr = '动态验证码错误';
      }
    },
    fcFocus: function() {
      this.fcErr = '\u2736';
    },

    // 密码焦点事件
    fnBlur: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.fNew == '') {
        this.fnPwErr = '新密码不能为空';
      } else if (newPwReg.test(this.fNew)) {
        // 验证通过
        this.fnPwErr = '\u2736';
      } else {
        this.fnPwErr = '新密码格式错误';
      }
    },
    fnFocus: function() {
      this.fnPwErr = '\u2736';
    },
    // 新密码切换明码和暗码
    changeType: function() {
      this.newPwType = this.newPwType === 'password' ? 'text' : 'password'
      if (this.newPwType === 'password') {
        // 密码
        this.newUrl = eye[0];
      } else {
        // 明码
        this.newUrl = eye[1];
      }
    },
    // 确认切换密码明码和暗骂
    chVerType: function() {
      this.pwType = this.pwType === 'password' ? 'text' : 'password'
      if (this.pwType === 'password') {
        // 密码
        this.verUrl = eye[0];
      } else {
        // 明码
        this.verUrl = eye[1];
      }
    },
    // 确认密码焦点事件
    fPwBlur: function() {
      if (this.fPw == '') {
        this.fpwErr = '确认密码不能为空';
      } else if (this.fNew == this.fPw) {
        // 通过验证
        this.fpwErr = '\u2736';
      } else {
        this.fpwErr = '两次输入密码不一致';
      }
    },
    fPwFocus: function() {
      this.fpwErr = '\u2736';
    },

    // 点击获得动态验证码
    gutCode: function() {
      if (this.forgetPhone == '') {
        this.fpErr = '手机号不能为空';
      } else if (/^1[3578]\d{9}$/.test(this.forgetPhone)) {
        this.fpErr = '\u2736';
        if (this.fImg == '') {
          this.fiErr = '图片验证码不能为空';
        } else {
          // 图片验证码匹配
          this.ajax.post('/xinda-api/register/sendsms', this.qs.stringify({ 
            cellphone: this.forgetPhone, smsType: 1, imgCode: this.fImg })).then(data => {
            // console.log(data.data.msg, data.data.status);
            if (data.data.status == 1) {
              this.fiErr = '\u2736';
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
                  this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
                }
              }, 1000);
            } else {
              // 图片验证码匹配失败
              this.fiErr = '图片验证码错误';
            }
          })
        }
      } else {
        this.fpErr = '手机号格式错误';
      }
    },

    // 确认修改按钮
    modifyBut: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.forgetPhone == '') {
        this.fpErr = '手机号不能为空';
      } else if (this.fImg == '') {
        this.fiErr = '图片验证码不能为空';
      } else if (this.fCmg == '') {
        this.fcErr = '动态验证码不能为空';
      } else if (this.fNew == '') {
        this.fnPwErr = '新密码不能为空';
      } else if (this.fPw == '') {
        this.fpwErr = '确认密码不能为空';
      }
      this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/register/findpas', this.qs.stringify({ 
        cellphone: this.forgetPhone, smsType: 1, validCode: 111111, password: md5(this.fNew) })).then(data => {
        // console.log(data.data.status, data.data.msg);
        if (data.data.status == 1 && newPwReg.test(this.fNew) && this.fNew == this.fPw) {
          // 修改成功提示
          // 手机提示
          this.fpErr = '\u2736';
          location.href = '#/outter/login';
          // 图像验证码
          this.fiErr = '\u2736';
          // 动态验证码
          this.fcErr = '\u2736';
          // 新密码
          this.fnPwErr = '\u2736';
          // 确认密码
          this.fpwErr = '\u2736';
        } else if (data.data.status == -2) {
          this.fpErr = '手机号未注册';
        } else if (data.data.status == -3) {
          this.fiErr = '图片验证码错误';
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
    margin: 0 auto 50px;
    display: flex;
    width: 1200px;
    height: 97px;
    overflow: hidden;
    .r-logo {
      width: 174px;
      height: 100px; // margin-left: 150px;
      background: url(../images/login/login_logo.png) no-repeat 0 35px;
    }
    p {
      margin-top: 50px;
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
      .newPw {
        position: relative;
        a {
          position: absolute;
          font-size: 11px;
          text-decoration: none;
          color: #aaa;
          margin: 38px 0 0 -275px;
        }
        .eye {
          position: absolute;
          width: 18px;
          height: 10px;
          margin: 13px 0 0 -40px;
        }
      }
      .pw {
        position: relative;
        .eye {
          position: absolute;
          width: 18px;
          height: 10px;
          margin: 13px 0 0 -40px;
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


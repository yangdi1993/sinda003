<template>
  <div class="r-outter">
    <!--小导航-->
    <div class="outBox">
      <div class="r-header">
        <a href="/#/inner/homepage">
          <div class="r-logo"></div>
        </a>
        <p>欢迎登陆</p>
      </div>
    </div>
    <!--内容-->
    <div class="r-content">
      <!--注册操作界面-->
      <ul class="r-operate">
        <p class="fail" v-show="fail">登录失败，请检验输入信息是否正确</p>
        <li class="phone">
          <input type="text" placeholder="请输入手机号" v-model="loginPhone" v-on:blur="lpBlur" v-on:focus="lpFocus">
          <span>{{lphoneErr}}</span>
        </li>
        <li class="pw">
          <input :type="pwType" placeholder="请输入密码" v-model="loginPw" v-on:blur="lwBlur" v-on:focus="lwFocus">
          <img :src="loginUrl" alt="" class="eye" @click="changeType">
          <span>{{lpwErr}}</span>
        </li>
        <li class="code-img">
          <input type="text" placeholder="请输入验证码" v-model="codeImage" v-on:blur="ciBlur" v-on:focus="ciFocus">
          <img :src="imgUrl" alt="">
          <span>{{limgErr}}</span>
          <button v-on:click="buttonChange">看不清？换一张</button>
        </li>
        <li class="forget">
          <a href="#/outter/forget">忘记密码</a>
        </li>
        <li class="loginBut">
          <button @click="loginBut">立即登录</button>
        </li>
      </ul>
      <!--跳转登录界面-->
      <div class="r-goto">
        <p>还没有账号?</p>
        <div>
          <a href="#/outter/register">立即注册>></a>
        </div>
      </div>
    </div>
    <!--<router-view/>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
var md5 = require('md5');
const eye = [
  require('../images/login/invisible.png'),
  require('../images/login/visible.png'),
];
export default {

  data() {
    return {
      fail: false,//登陆失败提示信息
      // 手机号
      loginPhone: '',
      lphoneErr: '\u2736',
      // 密码
      loginPw: '',
      lpwErr: '\u2736',
      loginUrl: eye[0],
      // 切换密码可不可见
      pwType: 'password',
      // 验证码
      codeImage: '',
      limgErr: '\u2736',
      imgUrl: '/xinda-api/ajaxAuthcode',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions([ 'setName']),
    //点击更换图片验证码
    buttonChange: function() {
      this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
    },

    // 手机号焦点事件
    lpBlur: function() {
      if (this.loginPhone == '') {
        this.lphoneErr = '手机号不能为空';
      }
    },
    // 手机号获得焦点
    lpFocus: function() {
      this.lphoneErr = '\u2736';
    },
    // 密码焦点事件
    lwBlur: function() {
      if (this.loginPw == '') {
        this.lpwErr = '密码不能为空';
      }
    },
    // 密码获得焦点
    lwFocus: function() {
      this.lpwErr = '\u2736';
    },
    // 验证码焦点事件
    ciBlur: function() {
      if (this.codeImage == '') {
        this.limgErr = '验证码不能为空';
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
      this.limgErr = '\u2736';
      if (this.codeImage != '') {
        this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
        this.codeImage = ''
      }
    },
    // 登录按钮
    loginBut: function() {
      // console.log('loginUser'+loginUser)
      var md5 = require('md5');
      if (this.loginPhone == '') {
        this.lphoneErr = '手机号不能为空';
      } else if (this.loginPw == '') {
        this.lpwErr = '密码不能为空';
      } else if (this.codeImage == '') {
        //验证码不能为空
        this.limgErr = '验证码不能为空';
      } else if (/^1[3578]\d{9}$/.test(this.loginPhone)) {


        // 判断登录条件
        //判断手机号存在
        this.ajax.post('/xinda-api/sso/login', this.qs.stringify({ 
          loginId: this.loginPhone, password: md5(this.loginPw), imgCode: this.codeImage })).then(data => {
          // console.log(data.data.msg, data.data.status)
          if (data.data.msg == '账号不存在') {
            this.lphoneErr = '手机号未注册';
            this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
          }
          if (data.data.msg == '图片验证码错误！') {
            this.limgErr = '验证码错误';
            // console.log('图片验证码错误！')
            this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
          }
          if (data.data.msg == '账号或密码不正确！') {
            this.lpwErr = '密码错误';
            this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
          }
          if (data.data.status == 1) {
            // 登陆失败提示信息
            this.fail = false;
            this.lphoneErr = '\u2736';
            this.lpwErr = '\u2736';
            this.limgErr = '\u2736';
            // 登录成功后保存当前用户名
            var loginUser = {};
            loginUser.username = this.loginPhone;
            loginUser.password = this.loginPw;
            // this.ajax.post('/xinda-api/sso/login-info').then(data => {
            //   console.log(data.data.data)
            // })
            // var that=this
            // this.ajax.post('xinda-api/cart/cart-num').then(function(data){
            //   that.setNum(data.data.data.cartNum)  //购物车物品数量
            // })
            sessionStorage.setItem('userPhone', this.loginPhone)  //此处为登录状态信息，登陆后判断状态是否为登录
            // location.replace('/#/inner/homepage')
            this.setName(this.loginPhone)
            this.$router.push({ path: '/inner/homepage' });
          } else {
            this.fail = true;
          }
        });
      } else {
        this.lphoneErr = '手机号格式错误';
      }
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
  margin: 0 auto; // background: #f5f5f5;
  // width: 1200px;
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
    // margin-bottom: 100px;
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
      .fail {
        position: absolute;
        margin: -35px 25px;
        font-size: 15px;
        color: red;
        font-weight: bold;
      }
      span {
        margin-left: 5px;
        font-size: 11px;
        color: red;
      }
      li {
        margin-bottom: 20px;
      }
      li input,
      .loginBut button {
        padding-left: 26px;
        width: 251px;
        height: 36px;
        border-radius: 3px;
        border: 1px solid #cbcbcb;
        outline: 0;
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
      .code-img {
        display: flex;
        input {
          width: 166px;
        }
        img {
          margin-left: 4px;
          margin-right: 5px;
          background: #fff;
          width: 80px;
          height: 36px;
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
      }
      .forget a {
        margin-right: 150px;
        float: right;
        font-size: 13px;
        color: #2693d6;
        text-decoration: none;
      }
      .loginBut button {
        margin-top: 20px;
        padding-left: 0px;
        width: 281px;
        color: #2693d6;
        background: #fff;
        border: 1px solid #2693d6;
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
      background: url(../images/login/login.png) no-repeat 240px 40px;
    }
  }
  #green {
    color: green;
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


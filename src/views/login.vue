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
        <li class="phone">
          <input type="text" placeholder="请输入手机号" v-model="loginPhone" v-on:blur="lpBlur" v-on:focus="lpFocus">
          <span v-show="phoneNull">手机号不能为空</span>
          <span v-show="phoneNotExist">手机号未注册</span>
          <span v-show="phoneRight" id="green">✔</span>
          <span v-show="phoneStar">*</span>
        </li>
        <li class="pw">
          <input type="password" placeholder="请输入密码" v-model="loginPw" v-on:blur="lwBlur" v-on:focus="lwFocus">
          <span v-show="pwNull">密码不能为空</span>
          <span v-show="pwWrong">密码错误</span>
          <span v-show="pwRight" id="green">✔</span>
          <span v-show="pwStar">*</span>
        </li>
        <li class="code-img">
          <input type="text" placeholder="请输入验证码" v-model="codeImage" v-on:blur="ciBlur" v-on:focus="ciFocus">
          <img :src="imgUrl" alt="">
          <span v-show="imgNull">图片验证码不能为空</span>
          <span v-show="imgWrong">图片验证码错误</span>
          <span v-show="imgRight" id="green">✔</span>
          <span v-show="imgStar">*</span>
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
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      // 手机号
      loginPhone: '',
      phoneNull: false,
      phoneNotExist: false,
      phoneRight: false,
      phoneStar: false,
      // 密码
      loginPw: '',
      pwNull: false,
      pwWrong: false,
      pwRight: false,
      pwStar: false,
      // 验证码
      codeImage: '',
      imgNull: false,
      imgWrong: false,
      imgRight: false,
      imgStar: false,
      imgUrl: '/xinda-api/ajaxAuthcode',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // ...mapActions(['setNum']),
    //点击更换图片验证码
    buttonChange: function() {
      this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
    },

    // 手机号焦点事件
    lpBlur: function() {
      var phoneSpan = document.querySelector('.phone span');
      if (this.loginPhone == '') {
        // 手机号不能为空
        this.phoneNull = true;
        this.phoneNotExist = false;
        this.phoneRight = false;
        this.phoneStar = false;
      } else if (localStorage.getItem(this.loginPhone)) {//判断手机号存在
        this.phoneNull = false;
        this.phoneNotExist = false;
        this.phoneRight = true;
        this.phoneStar = false;
      } else {
        // 手机号未注册
        this.phoneNull = false;
        this.phoneNotExist = true;
        this.phoneRight = false;
        this.phoneStar = false;
      }
    },
    // 手机号获得焦点
    lpFocus: function() {
      this.phoneNull = false;
      this.phoneNotExist = false;
      this.phoneRight = false;
      this.phoneStar = true;
    },
    // 密码焦点事件
    lwBlur: function() {
      var pwSpan = document.querySelector('.pw span');
      var user = JSON.parse(localStorage.getItem(this.loginPhone))
      if (this.loginPw == '') {
        //密码不能为空
        this.pwNull = true;
        this.pwWrong = false;
        this.pwRight = false;
        this.pwStar = false;
      } else if (this.loginPw == user.password) {
        //判断密码正确
        this.pwNull = false;
        this.pwWrong = false;
        this.pwRight = true;
        this.pwStar = false;
      } else {
        //密码不正确
        this.pwNull = false;
        this.pwWrong = true;
        this.pwRight = false;
        this.pwStar = false;
      }
    },
    // 密码获得焦点
    lwFocus: function() {
      this.pwNull = false;
      this.pwWrong = false;
      this.pwRight = false;
      this.pwStar = true;
    },
    // 验证码焦点事件
    ciBlur: function() {
      // this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/sso/login',,this.qs.stringify({loginId: this.loginPhone, password: this.loginPw, imgCode: this.codeImage })).then(data => {
      //     console.log(data.data.msg);})
      
      if (this.codeImage == '') {
        //验证码不能为空
        this.imgNull = true;
        this.imgWrong = false;
        this.imgRight = false;
        this.imgStar = false;
      } else if (/^(\d|[a-z]){4}$/.test(this.codeImage)) {//判断验证码正确

        // /1111111111111111111111111111111111111111
        // this.ajax.post('/xinda-api/ajaxAuthcode').then(data => {
          // console.log(data);
        //   if (data.data.status == 1) {
        //     console.log(123)
        //     this.imgNull = false;
        //     this.imgWrong = false;
        //     this.imgRight = true;
        //     this.imgStar = false;
        //   }
        // })
      } else {
        //验证码不正确,请重新输入
        this.imgNull = false;
        this.imgWrong = true;
        this.imgRight = false;
        this.imgStar = false;
      }
    },
    // 验证码获得焦点
    ciFocus: function() {
      this.imgNull = false;
      this.imgWrong = false;
      this.imgRight = false;
      this.imgStar = true;
      if (this.codeImage != '') {
        this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
      }
    },
    // 登录按钮
    loginBut: function() {
      var md5 = require('md5');
      if (this.loginPhone == '') {
        // 手机号不能为空
        this.phoneNull = true;
        this.phoneNotExist = false;
        this.phoneRight = false;
        this.phoneStar = false;
      } else if (this.loginPw == '') {
        //密码不能为空
        this.pwNull = true;
        this.pwWrong = false;
        this.pwRight = false;
        this.pwStar = false;
      } else if (this.codeImage == '') {
        //验证码不能为空
        this.imgNull = true;
        this.imgWrong = false;
        this.imgRight = false;
        this.imgStar = false;
      }
      // 判断登录条件
      // if (localStorage.getItem(this.loginPhone)) {//判断手机号存在
      // console.log(user)
      this.ajax.post('/xinda-api/sso/login',this.qs.stringify({ loginId: this.loginPhone, password: this.loginPw, imgCode: this.codeImage })).then(data => {
        console.log(data.data.msg,data.data.status)
        console.log(this.loginPw)
      });
      // var user = JSON.parse(localStorage.getItem(this.loginPhone));
      // if (this.loginPw == user.password) {
      //   this.ajax.post('/xinda-api/register/sendsms', this.qs.stringify({ cellphone: this.loginPhone, smsType: 1, imgCode: this.codeImage })).then(data => {
      //     console.log(data);
      //     if (data.data.status == 1) {
      //       console.log('登陆成功')
      //     } else {
      //       //验证码错误
      //       this.imgNull = false;
      //       this.imgWrong = true;
      //       this.imgRight = false;
      //       this.imgStar = false;
      //     }
      //   })

        location.href = '/#/inner/homepage';
      // } else {
      //   //密码不正确
      //   this.pwNull = false;
      //   this.pwWrong = true;
      //   this.pwRight = false;
      //   this.pwStar = false;
      // }
      // }
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


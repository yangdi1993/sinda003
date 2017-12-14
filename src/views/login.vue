

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
          <span v-show="phoneNotExist">账号不存在</span>
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
    ...mapActions(['setNum','setName']),
    //点击更换图片验证码
    buttonChange: function() {
      this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
    },

    // 手机号焦点事件
    lpBlur: function() {
      if (this.loginPhone == '') {
        // 手机号不能为空
        this.phoneNull = true;
        this.phoneStar = false;
      } 
      // else if (localStorage.getItem(this.loginPhone)) {
      //   //判断手机号存在
      //   this.phoneRight = true;
      //   this.phoneStar = false;
      // } else {
      //   // 手机号未注册
      //   this.phoneNotExist = true;
      //   this.phoneStar = false;
      // }
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
      // var user = JSON.parse(localStorage.getItem(this.loginPhone))
      if (this.loginPw == '') {
        //密码不能为空
        this.pwNull = true;
        this.pwStar = false;
      } 
      // else if (this.loginPw == user.password) {
      //   //判断密码正确
      //   this.pwRight = true;
      //   this.pwStar = false;
      // } else {
      //   //密码不正确
      //   this.pwWrong = true;
      //   this.pwStar = false;
      // }
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
      if (this.codeImage == '') {
        //验证码不能为空
        this.imgNull = true;
        this.imgStar = false;
      } 
      // else if (/^(\d|[a-z]){4}$/.test(this.codeImage)) {
      //判断验证码正确
      // this.ajax.post('/xinda-api/register/sendsms', this.qs.stringify({ cellphone: this.loginPhone, smsType: 1, imgCode: this.codeImage })).then(data => {
      //   // console.log(data);
        // if (data.data.status == 1) {
        //   this.imgRight = true;
        //   this.imgStar = false;
        // }
      // })
      // } else {
      //   //验证码不正确
      //   this.imgWrong = true;
      //   this.imgStar = false;
      // }
    },
    // 验证码获得焦点
    ciFocus:function() {
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
      // console.log('loginUser'+loginUser)
      var md5 = require('md5');
      if (this.loginPhone == '') {
        // 手机号不能为空
        this.phoneNull = true;
        this.phoneStar = false;
        this.pwWrong = false;
        this.pwRight = false;
      } else if (this.loginPw == '') {
        //密码不能为空
        this.pwNull = true;
        this.pwStar = false;
        this.pwWrong = false;
        this.pwRight = false;
      } else if (this.codeImage == '') {
        //验证码不能为空
        this.imgNull = true;
        this.imgStar = false;
        this.imgWrong = false;
        this.imgRight = false;
      }
      

      // 判断登录条件
      //判断手机号存在
      this.ajax.post('/xinda-api/sso/login', this.qs.stringify({ loginId: this.loginPhone, password: this.loginPw, imgCode: this.codeImage })).then(data => {
        console.log(data.data.msg, data.data.status)
        if (data.data.msg == '账号不存在') {
          // console.log('账号不存在')
          this.phoneNull = true;
          this.phoneStar = false;
          this.pwWrong = false;
          this.pwRight = false;
          this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
        }
        if (data.data.msg == '图片验证码错误！') {
          this.imgWrong = true;
          this.imgRight = false;
          this.imgNull = false;
          this.imgStar = false;
          // console.log('图片验证码错误！')
          this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
        }
        if (data.data.msg == '账号或密码不正确！') {
          this.pwWrong = true;
          this.pwStar = false;
          this.pwNull = false;
          this.pwRight = false;
          // console.log('账号或密码不正确！')
          this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
        }
        if (data.data.status == 1) {
          this.phoneRight = true;
          this.phoneStar = false;
          this.imgRight = true;
          this.imgStar = false;
          this.pwRight = true;
          this.pwStar = false;
          // 登录成功后保存当前用户名
          var loginUser = {};
          loginUser.username = this.loginPhone;
          loginUser.password = this.loginPw;
          // sessionStorage.setItem(this.loginPhone,JSON.stringify(loginUser));
          // console.log('loginUser'+loginUser)
          sessionStorage.setItem('zancun',JSON.stringify(this.loginPhone))  //此处为登录状态信息，登陆后判断状态是否为登录
          location.replace('/#/inner/homepage')
          this.setNum(2)  //购物车物品数量
        }
      });
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


<template>
  <div class="r-outter">
    <!--小导航-->
    <div class="outBox">
      <div class="r-header">
        <a href="/#/inner/homepage">
          <div class="r-logo"></div>
        </a>
        <p>欢迎注册</p>
      </div>
    </div>

    <!--内容-->
    <div class="r-content">
      <!--注册操作界面-->
      <ul class="r-operate">
        <li class="phone"><input type="text" placeholder="请输入手机号" v-on:blur="phoneBlur" v-on:focus="phoneFocus" v-on:keyup="phoneKeyup" v-model="phoneVal">
          <span v-show="phoneNull">手机号不能为空</span>
          <span v-show="phoneExist">手机号已存在</span>
          <span v-show="phoneWrong">手机号格式错误</span>
          <span v-show="phoneRight" id="green">✔</span>
          <span v-show="phoneStar">*</span>
        </li>
        <li class="code-img"><input type="text" placeholder="请输入验证码" v-on:blur="codeImgBlur" v-on:focus="codeImgFocus" v-model="codeImgVal">
          <!--<img src="http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode" alt="">-->
          <img :src="imgUrl" alt="">
          <button v-on:click="buttonChange">看不清？换一张</button>
          <span v-show="imgNull">图片验证码不能为空</span>
          <span v-show="imgWrong">图片验证码错误</span>
          <span v-show="imgRight" id="green">✔</span>
          <span v-show="imgStar">*</span>
        </li>
        <li class="code-phone"><input type="text" placeholder="请输入验证码" v-model="codePhoneVal" v-on:blur="codePhoneBlur" v-on:focus="codePhoneFocus">
          <button v-on:click="buttonGet" v-bind:disabled="dis">
            <span v-show="get" id="blueget">点击获取</span>
            <span v-show="getNew" id="bluegetNew">重新获取{{count}}</span>
          </button>
          <span v-show="codeNull">动态验证码不能为空</span>
          <span v-show="codeWrong">动态验证码错误</span>
          <span v-show="codeRight" id="green">✔</span>
          <span v-show="codeStar">*</span>
        </li>
        <li class="android-wheel">
          <v-distpicker class="select" province="省" city="市" area="区" @selected="onSelected"></v-distpicker>
          <span v-show="addNull">地址不能为空</span>
          <span v-show="addRight" id="green">✔</span>
          <span v-show="addStar">*</span>
        </li>
        <li class="pw">
          <input type="password" placeholder="请设置密码" v-model="pwVal" v-on:blur="codePwBlur" v-on:focus="codePwFocus">
          <a href="javascript:void(0)">密码由6-16位数字和字母组成</a>
          <span v-show="pwNull">密码不能为空</span>
          <span v-show="pwWrong">密码错误</span>
          <span v-show="pwRight" id="green">✔</span>
          <span v-show="pwStar">*</span>
        </li>
        <li class="registerBut">
          <button @click="register">立即注册</button>
        </li>
        <li>
          <p>注册即同意遵守
            <a href="javascript:void(0)">《服务协议》</a>
          </p>
        </li>
      </ul>
      <!--跳转登录界面-->
      <div class="r-goto">
        <p>已有账号?</p>
        <div>
          <a href="#/outter/login">立即登录>></a>
        </div>
      </div>
    </div>
    <!--<router-view/>-->
  </div>
</template>



<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import VDistpicker from 'v-distpicker'
export default {
  name: 'HelloWorld',
  components: { VDistpicker },
  data() {
    return {
      // 点击获取验证码按钮
      dis: false,
      count: 60,
      // 手机号内容及报错提示
      phoneVal: '',
      phoneNull: false,
      phoneExist: false,
      phoneWrong: false,
      phoneStar: false,
      phoneRight: false,
      // 图片验证码及报错提示
      codeImgVal: '',
      imgNull: false,
      imgWrong: false,
      imgStar: false,
      imgRight: false,
      // 动态验证码及报错提示
      codePhoneVal: '',
      codeNull: false,
      codeWrong: false,
      codeStar: false,
      codeRight: false,
      // 密码及报错提示
      pwVal: '',
      pwNull: false,
      pwWrong: false,
      pwStar: false,
      pwRight: false,
      // 地址报错
      addNull: '',
      addStar: '',
      addRight: false,
      seleCode: '',
      address: '',
      // 获取验证码按钮
      getNew: false,
      get: true,
      imgUrl: '/xinda-api/ajaxAuthcode',
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    //手机号只能输入数字
    phoneKeyup: function() {
      this.phoneVal = this.phoneVal.replace(/\D/g, '');
    },
    // 手机号焦点事件
    phoneBlur: function() {
      // this.setNum(0);
      var phoneReg = /^1[3578]\d{9}$/;
      // var phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
      if (this.phoneVal == '') {
        this.phoneNull = true;//电话号码不能为空'
        this.phoneStar = false;
      } else if (phoneReg.test(this.phoneVal)) {
        this.phoneRight = true;
        this.phoneStar = false;
      } else {
        this.phoneWrong = true;
        this.phoneStar = false;
      }
    },
    // 手机号获得焦点事件
    phoneFocus: function() {
      this.phoneNull = false;
      this.phoneExist = false;
      this.phoneWrong = false;
      this.phoneRight = false;
      this.phoneStar = true;
    },
    //图片验证码
    codeImgBlur: function() {
      if (this.codeImgVal == '') {
        this.imgNull = true;
        this.imgStar = false;
      } else {
        this.ajax.post('/xinda-api/register/valid-sms', this.qs.stringify({ cellphone: this.phoneVal, smsType: 1, validCode: 111111 })).then(data => {
          console.log(data.data.msg, data.data.status)
          if (data.data.status == 1) {
            this.phoneStar = false;
            this.phoneRight = true;
          } else if (data.data.status == -2) {
            this.phoneExist = true;
            this.phoneStar = false;
          } else if (data.data.status == -3) {
            this.imgStar = false;
            // this.imgWrong = true;
          } else {
            this.phoneWrong = true;
            this.phoneStar = false;
          }
        })
      }
    },
    // 验证码获得焦点事件
    codeImgFocus: function() {
      if (this.codeImgVal != '') {
        // 验证码需要重新输入时更新验证码
        this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
      }
      this.imgStar = true;
      this.imgNull = false;
      this.imgWrong = false;
      this.imgRight = false;
    },
    //更换图片验证码
    buttonChange: function() {
      this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
    },

    //动态验证码
    codePhoneBlur: function() {
      if (this.codePhoneVal == '') {
        this.codeNull = true;
        this.codeStar = false;
      } else if (this.codePhoneVal == 111111) {
        this.codeStar = false;
        this.codeRight = true;
      } else {
        this.codeWrong = true;
        this.codeStar = false;
      }
      // this.ajax.post('/xinda-api/register/valid-sms', this.qs.stringify({ cellphone: this.phoneVal, smsType: 1, validCode: 111111 })).then(data => {
      //   console.log(data.data.msg, data.data.status)
      //   
      // })
    },
    // 验证码获得焦点
    codePhoneFocus: function() {
      this.codeNull = false;
      this.codeWrong = false;
      this.codeRight = false;
      this.codeStar = true
    },

    //密码证码
    codePwBlur: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.pwVal == '') {
        //密码不为空
        this.pwNull = true;
        this.pwStar = false;
      } else if (newPwReg.test(this.pwVal)) {
        // 验证通过
        this.pwStar = false;
        this.pwRight = true;
      } else {
        // 密码格式错误
        this.pwWrong = true;
        this.pwStar = false;
      }
    },
    // 密码获得焦点
    codePwFocus: function() {
      this.pwNull = false;
      this.pwWrong = false;
      this.pwStar = true;
      this.pwRight = false;
    },

    //地址验证
    onSelected: function(data) {
      this.addStar = false;
      this.addRight = true;
      this.seleCode = data.area.code;
      this.address = data.province.value + ' ' + data.city.value + ' ' + data.area.value;
      // console.log(this.address);
    },

    // 点击获取验证码
    buttonGet: function() {
      if (this.phoneVal == '') {
        //电话号码不能为空
        this.phoneNull = true;
        this.phoneStar = false;
      } else {
        this.phoneWrong = false;
        this.phoneStar = true;
        this.phoneNull = false;
        this.phoneRight = false;
        this.phoneExist = false;
        if (/^1[3578]\d{9}$/.test(this.phoneVal)) {
          // 手机号匹配正确
          if (this.codeImgVal == '') {
            this.imgNull = true;
            this.imgStar = false;
          } else {
            // 图片验证码匹配
            this.ajax.post('/xinda-api/register/sendsms', this.qs.stringify({ cellphone: this.phoneVal, smsType: 1, imgCode: this.codeImgVal })).then(data => {
              // console.log(data);
              if (data.data.status == 1) {
                this.imgStar = false;
                this.imgRight = true;
                this.imgWorng = false;
                this.imgNull = false;
                this.dis = true;
                this.getNew = true;
                this.get = false;
                // 60秒倒计时
                var that = this;
                var dic = setInterval(function() {
                  that.count--;
                  if (that.count == 1) {
                    // 60秒倒计时结束后清除计时器
                    clearInterval(dic);
                    that.dis = false;
                    that.getNew = false;
                    that.get = true;
                  }
                }, 1000);
              } else {
                // 验证码匹配失败
                this.imgRight = false;
                this.imgWrong = true;
              }
            })
          }
        } else {
          //电话号码格式错误
          this.phoneWrong = true;
          this.phoneStar = false;
          this.phoneNull = false;
          this.phoneRight = false;
          this.phoneExist = false;
        }
      }
    },



    //注册按钮
    register: function() {
      // console.log(user)
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      var phoneReg = /^1[3578]\d{9}$/;
      var md5 = require('md5');
      if (this.phoneVal == '') {
        //电话号码不能为空'
        this.phoneNull = true;
        this.phoneStar = false;
      } else if (this.codeImgVal == '') {
        // 图片验证码不能为空
        this.imgStar = true;
      } else if (this.codePhoneVal == '') {
        // 动态验证码不能为空
        this.codeNull = true;
        this.codeStar = false;
      } else if (this.pwVal == '') {
        // 密码不能为空
        this.pwNull = true;
        this.pwStar = false;
      } else if (this.address == '省 市 区') {
        // 地址不能为空
        this.addNull = true;
        this.addStar = false;
      }
      // 判断注册条件
      if (phoneReg.test(this.phoneVal)) {
        this.ajax.post('/xinda-api/register/valid-sms', this.qs.stringify({ cellphone: this.phoneVal, smsType: 1, validCode: 111111 })).then(data => {
          console.log(data.data.msg, data.data.status)
          if (data.data.status == 2) {
            // 用户名已存在
            this.phoneExist = true;
            this.phoneStar = false;
          }
          else if (data.data.status == 1 && this.codePhoneVal == 111111 && newPwReg.test(this.pwVal)) {
            this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/register/register', this.qs.stringify({ cellphone: this.phoneVal, smsType: 1, validCode: 111111, password: md5(this.pwVal), regionId: this.seleCode })).then(data => {
              console.log(data.data)
              console.log(this.pwVal)
            })
            var user = {};
            user.name = this.phoneVal;
            user.passward = md5(this.pwVal);
            user.phoneNum = this.phoneVal;
            user.password = this.pwVal;
            user.add = this.address;
            localStorage.setItem(this.phoneVal, JSON.stringify(user));
            console.log(user)
            location.href = '#/outter/login';
          }
        })
      }
    },
  }
}
</script>



 
<style lang="less">
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
  // width: 1200px; // 小导航
  .outBox {
    background: #fff;
  }
  .r-header {
    margin: 0 auto 52px;
    background: #fff;
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
    display: flex; // 左侧操作
    .r-operate {
      text-align: left;
      margin: 53px 19px 0 147px;
      width: 433px;
      height: 383px; // border:1px solid #88f;
      span {
        margin-left: 5px;
        font-size: 11px;
        color: red;
      }
      li {
        margin-bottom: 20px;
      }
      li input,
      .registerBut button {
        padding-left: 26px;
        width: 166px;
        height: 36px;
        border-radius: 3px;
        border: 1px solid #cbcbcb;
        outline: 0;
      }
      .android-wheel {
        display: flex;
        select {
          margin-right: 5px;
          padding: 0 0 0 5px;
          font-size: 12px;
          width: 88px;
          height: 36px;
          border-radius: 3px;
          border: 1px solid #cbcbcb;
          outline: 0;
        }
        span {
          margin: 10px 0 0 5px;
        }
      }
      .urban {
        margin-right: 0;
      }
      .phone input,
      .pw input {
        width: 255px;
      }
      .pw {
        position: relative;
        a {
          position: absolute;
          margin: 37px 0 0 -285px;
          font-size: 11px;
          text-decoration: none;
          color: #aaa;
        }
      }
      .registerBut button {
        width: 281px;
        background: #fff;
        padding-left: 0px;
        color: #2693d6;
        border: 1px solid #2693d6;
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
      .code-phone {
        position: relative;
      }
      .code-phone p {
        // display: none;
        margin: -52px 0 0 0px;
        position: absolute;
        background: #ddd;
        border-radius: 3px;
        width: 194px;
        height: 14px;
        ;
      }
      .code-img {
        position: relative;
        display: flex;
        img {
          margin-left: 4px;
          background: #fff;
          width: 85px;
          height: 36px;
          border-radius: 3px;
        }
        span {
          margin-top: 11px;
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
      p {
        margin-top: -10px;
        margin-left: -150px;
        font-size: 13px;
        text-align: center;
        a {
          color: #2693d6;
          text-decoration: none;
        }
      }
    }
  } // 右侧跳转
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
  #green {
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


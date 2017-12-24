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
        <p class="fail" v-show="fail">注册失败，请检验输入信息是否正确</p>
        <li class="phone"><input type="text" placeholder="请输入手机号" v-on:blur="phoneBlur" v-on:focus="phoneFocus" v-on:keyup="phoneKeyup" v-model="phoneVal">
          <span>{{phoneErr}}</span>
        </li>
        <li class="code-img"><input type="text" placeholder="请输入验证码" v-on:blur="codeImgBlur" v-on:focus="codeImgFocus" v-model="codeImgVal">
          <!--<img src="http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode" alt="">-->
          <img :src="imgUrl" alt="">
          <button v-on:click="buttonChange">看不清？换一张</button>
          <span>{{imgErr}}</span>
        </li>
        <li class="code-phone"><input type="text" placeholder="请输入验证码" v-model="codePhoneVal" v-on:blur="codePhoneBlur" v-on:focus="codePhoneFocus">
          <button v-on:click="buttonGet" v-bind:disabled="dis">
            <span v-show="get" id="blueget">点击获取</span>
            <span v-show="getNew" id="bluegetNew">重新获取{{count}}</span>
          </button>
          <span>{{codeErr}}</span>
        </li>
        <li class="android-wheel">
          <div class="adress">
            <select @change="proChange" v-model="province">
              <option value="0">省</option>
              <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
            </select>
            <select @change="cityChange" v-model="city">
              <option value="0">市</option>
              <option :value="code" v-for="(city,code) in citys" :key="city.code">{{city}}</option>
            </select>
            <select @change="areaChange" v-model="area">
              <option value="0">区</option>
              <option :value="code" v-for="(area,code) in areas" :key="area.code">{{area}}</option>
            </select>
          </div>
          <span>{{addErr}}</span>
        </li>
        <li class="pw">
          <input :type="pwType" placeholder="请设置密码" v-model="pwVal" v-on:blur="codePwBlur" v-on:focus="codePwFocus">
          <img :src="regUrl" alt="" class="eye" @click="changeType">
          <a href="javascript:void(0)">密码由6-16位数字和字母组成</a>
          <span>{{pwErr}}</span>
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
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
// 密码明码暗码图片切换
const eye = [
  require('../images/login/invisible.png'),
  require('../images/login/visible.png'),
];
// 引入三级联动数据
import dist from '../images/districts';
// 密码加密
var md5 = require('md5');
export default {
  name: 'HelloWorld',
  // components: { VDistpicker },
  data() {
    return {
      fail: false,//注册失败提示信息
      // 点击获取验证码按钮
      dis: false,
      count: '',
      // 手机号内容及报错提示
      phoneVal: '',
      phoneErr: '\u2736',
      // 图片验证码及报错提示
      codeImgVal: '',
      imgErr: '\u2736',
      // 动态验证码及报错提示
      codePhoneVal: '',
      codeErr: '\u2736',
      // 密码及报错提示
      pwVal: '',
      pwErr: '\u2736',
      regUrl: eye[0],
      // 切换密码可不可见
      pwType: 'password',
      // 地址报错
      addErr: '\u2736',
      seleCode: '',
      provinces: dist[100000],
      citys: [],
      areas: [],
      province: '0',
      city: '0',
      area: '0',
      // address: '',
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
      var phoneReg = /^1[3578]\d{9}$/;
      // var phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
      if (this.phoneVal == '') {
        this.phoneErr = '电话号码不能为空';
      } else if (phoneReg.test(this.phoneVal)) {
        this.phoneErr = '\u2736';
        this.ajax.post('/xinda-api/register/valid-sms', this.qs.stringify({ 
          cellphone: this.phoneVal, smsType: 1, validCode: 111111 })).then(data => {
          console.log(data.data.msg, data.data.status)
          if (data.data.status == -2) {
            this.phoneErr = '手机号已注册';
          } else {
            this.phoneErr = '\u2736';
          }
        })
      } else {
        this.phoneErr = '电话号码格式错误';
      }
    },
    // 手机号获得焦点事件
    phoneFocus: function() {
      this.phoneErr = '\u2736';
    },
    //图片验证码
    codeImgBlur: function() {
      if (this.codeImgVal == '') {
        this.imgErr = '图片验证码不能为空';
      }
    },
    // 验证码获得焦点事件
    codeImgFocus: function() {
      if (this.codeImgVal != '') {
        // 验证码需要重新输入时更新验证码
        this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
        this.codeImgVal = '';
      }
      this.codeErr = '\u2736';
    },
    //更换图片验证码
    buttonChange: function() {
      this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
      this.codeImgVal = '';
    },

    //动态验证码
    codePhoneBlur: function() {
      if (this.codePhoneVal == '') {
        this.codeErr = '动态验证码不能空';
      } else if (this.codePhoneVal == 111111) {
        this.codeErr = '\u2736';
      } else {
        this.codeErr = '动态验证码错误';
      }
    },
    // 验证码获得焦点
    codePhoneFocus: function() {
      this.codeErr = '\u2736';
    },

    //密码证码
    codePwBlur: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.pwVal == '') {
        this.pwErr = '密码不能为空';
      } else if (newPwReg.test(this.pwVal)) {
        // 验证通过
        this.pwErr = '\u2736';
      } else {
        this.pwErr = '密码格式错误';
      }
    },
    // 密码获得焦点
    codePwFocus: function() {
      this.pwErr = '\u2736';
    },
    // 切换密码明码和暗骂
    changeType: function() {
      this.pwType = this.pwType === 'password' ? 'text' : 'password'
      if (this.pwType === 'password') {
        // 密码
        this.regUrl = eye[0];
      } else {
        // 明码
        this.regUrl = eye[1];
      }
    },
    //地址验证
    proChange() {
      //  省
      // console.log(code)
      this.citys = dist[this.province];
      this.city = "0";
      this.area = "0";
      if (this.province != "0") {
        this.citys = dist[this.province];
      } else {
        this.citys = [];
        this.areas = [];
      }
    },
    cityChange() {
      // 市
      this.areas = dist[this.city];
      // console.log(this.city)
    },
    // 区
    areaChange() {
      this.seleCode = this.area;
      // console.log(this.seleCode)
    },


    // 点击获取验证码
    buttonGet: function() {
      if (this.phoneVal == '') {
        this.phoneErr = '电话号码不能为空';
      } else {
        this.phoneErr = '\u2736';
        if (/^1[3578]\d{9}$/.test(this.phoneVal)) {
          // 手机号匹配正确
          if (this.codeImgVal == '') {
            this.imgErr = '图片验证码不能为空';
          } else {
            // 图片验证码匹配
            this.ajax.post('/xinda-api/register/sendsms', this.qs.stringify({ 
              cellphone: this.phoneVal, smsType: 1, imgCode: this.codeImgVal })).then(data => {
              // console.log(data.data);
              if (data.data.status == 1) {
                this.imgErr = '\u2736';
                this.dis = true;
                this.getNew = true;
                this.get = false;
                // 60秒倒计时
                this.count = 60;
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
                this.imgErr = '图片验证码错误';
              }
            })
          }
        } else {
          //电话号码格式错误
          this.phoneErr = '电话号码格式错误';
        }
      }
    },



    //注册按钮
    register: function() {
      // console.log(this.seleCode)
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      var phoneReg = /^1[3578]\d{9}$/;
      if (this.phoneVal == '') {
        this.phoneErr = '电话号码不能为空';
      } else if (this.codeImgVal == '') {
        this.imgErr = '图片验证码不能为空';
      } else if (this.codePhoneVal == '') {
        this.codeErr = '动态验证码不能空';
      } else if (this.seleCode == '') {
        // 地址不能为空
        // console.log(this.seleCode)
        this.addErr = '地址不能为空';
      } else if (this.pwVal == '') {
        this.pwErr = '密码不能为空';
      }
      // 判断注册条件

      else if (phoneReg.test(this.phoneVal)) {
        // 注册验证借口
        this.ajax.post('/xinda-api/register/valid-sms', this.qs.stringify({ 
          cellphone: this.phoneVal, smsType: 1, validCode: 111111 })).then(data => {
          // console.log(data.data.msg, data.data.status)
          if (data.data.status == 2) {
            this.phoneErr = '手机号已注册';
          }
          else if (data.data.status == 1 && this.codePhoneVal == 111111 && newPwReg.test(this.pwVal)) {
            // 注册提交接口
            this.ajax.post('/xinda-api/register/register', this.qs.stringify({ 
              cellphone: this.phoneVal, smsType: 1, validCode: 111111, password: md5(this.pwVal), regionId: this.seleCode })).then(data => {
              // console.log(data.data)
            })
            this.fail = false;//注册失败提示信息
            this.phoneErr = '\u2736';
            var user = {};
            user.name = this.phoneVal;
            user.passward = md5(this.pwVal);
            user.phoneNum = this.phoneVal;
            user.password = this.pwVal;
            user.add = this.address;
            localStorage.setItem(this.phoneVal, JSON.stringify(user));
            // console.log(user)
            location.href = '#/outter/login';
          } else {
            this.fail = true;
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
    margin: 0 auto 50px;
    background: #fff;
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
    display: flex; // 左侧操作
    .r-operate {
      position: relative;
      text-align: left;
      margin: 53px 19px 0 147px;
      width: 433px;
      height: 383px; // border:1px solid #88f;
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
          background: #fff;
          outline: 0;
        }
        span {
          margin: 10px 0 0 5px;
        }
      }
      .urban {
        margin-right: 0;
      }
      .phone input {
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
        input {
          width: 255px;
        }
        .eye {
          position: absolute;
          width: 18px;
          height: 10px;
          margin: 13px 0 0 -40px;
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


<template>
<div class="register">

  <ul class="r-operate">
    <p class="msg" >{{message}}</p>
    <li class="phone"><input type="text" placeholder="请输入手机号" v-on:blur="phoneBlur" v-on:focus="phoneFocus" v-on:keyup="phoneKeyup" v-model="phoneVal">
    </li>
    <li class="codeImg"><input type="text" placeholder="请输入验证码" v-on:blur="codeImgBlur" v-on:focus="codeImgFocus" v-model="codeImgVal">
      <img :src="imgUrl" alt="" v-on:click="buttonChange">
    </li>
    <li class="codePhone"><input type="text" placeholder="请输入验证码" v-model="codePhoneVal" v-on:blur="codePhoneBlur" v-on:focus="codePhoneFocus">
      <button v-on:click="buttonGet" :class="{blue:dis==true}"v-bind:disabled="dis">
        <span v-show="get" id="blueget">点击获取</span>
        <span v-show="getNew" id="bluegetNew">重新获取{{count}}</span>
      </button>
    </li>
    <li class="adress">
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
    </li>
    <li class="pw">
      <input :type="pwType" placeholder="请设置密码" v-model="pwVal" v-on:blur="codePwBlur" v-on:focus="codePwFocus">
      <img :src="regUrl" alt="" class="eye" @click="changeType">
      <!-- <a href="javascript:void(0)">密码由6-16位数字和字母组成</a> -->
    </li>
    <li class="registerBut">
      <button @click="register">立即注册</button>
    </li>
  </ul>
</div>
</template>



<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
// 密码明码暗码图片切换
const eye = [
  require('../images/login/invisible.png'),
  require('../images/login/visible.png'),
];
// 引入三级联动数据
import dist from "../../images/districts";
// 密码加密
var md5 = require("md5");
export default {
  data() {
    return {
      message: "",
      // fail: false, //注册失败提示信息
      // 点击获取验证码按钮
      dis: false,
      count: "",
      phoneVal: "",
      codeImgVal: "",
      codePhoneVal: "",
      pwVal: "",
      regUrl: eye[0],
      pwType: "password",
      seleCode: "",
      provinces: dist[100000],
      citys: [],
      areas: [],
      province: "0",
      city: "0",
      area: "0",
      // address: '',
      // 获取验证码按钮
      getNew: false,
      get: true,
      imgUrl: "/xinda-api/ajaxAuthcode"
    };
  },
    created(){
    this.setTitle('注册')
  },
  methods: {
    ...mapActions(['setTitle']),
    //手机号只能输入数字
    phoneKeyup: function() {
      this.phoneVal = this.phoneVal.replace(/\D/g, "");
    },
    // 手机号焦点事件
    phoneBlur: function() {
      console.log('123')
      var phoneReg = /^1[3578]\d{9}$/;
      // var phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
      if (this.phoneVal == "") {
        this.message = "电话号码不能为空";
      } else if (phoneReg.test(this.phoneVal)) {
        this.message = "";
        this.ajax
          .post(
            "/xinda-api/register/valid-sms",
            this.qs.stringify({
              cellphone: this.phoneVal,
              smsType: 1,
              validCode: 111111
            })
          )
          .then(data => {
            // console.log(data.data.msg, data.data.status);
            if (data.data.status == -2) {
              this.message = "手机号已注册";
            } else {
              this.message = "";
            }
          });
      } else {
        this.message = "电话号码格式错误";
      }
    },
    // 手机号获得焦点事件
    phoneFocus: function() {
      this.message = '';
    },
    //图片验证码
    codeImgBlur: function() {
      if (this.codeImgVal == "") {
        this.message = '图片验证码不能为空';
      }
    },
    // 验证码获得焦点事件
    codeImgFocus: function() {
      if (this.codeImgVal != "") {
        // 验证码需要重新输入时更新验证码
        this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
        this.message = '';
      }
      this.message = "";
    },
    //更换图片验证码
    buttonChange: function() {
      this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
      this.message = '';
    },

    //动态验证码
    codePhoneBlur: function() {
      if (this.codePhoneVal == "") {
        this.message = '动态验证码不能空';
      } else if (this.codePhoneVal == 111111) {
        this.message = '';
      } else {
        this.message = '动态验证码错误';
      }
    },
    // 验证码获得焦点
    codePhoneFocus: function() {
      this.message = '';
    },

    //密码证码
    codePwBlur: function() {
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.pwVal == "") {
        this.message = "密码不能为空";
      } else if (newPwReg.test(this.pwVal)) {
        // 验证通过
        this.message = '';
      } else {
        this.message = '密码格式错误';
      }
    },
    // 密码获得焦点
    codePwFocus: function() {
      this.message = '';
    },
    // 切换密码明码和暗码
    changeType: function() {
      this.pwType = this.pwType === "password" ? "text" : "password";
      if (this.pwType === "password") {
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
      if (this.phoneVal == "") {
        this.message = '电话号码不能为空';
      } else {
        this.message = "";
        if (/^1[3578]\d{9}$/.test(this.phoneVal)) {
          // 手机号匹配正确
          if (this.codeImgVal == "") {
            this.message = '图片验证码不能为空';
          } else {
            // 图片验证码匹配
            this.ajax
              .post(
                "/xinda-api/register/sendsms",
                this.qs.stringify({
                  cellphone: this.phoneVal,
                  smsType: 1,
                  imgCode: this.codeImgVal
                })
              )
              .then(data => {
                // console.log(data.data);
                if (data.data.status == 1) {
                  this.message = '';
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
                  this.message = '图片验证码错误';
                }
              });
          }
        } else {
          //电话号码格式错误
          this.message = '电话号码格式错误';
        }
      }
    },

    //注册按钮
    register: function() {
      // console.log(this.seleCode)
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      var phoneReg = /^1[3578]\d{9}$/;
      if (this.phoneVal == "") {
        this.message = '电话号码不能为空';
      } else if (this.codeImgVal == "") {
        this.message = '图片验证码不能为空';
      } else if (this.codePhoneVal == "") {
        this.message = '动态验证码不能空';
      } else if (this.seleCode == "") {
        // 地址不能为空
        // console.log(this.seleCode)
        this.message = '地址不能为空';
      } else if (this.pwVal == "") {
        this.message = '密码不能为空';
      } else if (phoneReg.test(this.phoneVal)) {
        // 判断注册条件

        // 注册验证借口
        this.ajax
          .post(
            "/xinda-api/register/valid-sms",
            this.qs.stringify({
              cellphone: this.phoneVal,
              smsType: 1,
              validCode: 111111
            })
          )
          .then(data => {
            // console.log(data.data.msg, data.data.status)
            if (data.data.status == 2) {
              this.message = '手机号已注册';
            } else if (
              data.data.status == 1 &&
              this.codePhoneVal == 111111 &&
              newPwReg.test(this.pwVal)
            ) {
              // 注册提交接口
              this.ajax
                .post(
                  "/xinda-api/register/register",
                  this.qs.stringify({
                    cellphone: this.phoneVal,
                    smsType: 1,
                    validCode: 111111,
                    password: md5(this.pwVal),
                    regionId: this.seleCode
                  })
                )
                .then(data => {
                  // console.log(data.data)
                });
              this.fail = false; //注册失败提示信息
              this.message = '';
              var user = {};
              user.name = this.phoneVal;
              user.passward = md5(this.pwVal);
              user.phoneNum = this.phoneVal;
              user.password = this.pwVal;
              user.add = this.address;
              localStorage.setItem(this.phoneVal, JSON.stringify(user));
              // console.log(user)
              location.href = "#/weChatdog/wLogin";
            } else {
              this.fail = true;
            }
          });
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
.r-operate {
    margin-top: 2rem;
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
      height: 0.73rem;
      border: 1px solid #b0b0b0;
      outline: 0;
      font-size: 0.28rem;
    }
    input::-webkit-input-placeholder {
      font-size: 0.28rem;
    }
  }
  .phone input,
  .pw input {
    width: 5.46rem;
  }
  .phone {
    margin-top: 0.71rem;
  }
  .codeImg input,
  .codePhone input {
    margin-right: 0.3rem;
    width: 2.72rem;
  }
  .codeImg img {
    width: 2.43rem;
  }
  .codePhone button {
    width: 2.43rem;
    background: #2693d4;
    color: #fff;
    font-size: 0.28rem;
  }
  .codePhone .blue{
    background: #999;
  }
  .adress select {
    width: 1.75rem;
    height: 0.73rem;
    border: 1px solid #b0b0b0;
    margin-right: 0.21rem;
    color: #9b9b9b;
    font-size: 0.28rem;
    background: #fff;
  }
  .adress select:nth-child(3) {
    margin-right: 0rem;
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
  .registerBut button {
    margin: 1.13rem 0 4.67rem 0;
    width: 5.65rem;
    height: 0.73rem;
    background: #2693d4;
    color: #fff;
    outline: 0;
    font-size: 0.28rem;
  }
}
</style>


<template>
  <div class="r-outter">
    <!--小导航-->
    <div class="outBox">
      <div class="r-header">
      <div class="r-logo"></div>
      <p>欢迎注册</p>
    </div>
    </div>

    
    <!--内容-->
    <div class="r-content">
      <!--注册操作界面-->
      <ul class="r-operate">
        <li class="phone"><input type="text" placeholder="请输入手机号" v-on:blur="phoneBlur" v-on:focus="phoneFocus" v-on:keyup="phoneKeyup" v-model="phoneVal">
          <span>*</span>
        </li>
        <li class="code-img"><input type="text" placeholder="请输入验证码" v-on:blur="codeImgBlur" v-on:focus="codeImgFocus" v-model="codeImgVal">
          <img src="http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode" alt="">
          <button v-on:click="buttonChange">看不清？换一张</button>
          <span>*</span>
        </li>
        <li class="code-phone"><input type="text" placeholder="请输入验证码" v-model="codePhoneVal" v-on:blur="codePhoneBlur" v-on:focus="codePhoneFocus">
          <!--<p></p>-->
          <button v-on:click="buttonGet">点击获取</button>
          <span>*</span>
        </li>
        <li class="android-wheel">
          <v-distpicker class="select" v-on:change="selChange" province="省" city="市" area="区"></v-distpicker>
          <span>*</span>
        </li>
        <li class="pw">
          <input type="password" placeholder="请设置密码" v-model="pwVal" v-on:blur="codePwBlur" v-on:focus="codePwFocus">
          <a href="javascript:void(0)">密码由6-16位数字和字母组成</a>
          <span>*</span>
        </li>
        <li class="registerBut">
          <button>立即注册</button>
        </li>
        <li>
          <p>注册即同意遵守
            <span>《服务协议》</span>
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
export default {
  name: 'HelloWorld',
  data() {
    return {
      phoneVal: '',
      codeImgVal: '',
      codePhoneVal: '',
      pwVal: '',
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    //手机号只能输入数字
    phoneKeyup: function() {
      this.phoneVal = this.phoneVal.replace(/\D/g, '');
      console.log(this.phoneVal);
    },

    // 手机号验证失去焦点事件
    phoneBlur: function() {
      var phoneReg = /^1[3578]\d{9}$/;
      // let result = phoneReg.test(this.phoneVal);
      // console.log(this.phoneVal)
      var phoneSpan = document.querySelector('.phone span');
      // var phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
      var phoneValue = this.phoneVal;
      if (phoneValue == '') {
        phoneSpan.innerHTML = '电话号码不能为空';
        phoneSpan.style.color = 'red';
      } else if (phoneReg.test(phoneValue)) {
        // phoneSpan.innerHTML = '*';
        phoneSpan.innerHTML = '✔';
        phoneSpan.style.color = 'green';
      } else {
        phoneSpan.innerHTML = '电话号码格式错误';
        phoneSpan.style.color = 'red';
      }
    },
    // 手机号验证获得焦点事件
    phoneFocus: function() {
      var phoneSpan = document.querySelector('.phone span');
      phoneSpan.innerHTML = '*';
      phoneSpan.style.color = 'red';
    },


    //图片验证码
    codeImgBlur: function() {
      var codeSpan = document.querySelector('.code-img span');
      var codeImgValue = this.codeImgVal;
      if (codeImgValue == '') {
        codeSpan.innerHTML = '验证码不能为空';
        codeSpan.style.color = 'red';
      }
    },
    codeImgFocus: function() {
      var codeSpan = document.querySelector('.code-img span');
      codeSpan.innerHTML = '*';
      codeSpan.style.color = 'red';

    },
    //点击更换图片验证码
    buttonChange: function() {
      var codeImage = document.querySelector('.code-img img');
      codeImage.src = 'http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode';
    },



    //动态验证码
    codePhoneBlur: function() {
      var codePhoneSpan = document.querySelector('.code-phone span');
      var codePhoneValue = this.codePhoneVal;
      if (codePhoneValue == '') {
        codePhoneSpan.innerHTML = '验证码不能为空';
        codePhoneSpan.style.color = 'red';
      }
    },
    codePhoneFocus: function() {
      var codePhoneSpan = document.querySelector('.code-phone span');
      codePhoneSpan.innerHTML = '*';
      codePhoneSpan.style.color = 'red';
    },



    //动态验证码
    codePwBlur: function() {
      var pwValSpan = document.querySelector('.pw span');
      var pwValue = this.pwVal;
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if(pwValue==''){
        pwValSpan.innerHTML = "密码不能为空";
        pwValSpan.style.color = "red";
      }else if(newPwReg.test(pwValue)){
        pwValSpan.innerHTML = "✔";
        pwValSpan.style.color = "green";
      }else{
        pwValSpan.innerHTML = "密码格式错误";
        pwValSpan.style.color = "red";
      }
    },
    codePwFocus: function() {
      var pwValSpan = document.querySelector('.pw span');
      pwValSpan.innerHTML = '*';
      pwValSpan.style.color = 'red';

    },

    // 点击获取验证码
    buttonGet: function() {
      var count = 60;
      var button = document.querySelector('.code-phone button');
      button.disabled = true;
      button.style.background = '#ddd';
      button.innerHTML = '重新获取'+count;
      var dic = setInterval(function(){
        count--;
        button.innerHTML = '重新获取'+count;
        if(count==1){
          clearInterval(dic);
          button.style.background = '#fff';
          button.innerHTML = '点击获取';
          button.disabled = false;
        }
      },1000);

      // created(){
      //   var that = this;//then 的function的this不指向
      //   //then第一个函数成功回调函数
      //   this.ajax.post('http://blog.sina.com.cn/s/blog_95153c710102viow.html').then(function(data) {
      //     // var rData = data.data.data;
      //     console.log(data);
      //     // that.products = rData;
      //   })  
      // } 

    },
    selChange:function(){
      // console.log(province)
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
  .outBox{
    background: #fff;
  }
  .r-header {
    margin-bottom: 52px;
    // margin: 0 auto;
    background: #fff;
    // padding-left: 200px;
    padding-left: 12.5%;
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
    // 左侧操作
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
      .android-wheel{
        display: flex;
        select{
          margin-right: 5px;
          padding: 0 0 0 5px;
          font-size: 12px;
          width: 88px;
          height: 36px;
          border-radius: 3px;
          border: 1px solid #cbcbcb;
          outline: 0;
        }
        span{
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
      .pw{
        position: relative;
        a{
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
        span {
          color: #2693d6;
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
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


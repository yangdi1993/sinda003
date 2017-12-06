<template>
  <div class="r-outter">
    <!--小导航-->
    <div class="outBox">
      <div class="r-header">
        <a href="/#/inner/homepage"><div class="r-logo"></div></a>
        <p>欢迎登陆</p>
      </div>
    </div>
    <!--内容-->
    <div class="r-content">
      <!--注册操作界面-->
      <ul class="r-operate">
        <li class="phone">
          <input type="text" placeholder="请输入手机号" v-model="loginPhone" v-on:blur="lpBlur" v-on:focus="lpFocus">
          <span>*</span>
        </li>
        <li class="pw">
          <input type="text" placeholder="请输入密码" v-model="loginPw" v-on:blur="lwBlur" v-on:focus="lwFocus">
          <span>*</span>
        </li>
        <li class="code-img">
          <input type="text" placeholder="请输入验证码"  v-model="codeImage" v-on:blur="ciBlur" v-on:focus="ciFocus">
          <img src="http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode" alt="">
          <span>*</span>
          <button v-on:click="buttonChange">看不清？换一张</button>
        </li>
        <li class="forget">
          <a href="#/outter/forget">忘记密码</a>
        </li>
        <li class="loginBut">
          <button>立即登录</button>
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
export default {
  name: 'HelloWorld',
  data() {
    return {
      loginPhone:'',
      loginPw:'',
      codeImage:'',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    //点击更换图片验证码
    buttonChange: function() {
      var codeImage = document.querySelector('.code-img img');
      codeImage.src = 'http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode';
    },

    // 手机号焦点事件
    lpBlur:function(){
      var phoneSpan = document.querySelector('.phone span');
      if(this.loginPhone==''){
        phoneSpan.innerHTML = "手机号不能为空";
        phoneSpan.style.color = "red";
      }else if(''){//判断手机号存在
        phoneSpan.innerHTML = "✔";
        phoneSpan.style.color = "green";
      }else{
        phoneSpan.innerHTML = "手机号未注册";
        phoneSpan.style.color = "red";

      }
    },
    lpFocus:function(){
      var phoneSpan = document.querySelector('.phone span');
      phoneSpan.innerHTML = "*";
      phoneSpan.style.color = "red";
    },
    // 密码焦点事件
    lwBlur:function(){
      var pwSpan = document.querySelector('.pw span');
      if(this.loginPw==''){
        pwSpan.innerHTML='密码不能为空';
        pwSpan.style.color = 'red';
      }else if(''){//判断密码正确

        pwSpan.innerHTML='✔';
        pwSpan.style.color = 'green';
      }else{
        pwSpan.innerHTML='密码不正确,请重新输入';
        pwSpan.style.color = 'red';
      }

    },
    lwFocus:function(){
      var pwSpan = document.querySelector('.pw span');
      pwSpan.innerHTML='*';
        pwSpan.style.color = 'red';
    },
    // 验证码焦点事件
    ciBlur:function(){
      var codeImgSpan = document.querySelector('.code-img span');
      if(this.codeImage==''){
        codeImgSpan.innerHTML='验证码不能为空';
        codeImgSpan.style.color = 'red';
      }else if(''){//判断验证码正确

        codeImgSpan.innerHTML='✔';
        codeImgSpan.style.color = 'green';
      }else{
        codeImgSpan.innerHTML='验证码不正确,请重新输入';
        codeImgSpan.style.color = 'red';
      }
    },
    ciFocus:function(){
      var codeImgSpan = document.querySelector('.code-img span');
      codeImgSpan.innerHTML='*';
      codeImgSpan.style.color = 'red';
    },
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
  .outBox{
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
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


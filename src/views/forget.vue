<template>
  <div class="r-outter">
    <!--小导航-->
    <div class="outBox">
      <div class="r-header">
        <a href="/#/inner/homepage"><div class="r-logo"></div></a>
        <p>找回密码</p>
      </div>
    </div>

    <!--内容-->
    <div class="r-content">
      <!--注册操作界面-->
      <ul class="r-operate">
        <li class="phone"><input type="text" placeholder="请输入手机号" v-model="forgetPhone" v-on:blur="fpBlur" v-on:focus="fpFocus">
          <span>*</span>
        </li>
        <li class="code-img">
          <input type="text" placeholder="请输入验证码" v-model="fImg" v-on:blur="fiBlur" v-on:focus="fiFocus">
          <img src="http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode" alt="">
          <span>*</span>
          <button v-on:click="buttonChange">看不清？换一张</button>
        </li>
        <li class="code-phone">
          <input type="text" placeholder="请输入验证码" v-model="fCmg" v-on:blur="fcBlur" v-on:focus="fcFocus">
          <button>点击获取</button>
          <span>*</span>
        </li>
        <li class="newPw">
          <input type="password" placeholder="请输入新密码" v-model="fNew" v-on:blur="fnBlur" v-on:focus="fnFocus">
          <a href="#">密码由6-16位数字和字母组成</a>
          <span>*</span>
        </li>
        <li class="pw">
          <input type="text" placeholder="请再次输入密码" v-model="fPw" v-on:blur="fPwBlur" v-on:focus="fPwFocus">
          <span>*</span>
        </li>
        <li class="modify">
          <button>确认修改</button>
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
export default {
  name: 'HelloWorld',
  data() {
    return {
      // input框内容变量初始化
      forgetPhone:'',
      fImg:'',
      fCmg:'',
      fNew:'',
      fPw:'',
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
    fpBlur:function () {
      var phoneSpan = document.querySelector('.phone span');
      if(this.forgetPhone==''){
        phoneSpan.innerHTML = '手机号不能为空';
        phoneSpan.style.color = 'red';
      }else if(''){
        //判断手机号是否注册
        phoneSpan.innerHTML = '✔';
        phoneSpan.style.color = 'green';
      }else{
        phoneSpan.innerHTML = '手机号未注册';
        phoneSpan.style.color = 'red';
      }
      
    },
    fpFocus:function () {
      var phoneSpan = document.querySelector('.phone span');
      phoneSpan.innerHTML = '*';
        phoneSpan.style.color = 'red';
    },
    // 图片验证码焦点事件
    fiBlur:function () {
       var codeImgSpan = document.querySelector('.code-img span');
      //  fImg
    },
    fiFocus:function () {
       var codeImgSpan = document.querySelector('.code-img span');
    },
    // 动态验证码焦点事件
    fcBlur:function () {
      var codeImgSpan = document.querySelector('.code-img span');
      // fCmg
    },
    fcFocus:function () {
      var codeImgSpan = document.querySelector('.code-img span');
    },
    // 密码焦点事件
    fnBlur:function () {
      var newPwSpan = document.querySelector('.newPw span');
      var newPwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if(this.fNew==''){
        newPwSpan.innerHTML = "新密码不能为空";
        newPwSpan.style.color = "red";
      }else if(newPwReg.test(this.fNew)){
        newPwSpan.innerHTML = "✔";
        newPwSpan.style.color = "green";
      }else{
        newPwSpan.innerHTML = "新密码格式错误";
        newPwSpan.style.color = "red";
      }
    },
    fnFocus:function () {
      var newPwSpan = document.querySelector('.newPw span');
      newPwSpan.innerHTML = "*";
      newPwSpan.style.color = "red";
    },
    // 确认密码焦点事件
    fPwBlur:function () {
      var pwSpan = document.querySelector('.pw span');
      if(this.fPw==''){
        pwSpan.innerHTML = "确认密码不能为空";
        pwSpan.style.color = "red";
      }else if(this.newPw==this.fPw){
        // console.log('修改成功')
        pwSpan.innerHTML = "✔";
        pwSpan.style.color = "green";
      }else{
        pwSpan.innerHTML = "两次输入密码不一致";
        pwSpan.style.color = "red";
      }
    },
    fPwFocus:function () {
      var pwSpan = document.querySelector('.pw span');
      pwSpan.innerHTML = "*";
      pwSpan.style.color = "red";
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
  margin: 0 auto; // width: 1200px;
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
      .code-img {
        display: flex;
        img {
          // float: right;
          margin-left: 4px;
          background: #fff;
          width: 80px;
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
      }
      p {
        margin: -10px auto;
        font-size: 13px;
        text-align: center;
        span {
          color: #2693d6;
        }
      }
      .newPw{
        position: relative;
        a{
          position: absolute;
          font-size: 11px;
          text-decoration: none;
          color: #aaa;
          margin: 38px 0 0 -285px;

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
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


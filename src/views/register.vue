<template>
  <div class="r-outter">
    <!--小导航-->
    <div class="r-header">
      <div class="r-logo"></div>
      <p>欢迎注册</p>
    </div>
    <!--内容-->
    <div class="r-content">
      <!--注册操作界面-->
      <ul class="r-operate">
        <li class="phone"><input type="text" placeholder="请输入手机号" v-on:blur="phoneBlur" v-on:focus="phoneFocus" v-on:keyup="phoneKeyup" ref="phoneVal">
          <span>*</span>
        </li>
        <li class="code-img"><input type="text" placeholder="请输入验证码" v-on:blur="codeImgBlur" v-on:focus="codeImgFocus" ref="codeImgVal">
          <img src="http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode" alt="">
          <button v-on:click="buttonChange">看不清？换一张</button>
          <span>*</span>
        </li>
        <li class="code-phone"><input type="text" placeholder="请输入验证码">
          <p></p>
          <button v-on:click="buttonGet">点击获取</button>
          <span>*</span>
        </li>
        <li class="android-wheel">
          <select class="province">
            <option value="">省</option>
          </select>
          <select class="city">
            <option value="">市</option>
          </select>
          <select class="urban">
            <option value="">区</option>
          </select>
          <span>*</span>
        </li>
        <li class="pw"><input type="password" placeholder="请设置密码">
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
          <a href="">立即登录>></a>

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
      msg: 'Welcome to Your Vue.js App',
      // input1: ''
    }
  },
  methods: {
    //手机号只能输入数字
    phoneKeyup:function(){
      // var phone = document.querySelector('.phone input');
      var phoneValue = this.$refs.phoneVal.value;
      // phoneValue = phoneValue.replace(/\D/g,'');
      console.log(phoneValue.replace(/\D/g,''))
    },
    // 手机号验证失去焦点事件
    phoneBlur: function() {
      // console.log(123);
      var phone = document.querySelector('.phone input');
      var phoneSpan = document.querySelector('.phone span');
      var phoneReg = /^1[3578]\d{9}/;
      var phoneValue = this.$refs.phoneVal.value;
      if (phoneValue == '') {
        phoneSpan.innerHTML = '电话号码不能为空';
        phoneSpan.style.color = 'red';
      } else if (phoneReg.test(phoneValue)) {
        console.log('ok');
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
      var codeImg = document.querySelector('.code-img input');
      var codeSpan = document.querySelector('.code-img span');
      var codeImage = document.querySelector('.code-img img');
      // console.log(codeImage)

    },
    codeImgFocus: function() {
      var codeImg = document.querySelector('.code-img input');
      // console.log(codeImg)

    },
    //点击更换图片验证码
    buttonChange: function() {
      var codeImage = document.querySelector('.code-img img');
      codeImage.src = 'http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode';
    },

    // 点击获取验证码
    buttonGet: function() {
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
  width: 1200px; // 小导航
  .r-header {
    // margin: 0 auto;
    // background: #fff;
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
      li select {
        margin-right: 20px;
        padding-left: 12px;
        width: 78px;
        height: 36px;
        border-radius: 3px;
        border: 1px solid #cbcbcb;
        outline: 0;
      }
      .urban {
        margin-right: 0;
      }
      .phone input,
      .pw input {
        width: 255px;
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
        display: none;
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
          // float:right;
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


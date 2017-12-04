<template>
  <div class="r-outter">
    <!--小导航-->
    <div class="r-header">
      <div class="r-logo"></div>
      <p>找回密码</p>
    </div>
    <!--内容-->
    <div class="r-content">
      <!--注册操作界面-->
      <ul class="r-operate">
        <li class="phone"><input type="text" placeholder="请输入手机号"><span>*</span></li>
        <li class="code-img"><input type="text" placeholder="请输入验证码">
          <img src="http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode" alt=""><span>*</span>
        </li>
        <li class="code-phone"><input type="text" placeholder="请输入验证码">
          <button>点击获取</button><span>*</span>
        </li>
        <li class="newPw"><input type="text" placeholder="请输入新密码"><span>*</span></li>
        <li class="pw"><input type="text" placeholder="请再次输入密码"><span>*</span></li>
        <li class="modify">
          <button>确认修改</button>
        </li>
      </ul>
      <!--跳转登录界面-->
      <div class="r-goto">
        <p>想起密码来了?</p>
        <div>
          <a href="">返回登录>></a>

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
      msg: 'Welcome to Your Vue.js App'
    }
  },
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
  margin: 0 auto;
  width: 1200px;
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
    // background: #88f;
    background: #fff;
    width: 1200px;
    height: 436px;
    display: flex;
    .r-operate {
      text-align: left;
      margin: 53px 19px 0 147px;
      width: 433px;
      height: 383px;
      span{
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
      .code-phone button{
        margin-left: 4px;
        background: #fff;
        width: 80px;
        height: 36px;
        border-radius: 3px;
        color: #2693d6;
        border: 1px solid #2693d6;
      }
      .code-img{
        display: flex;
      }
      .code-img img {
        // float: right;
        margin-left: 4px;
        background: #fff;
        width: 80px;
        height: 34px;
        border-radius: 3px;
      }
      p {
        margin: -10px auto;
        font-size: 13px;
        text-align: center;
        span {
          color: #2693d6;
        }
      }
    }
  }

  .r-goto {
    margin: 53px 0 0 0;
    width: 602px;
    height: 383px;
    // background: pink;
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


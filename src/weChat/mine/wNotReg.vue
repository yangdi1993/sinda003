<template>
  <div class="notReg">
    <div class="top">
      <div class="head">
        <img src="../images/login/girl.jpg" alt="">
      </div>
      <div class="but">
        <a href="#/weChatdog/wRegister"><button>注册</button></a>
        <a href="#/weChatdog/wLogin"><button>登录</button></a>
      </div>
    </div>
    <ul>
     <a href="#/weChatdog/myorder"><li class="indent">
        <div><img src="../images/login/menu.png" alt=""></div>
        <p>我的订单</p> 
        <div><img src="../images/login/go.png" alt=""></div>
      </li></a>
      <a href="#/weChatdog/wSet"><li class="account">
        <div><img src="../images/login/settings.png" alt=""></div>
        <p>账户设置</p>
        <div><img src="../images/login/go.png" alt=""></div>
      </li></a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      products: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.notReg {
  margin-right: 0.3rem;
  width: 2.72rem;
  height: 13.34rem;
  .top {
    .head {
      margin: 3rem 0 0.66rem 3rem;
      width: 1.64rem;
      height: 1.64rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .but {
      width: 4rem;
      height: 0.6;
      margin: 0 0 1.63rem 2.02rem;
      display: flex;
      a {
        margin: -0.8rem 0.4rem 0 0;
        button {
          width: 1.56rem;
          height: 0.6rem;
          border-radius: 0.05rem;
          font-size: 0.28rem;
          background: #2693d4;
          color: #fff;
        }
      }
    }
  }
  a {
    text-decoration: none;
    color: #9b9b9b;
  }
  li {
    display: flex;
    margin: 0 0 0.35rem 0.66rem;
    width: 6.13rem;
    height: 0.76rem;
    font-size: 0.28rem;
    background: #e9e9e9;
    color: #9b9b9b;

    p {
      margin-left: 0.4rem;
      text-align: left;
      width: 4.3rem;
      line-height: 0.76rem;
      padding-left: 0.19rem;
    }
    div {
      margin: 0.17rem 0 0 0.17rem;
      width: 0.39rem;
      height: 0.39rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

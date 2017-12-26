<template>
  <div class="yetLogin">
    <div class="head">
      <img src="../images/login/girl.jpg" alt="">
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
    <button class="quit" @click="quit">退出登录</button>
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
  },
  methods: {
    quit() {
      sessionStorage.clear();
      location.href = "#/weChatdog/wLogin";
    }
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
.yetLogin {
  overflow: hidden;
  margin-top: 2rem;
  width: 7.5rem;
  height: 12.6rem;
  .head {
    margin: 2.23rem 0 1.53rem 2.8rem;
    width: 1.64rem;
    height: 1.64rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  a {
    text-decoration: none;
    color: #9b9b9b;
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
  .quit {
    margin: 1.26rem 0 0 0;
    width: 6.13rem;
    height: 0.76rem;
    font-size: 0.28rem;
    background: #2693d4;
    color: #fff;
  }
}
</style>

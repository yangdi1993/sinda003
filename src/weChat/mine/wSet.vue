<template>
  <div class="settings">
    <div class="head">
      <img src="../images/login/girl.jpg" alt="">
    </div>
    <ul>
      <li class="indent">
        <div></div>
        <input type="text" placeholder="我的订单">
      </li>
      <li class="account">
        <div></div>
        <input type="text" placeholder="账户设置">
      </li>
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
.settings {
  margin-right: 0.3rem;
  width: 2.72rem;
  .head{
    margin: 3rem 0 1.53rem 2.8rem;
    width: 1.64rem;
    height: 1.64rem;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  li {
    display: flex;
    margin: 0 0 0.32rem 1.01rem;
    input {
      padding-left: 0.19rem;
      width: 6.13rem;
      height: 0.73rem;
      border: 1px solid #b0b0b0;
      outline: 0;
    }
  }
}
</style>

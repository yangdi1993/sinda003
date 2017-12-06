<template>
  <div class="top">
    <div class="top-in">
      <div class="top-left">
        <span class="welcome">欢迎来到信达！</span>
        <a href="#/outter/login" class="top-login">登录</a>
        <a href="#/outter/register" class="top-register">快速注册</a>
      </div>
      <div class="top-right">
        <a href="javascript:void(0)" class="top-cart">
          <span class="logo-cart"></span>
          <span>购物车<span class="number">{{getNum}}</span>件</span>
        </a>
        <a href="#/outter/myOrder" class="top-order">
          <span class="logo-order"></span>
          <span>我的订单</span>
        </a>
        <a href="javascript:void(0)" class="facilitator">服务商入口</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapGetters(['getNum'])
  }
}
</script>

<style scoped lang="less">
@url:url(../images/homepage/homepage.png) 100% 100% no-repeat;
.top{
  background:#f2f2f2;
  width: 100%;
  height: 30px;
  font-family: '宋体';
  .top-in{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-ii{
    height: 100%;
    display: flex;
    align-items: center;
    span{
      font-size: 13px;
      color: #2a2a2a;
      letter-spacing: 1px;
    }
    a{
      font-size: 13px;
      text-decoration: none;
      color: #2693d4;
      margin: 0 12px;
    }
  }
  .top-left{
    .top-ii
  }
  .top-right{
    .top-ii;
    a{
      margin: 0;
      margin-left: 16px;
    }
    .top-cart{
      text-align: center;
      color: #2a2a2a;
      display: flex;
      flex-wrap: no-wrap;
      align-items: center;
    }
    .top-order{
      display: flex;
      flex-wrap: no-wrap;
      align-items: center;
      display: none;
    }
    .number{
      color: #2693d4;
    }
    .logo-cart{
      width: 21px;
      height: 19px;
      background: @url;
      background-position: 0 -3px;
      margin-right: 5px;
    }
    .logo-order{
      width: 21px;
      height: 19px;
      background: @url;
      background-position: 3px -33px;
      margin-right: 5px;
    }
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


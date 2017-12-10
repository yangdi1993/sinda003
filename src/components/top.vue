<template>
  <div class="top">
    <div class="top-in">
      <div class="top-left">
        <span class="welcome">欢迎来到信达！</span>
        <a href="#/outter/login" class="top-login"  :key="user.id">{{user.name}}</a>
        <a href="#/outter/register" class="top-register" v-show="nowRegister">快速注册</a>
        <a href="#/inner/homepage" v-show="quitNow" @click="quit">退出登录</a>
      </div>
      <div class="top-right">
        <a href="javascript:void(0)" class="top-cart">
          <span class="logo-cart"></span>
          <span>购物车<span class="number">{{getNum}}</span>件</span>
        </a>
        <a href="#/outter/myOrder" class="top-order" v-show="myOrder">
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
      msg: 'Welcome to Your Vue.js App',
      user:[],
      nowRegister:true,
      quitNow:false,
      myOrder:false,
    }
  },
  methods:{
    quit(){
      sessionStorage.clear()
      this.nowRegister=true
      this.quitNow=false
      this.myOrder=false
      location.reload()
    }
  },
  created(){
    var user={}
    if(sessionStorage.getItem('zancun')){
      // setTimeout(location.reload())
      this.nowRegister=false
      this.quitNow=true
      this.myOrder=true
      var username=(JSON.parse(sessionStorage.getItem('zancun')))
      user=JSON.parse(localStorage.getItem(username))
      console.log(123)
    }else{
      this.nowRegister=true
      this.quitNow=false
      this.myOrder=false
      user.name='登录'
      console.log(456)
    }
    console.log(user)
    this.user=user
  },
  computed:{
    ...mapGetters(['getNum','getName'])
  },
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


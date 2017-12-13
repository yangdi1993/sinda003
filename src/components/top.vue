<template>
  <div class="top">
    <div class="top-in">
      <div class="top-left">
        <span class="welcome">欢迎来到信达！</span>
        <a href="#/outter/login" class="top-login" v-show="!getName">登录</a>
        <a href="#/inner/accountSetting" class="top-login" v-show="getName">{{getName}}</a>
        <a href="#/outter/register" class="top-register" v-show="!getName">快速注册</a>
        <a href="#/inner/homepage" v-show="getName" @click="quit">退出登录</a>
      </div>
      <div class="top-right">
        <a href="javascript:void(0)" class="top-cart">
          <span class="logo-cart"></span>
          <a href="#/outter/login" style="color:#000;margin:0;" v-show="!getName">购物车<span class="number">{{getNum}}</span>件</a>
          <a href="#/inner/cart" style="color:#000;margin:0;" v-show="getName">购物车<span class="number">{{getNum}}</span>件</a>
        </a>
        <a href="#/inner/myOrder" class="top-order" v-show="getName">
          <span class="logo-order"></span>
          <a href="#/inner/myOrder"  style="color:#000;margin:0;" v-show="getName">我的订单</a>
        </a>
        <a href="#/inner/homepage" class="facilitator">服务商入口</a>
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
    }
  },
  methods:{
    quit(){
      sessionStorage.clear()
      location.reload()
    }
  },
  created(){
    this.ajax.post('xinda-api/register/valid-sms',this.qs.stringify({
      cellphone:18369902972,				
      smsType:1,
      validCode:111111
    })).then(function(data){
      // var rData=data.data.data
      console.log(data.data);
      });


    var user={}
    if(sessionStorage.getItem('userPhone')){
      // var that =this
      // this.ajax.post('xinda-api/sso/login-info').then(function(data){
      //   var rData=data.data.data
      //   console.log(rData);
      //   that.user=rData
      // });
      // this.href='#/inner/cart'
    }
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


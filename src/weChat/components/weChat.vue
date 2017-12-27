<template>
<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"  class="style">
  <div>
    <div class="top">
      <span @click="goback" class="goback"><span></span><p>返回</p></span>
      <div class="title"><p>{{getTitle}}</p></div>
      <div class="wlogo"><img src="../../images/homepage/errorimg.png" alt="" @click="$router.push({path:'/weChat/index'})"></div>
    </div>
    <div class="bottom">
      <router-link to="/weChat/index" active-class="indexstyleON" class="indexstyle">
        <div></div>
        <span>首页</span>
      </router-link>
      <router-link to="/weChat/storelist" active-class="shopstyleON" class="shopstyle">
        <div></div>
        <span>店铺</span>
      </router-link>
      <router-link to="/weChat/shopTro" active-class="cartstyleON" class="cartstyle">
        <div></div>
        <span>购物车</span>
      </router-link>
      <router-link to="/weChatdog/wYetLogin" @click.native="tologin" active-class="minestyleON" class="minestyle">
        <div></div>
        <span>我的</span>
      </router-link>
    </div>
  <router-view/>
  </div>
  </mt-loadmore>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  created() {
    
  },
  data() {
    return {
      allLoaded:false,
    };
  },
  methods:{

    goback(){
      history.go(-1)
    },
    tologin(){
      var user=sessionStorage.getItem('userPhone')
      if(user){
        this.$router.push({path:'/weChatdog/wYetLogin'})
      }else{
        this.$router.push({path:'/weChatdog/wlogin'})
      }
    },
    loadTop() {
    // 加载更多数据
      // this.$refs.loadmore.onTopLoaded();
      location.reload()
    },
  },
  computed:{
    ...mapGetters(['getTitle'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.style{
  font-size: .3rem;
  color: #999;
}
.top{
  width: 100%;
  height: .9rem;
  background: #fff;
  position: fixed;
  top: 0;
  text-align: left;
  justify-content: space-between;
  z-index: 100;
  box-shadow: 1px 1px 23px 1px rgb(160, 159, 159);
  display: flex;
  .goback{
    height: .7rem;
    width: 1.5rem;
    font-size: .4rem;
    font-family: '楷体';
    margin-top: .1rem;
    line-height: .9rem;
    display: flex;
    align-items: center;
    span{
      width: .3rem;
      height: .3rem;
      display: block;
      border-left: 3px solid #666;
      border-bottom: 3px solid #666;
      transform: rotate(45deg);
      float: left;
      line-height: .9rem;
      font-size: .2rem;
      margin-left: .3rem;
    }
  }
  .title{
    text-align: center;
    font-size: .4rem;
    width: 4.3rem;
    height: 100%;
    p{
      line-height: .9rem;
      color:#2693d4;
      font-family: '宋体';
    }
  }
  .wlogo{
    width: 1.2rem;
    height: 100%;
    margin-left: .2rem;
    img{
      width: .5rem;
      display: block;
      margin: .2rem auto;
    }
  }
}
.bottom{
  width: 7.14rem;
  height: .88rem;
  padding: 0 .16rem;
  display: flex;
  font-size: .1rem;
  position: fixed;
  bottom: -.02rem;
  background: #fff;
  z-index: 100;
  a{
    width: .99rem;
    height: 100%;
    margin: 0 .4rem;
    text-decoration: none;
    font-size: .22rem;
    
    div{
      width: .4rem;
      height: .4rem;
      margin: 0.06rem auto;
      background-size: contain;
      background-position: .01rem 0;
    }
  }
}
.indexstyle{div{background: url('../images/index/btmhomeG.png') no-repeat;}color: #999;}
.indexstyleON{div{background: url('../images/index/btmhomeB.png') no-repeat;}color: #2693d4}
.shopstyle{div{background: url('../images/index/btmlistG.png') no-repeat;}color: #999;}
.shopstyleON{div{background: url('../images/index/btmlistB.png') no-repeat;}color: #2693d4}
.cartstyle{div{background: url('../images/index/btmcart.png') no-repeat;}color: #999;}
.cartstyleON{div{background: url('../images/index/blueCart.png') no-repeat;}color: #2693d4}
.minestyle{div{background: url('../images/index/btmmine.png') no-repeat;}color: #999;}
.minestyleON{div{background: url('../images/index/blueMine.png') no-repeat;}color: #2693d4}
</style>

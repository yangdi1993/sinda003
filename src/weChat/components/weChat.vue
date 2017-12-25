<template>
  <div>
    <div class="top">
      <span @click="goback">＜</span>
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
      <router-link to="/weChatdog/wYetLogin" active-class="minestyleON" class="minestyle">
        <div></div>
        <span>我的</span>
      </router-link>
    </div>
  <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    
  },
  data() {
    return {

    };
  },
  methods:{
    goback(){
      history.go(-1)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top{
  width: 100%;
  height: .9rem;
  background: #fff;
  position: fixed;
  top: 0;
  text-align: left;
  z-index: 100;
  box-shadow: 1px 1px 23px 1px rgb(160, 159, 159);
  span{
    float: left;
    height: 100%;
    line-height: .9rem;
    font-size: .5rem;
    margin-left: .3rem;
  }
}
.bottom{
  width: 7.14rem;
  height: .88rem;
  padding: 0 .16rem;
  display: flex;
  font-size: .1rem;
  position: fixed;
  bottom: 0;
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

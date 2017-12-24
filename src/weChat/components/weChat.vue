<template>
  <div>
    <div class="bottom">
      <a href="javascript:void(0)" v-show="!clickon" @click="clickon=true,clickon1=false">
        <img src="../images/index/btmhomeG.png">
        <span>首页</span>
      </a>
      <a href="javascript:void(0)" v-show="clickon" style="color:#2693d4">
        <img src="../images/index/btmhomeB.png">
        <span>首页</span>
      </a>
      <a href="javascript:void(0)" v-show="!clickon1" @click="clickon1=true,clickon=false">
        <img src="../images/index/btmlistG.png">
        <span>店铺</span>
      </a>
      <a href="javascript:void(0)" v-show="clickon1" style="color:#2693d4"> 
        <img src="../images/index/btmlistB.png">
        <span>店铺</span>
      </a>
      <a href="javascript:void(0)" @click="clickon=false,clickon1=false">
        <img src="../images/index/btmcart.png">
        <span>购物车</span>
      </a>
      <a href="javascript:void(0)" @click="clickon=false,clickon1=false">
        <img src="../images/index/btmmine.png">
        <span>我的</span>
      </a>
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
      clickon:true,
      clickon1:false,
    };
  },
  methods:{

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bottom{
  width: 7.18rem;
  height: .88rem;
  padding: 0 .16rem;
  display: flex;
  font-size: .1rem;
  position: fixed;
  bottom: 0;
  background: #fff;
  a{
    width: .99rem;
    height: 100%;
    margin: 0 .4rem;
    text-decoration: none;
    font-size: .22rem;
    color: #999;
    img{
      width: .4rem;
      height: .4rem;
      display: block;
      margin: .06rem auto;
    }
  }
}
</style>

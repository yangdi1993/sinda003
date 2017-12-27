<template>
<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" class="style">
  <div class="hello">
    <div class="top">
      <span @click="goback" class="goback"><span></span><p>返回</p></span>
      <div class="title"><p>{{getTitle}}</p></div>
      <div class="wlogo"><img src="../../images/homepage/errorimg.png" alt="" @click="$router.push({path:'/weChat/index'})"></div>
    </div>
    <!-- 微信页面，无公共底部 -->
    <router-view/>
  </div>
</mt-loadmore>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  created(){

  },
  data () {
    return {
      allLoaded:false,
    }
  },
  methods:{
    goback(){
      history.go(-1)
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
}
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
</style>

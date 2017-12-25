<template>
  <div class="hello">
    <div class="top">
      <span @click="goback">＜</span>
    </div>
    <!-- 微信页面，无公共底部 -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  created(){

  },
  data () {
    return {

    }
  },
  methods:{
    goback(){
      history.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top{
  width: 100%;
  height: .6rem;
  background: #fff;
  position: fixed;
  top: 0;
  text-align: left;
  z-index: 100;
  box-shadow: 1px 1px 23px 1px rgb(160, 159, 159);
  span{
    float: left;
    height: 100%;
    line-height: .6rem;
    font-size: .5rem;
    margin-left: .2rem;
  }
}
</style>

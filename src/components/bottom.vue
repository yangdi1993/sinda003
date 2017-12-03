<template>
  <div class="bottom">
    <p>©Copyright 2016北京信达科技有限公司 京ICP备 16011621号</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
.bottom{
  width: 100%;
  height: 45px;
  background:#cbcccc;
  p{
    width: 100%;
    height: 100%;
    line-height: 45px;
    font-size: 14px;
    color: #000;
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


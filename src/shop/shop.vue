<template>
  <div class="shop">
    <div class="shop-shop">
        <p>jufang999999</p>
        <div></div>
    </div>
    <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style scoped lang="less">
.shop-shop{
  color:yellow;
  font-family: '宋体';
  div{
      width: 100px;
      height: 100px;
      background: #345;
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


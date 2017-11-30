<template>
  <div class="shop">
    <div class="shop-shop">
        <p>jufang</p>
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
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


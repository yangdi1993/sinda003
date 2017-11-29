<template>
  <div class="bottom">
    <h3>这是底部</h3> 
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
  background:yellow;
  width: 100%;
  height: 30px;
  font-family: '宋体';
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


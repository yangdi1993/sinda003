<template>
  <div class="outter">
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
  }
}
</script>

<style scoped lang="less">
  .outter{
    background: #f5f5f5;
    padding-bottom: 100px;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


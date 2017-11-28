<template>
  <div class="hello">
    <h3>这是注册页面</h3>
    <a href="#/outter/login">登录</a>
    <!-- <router-view/> -->
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
h3{
  color:red;
  font-family: '宋体';
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


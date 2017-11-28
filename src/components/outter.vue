<template>
  <div class="hello">
    <h3>这是系统外部</h3>
    <ohead></ohead>
    <router-view/>
  </div>
</template>

<script>
import ohead from './ohead'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{ohead}
}
</script>

<style scoped lang="less">
h3{
  color:red;
  font-family: '宋体';
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


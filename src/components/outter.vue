<template>
  <div class="outter">
    <p>这是系统外部</p>
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
*{margin: 0;padding: 0;border: 0;}
.outter{
  color:red;
  width: 100%;
  background: #3d5;
  font-family: '宋体';
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


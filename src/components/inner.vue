<template>
  <div class="inner">
    <p>这是系统内部</p>
    <ihead></ihead>
    <router-view/>
  </div>
</template>

<script>
import ihead from './ihead'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{ihead}
}
</script>

<style scoped lang="less">
*{margin: 0;padding: 0;border: 0;}
.inner{
  color:red;
  width: 100%;
  background: #1da;
  font-family: '宋体';
  padding-bottom: 50px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


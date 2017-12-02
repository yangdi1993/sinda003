<template>
  <div class="inner">
    <ihead></ihead>
    
    <router-view/>
    <ifoot></ifoot>
  </div>
</template>

<script>
import ihead from './ihead'
import ifoot from './ifoot'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      parentMessage:'来自父级组件'
    }
  },
  components:{ihead,ifoot}
}
</script>

<style scoped lang="less">
*{margin: 0;padding: 0;border: 0;}
.inner{
  color:red;
  width: 100%;
  // background: #1da;
  font-family: '宋体';
  // padding-bottom: 50px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


<template>
  <div class="outter">
    <top></top>
    <router-view/>
    <bottom/>
  </div>
</template>

<script>
import top from "./top";
import bottom from "./bottom";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{top,bottom}
}
</script>

<style scoped lang="less">
  .outter{
    background: #f5f5f5;
    padding-bottom: 100px;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


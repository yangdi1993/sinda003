<template>
  <div id="app">
     <!--<img src="./assets/logo.png"> -->
    <top></top>
    <router-view/>
    <bottom/>
  </div>
</template>


<script>
import top from './components/top'
import bottom from './components/bottom'
export default {
  name: 'app',
  components:{top,bottom}
}
</script>

<style lang="less">
*{margin: 0;padding: 0;border: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

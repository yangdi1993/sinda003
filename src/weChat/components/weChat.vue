<template>
  <div>
    微信页面,有公共底部

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created(){

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // products:[]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

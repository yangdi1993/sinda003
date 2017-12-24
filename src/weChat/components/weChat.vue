<template>
  <div>
    微信页面,有公共底部
    <div class="bobo">ooooooooo</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
      // products:[]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media all and (width: 414px) {
  html {
    font-size: 100px;
  }
}
  .bobo {
    width: 3rem;
    height: 3rem;
  }
</style>

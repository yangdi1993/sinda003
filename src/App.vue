<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>

export default {
  name: "app",
  created() {
  },
  methods: {
    
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

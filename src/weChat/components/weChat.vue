<template>
  <div>
    <div class="bottom">
      <router-link to="javascript:void(0)">
        <span></span>
        <p>首页</p>
      </router-link>
    </div>
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
<style scoped lang="less">
.bottom{
  width: 7.16rem;
  height: .88rem;
  padding: 0 .16rem;
  font-size: .1rem;
  background: rgb(158, 84, 84);
  position: fixed;
  bottom: 0;
  a{
    width: .99rem;
    padding: 0 .4rem;
  }
}
</style>

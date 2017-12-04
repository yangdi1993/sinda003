<template>
  <div class="shop">
    <div class="list-head">
      <p>首页 / 店铺列表</p>
      <div class="ge">
        <strong class="fir">服务区域</strong>
        <div class="province">
          <input type="text">
          <input type="text">
          <input type="text">
        </div>
      </div>
    </div>
    <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style scoped lang="less">
.list-head p{
  text-align:left;
  margin-left: 90px;
  color:#000;
  font-size:13px;
  margin-top: 26px;
}
.ge{
  width:1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #cccccc;
  margin-left: 90px;
  margin-top:7px;
}
.fir{
  width:100px;                 
  height:40px;
  margin-left: -1100px;
  border-right:1px solid #ccc;
}
.ge strong{
  line-height: 40px;
  font-size:15px;
  color:#000;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


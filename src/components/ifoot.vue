<template>
  <div class="ifoot">
    <div class="ifoot-in">
      <p>关于我们</p>
      <p>联系我们：contact@xinkeher.com</p>
      <p>公司地址：北京市朝阳区大望路soho现代城</p>
      <p>客服官方电话：010-83421842</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
.ifoot{
  font-family: '宋体';
  width: 100%;
  height: 200px;
  background: #f8f8f8;
  .ifoot-in{
    width: 1200px;
    height: 116px;
    margin: 0px auto;
    padding: 42px 0;
    text-align: left;
    p{
      font-size: 14px;
      color:#000;
      padding: 5px 26px;
    }
    p:nth-child(1){
      margin-bottom: 23px;
    }
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


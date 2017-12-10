<template>
  <div class="shoplist">
    <div class="list-head">
      <p>首页 / 店铺列表</p>
      <div class="ge1">
        <div class="fir"><b>服务区域</b></div>
        <v-distpicker class="liandong" v-on:change="selChange" province="省" city="市" area="区"></v-distpicker>
      </div>
      <div class="ge2">
        <div class="fir"><b>产品类型</b></div>
        <div class="leixing">
          <p>所有</p>
          <p>专利申请</p>
          <p>版权保护</p>
          <p>商标注册</p>
          <p>代理记账</p>
          <p>公司注册</p>
          <p>企业社保</p>
          <p>公司变更</p>
          <p>税务代办</p>
          <p>个人社保</p>
          <p>审计报告</p>
        </div>
      </div>


      <div class="bigge">
        <div class="ge3">
          <p> 综合排序</p>
          <p> 价格<img src="../images/shop/sm.gif" alt=""></p>
          <p> 接单数<img src="../images/shop/sm.gif" alt=""></p>
        </div>
        <div class="bigges">
          <div class="box"></div>
          <div class="box"></div>
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

<style  lang="less">
.list-head p{
  text-align:left;
  margin-left: 90px;
  color:#000;
  font-size:13px;
  margin-top: 26px;
}
.ge1{
  width:1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  margin-left: 90px;
  margin-top:7px;
}
.ge2{
  width:1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-top:hidden;
  margin-left: 90px;
}
.leixing{
  display: flex;
  margin-top: -32px;
  margin-left: 90px;
  p{
    font-size: 14px;
    margin: 0;
    width:80px;
    height:28px;
    line-height: 25px;
    margin-left: 10px;
    text-align: center;
  }
}
.leixing p:hover{
  border-radius: 3px;;
  background-color: #2693d4;
}
.fir{
  width: 100px;
  height:40px;
  border-right:1px solid #ccc;
  display: flex;
}
.fir b{
  margin-left:10px;
  font-size:18px;
  color:#000;
  line-height: 40px;
}
.liandong{
  margin-top: -42px;
  margin-left: 120px;
  position: absolute;
  select{
    float: left;
    font-size:14px;
    line-height: 22px;
    height: 25px;
    padding: 0;
    width: 90px;
    height: 25px;
    margin-top: 10px;
    margin-left: 6px;
  }
}
.ge3{
  width:1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  margin-left: 90px;
  margin-top:25px;
  text-align: left;
}
.ge3 p{
  font-size:14px;
  // float: left;
  line-height: 40px;
  position: relative;
  display: inline;
  margin-left: 10px;
}
.bigges{
  width:1200px;
  height: 280px;
  background-color: #fff;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  margin-left: 90px;
  .box{
    width:570px;
    height: 250px;
    border:1px solid #ccc;
    margin-left: 17px;
    margin-top:12px;
    float: left; 
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


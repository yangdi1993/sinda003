<template>
  <div class="shoplist">
    <div class="list-head">
      <p>首页 / 店铺列表</p>
      <div class="ge1">
        <div class="fir"><b>服务区域</b></div>
        <!-- <div id="liandong"> -->
          <!-- <select v-model="prov">
            <option v-for="option in arr" :value="option.name">
            {{ option.name }}
            </option>
          </select>
          <select v-model="city">
            <option v-for="option in cityArr" :value="option.name">
            {{ option.name }}
            </option>
          </select>
          <select v-model="district" v-if="district">
            <option v-for="option in districtArr" :value="option.name">
            {{ option.name }}
            </option>
          </select>
        </div> -->
      </div>
      <div class="ge2">
        <div class="fir"><b>产品类型</b></div>
        

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

<style scoped lang="less">
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
.fir{
  width:98px;
  height:40px;
  border-right:1px solid #ccc;
}
.fir b{
  font-size:18px;
  color:#000;
  line-height: 40px;
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


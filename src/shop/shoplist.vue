<template>
  <div class="shoplist">
    <div class="list-head">
      <p>首页 / 店铺列表</p>
      <div class="ge1">
        <div class="fir"><b>服务区域</b></div>
        <v-distpicker class="liandong"  province="省" city="市" area="区"></v-distpicker>
      </div>
      <div class="ge2">
        <div class="fir"><b>产品类型</b>
          <div class="leixing"><p>所有</p><p v-for="name in names" :key="name.id">{{name}}</p></div>
        </div>
      </div>
      <div class="bigge">
        <div class="ge3">
          <p> 综合排序</p>
          <p> 价格<img src="../images/shop/sm.gif" alt=""></p>
          <p> 接单数<img src="../images/shop/sm.gif" alt=""></p>
        </div>
        <div class="bigges">
          <div class="box" v-for="store in stores" :key="store.id">
            <span class="logoimg"><img :src="'http://115.182.107.203:8088/xinda/pic'+store.providerImg" alt=""></span>
            <span class="jinpai"><img src="../images/shop/jinpai.gif"><p>金牌服务商</p></span>
            <p>{{store.providerName}}</p>

          </div>
        </div>
      </div>
      
    </div>
    <router-view/> 
  </div>
</template>

<script>
export default {
  created(){
    var that=this;
    this.ajax.post("/xinda-api/product/style/list",{}).then(function(data){
      var ser=data.data.data;
      // console.log(ser);
      var names=[];
      for(var key in ser){
        var name=ser[key].itemList;
        // console.log(ser);
        for(var vice in name){
          names.push(name[vice].name);
          // conaole.log(name)
        }
      }
      that.names=names;
      console.log(names)
    });
    this.ajax.post("/xinda-api/provider/grid", this.qs.stringify({//数据地址
        start: 0,//数据参数
        limit: 6
      })).then(function(data) {//data=>{}
       
        var box = data.data.data;
         that.stores = box;
        console.log('box',box);
        });
  },
  data(){
    return{
    names:[],
    stores:[]
    }
  }
}
</script>

<style  lang="less">
.list-head p {
  text-align: left;
  margin-left: 90px;
  color: #000;
  font-size: 13px;
  margin-top: 26px;
}
.ge1 {
  width: 1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  margin-left: 90px;
  margin-top: 7px;
}
.ge2 {
  width: 1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-top: hidden;
  margin-left: 90px;
}

.fir {
  width: 100px;
  height: 40px;
  border-right: 1px solid #ccc;
  display: flex;
}
.fir b {
  margin-left: 10px;
  font-size: 18px;
  color: #000;
  line-height: 40px;
}
.leixing {
  display: flex;
  margin-top: 10px;
  margin-left: 90px;
  position: absolute;
  p {
    font-size: 14px;
    margin: 0;
    width: 80px;
    height: 28px;
    line-height: 25px;
    margin-left: 15px;
    text-align: center;
  }
}
.leixing p:hover {
  border-radius: 3px;
  background-color: #2693d4;
}
.liandong {
  margin-top: -42px;
  margin-left: 120px;
  position: absolute;
  select {
    float: left;
    font-size: 14px;
    line-height: 22px;
    height: 25px;
    padding: 0;
    width: 90px;
    height: 25px;
    margin-top: 10px;
    margin-left: 6px;
  }
}
.ge3 {
  width: 1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  margin-left: 90px;
  margin-top: 25px;
  text-align: left;
}
.ge3 p {
  font-size: 14px;
  // float: left;
  line-height: 40px;
  position: relative;
  display: inline;
  margin-left: 10px;
}
.bigges {
  width: 1200px;
  height: 280px;
  background-color: #fff;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  margin-left: 90px;
  .box {
    width: 570px;
    height: 250px;
    border: 1px solid #ccc;
    margin-left: 17px;
    margin-top: 12px;
    float: left;
    .logoimg{
      
      // margin-left: -360px;
      margin-top: 50px;
      float: left;
      margin-left:30px;
      img{
        width:130px;
        height: 70px;
      }
    }
    .jinpai{
      margin-top: 70px;
      float: left;
      margin-left: -230px;
      margin-top: 180px;
      position: relative;
      img{
        width:30px;
        height: 35px;
       
      }
      p{
        font-size: 14px;
        padding-left: 35px;
        margin-top: -27px;
      }
    }
    p{
      margin-top: 40px;
      margin-left: 150px;
    }
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


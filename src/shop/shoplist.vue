<template>
  <div class="shoplist">
    <div class="list-head">
      <p>首页 / 店铺列表</p>
      <div class="ge1">
        <div class="fir"><b>服务区域</b></div>
        <div class="adress">
          <select  @change="proChange" v-model="province">
            <option value="0">省</option>
            <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
          </select>
          <select  @change="cityChange" v-model="city">
            <option value="0">市</option>
            <option :value="code" v-for="(city,code) in citys" :key="city.code">{{city}}</option>
          </select>
          <select>
            <option value="0">区</option>
            <option :value="code" v-for="(area,code) in areas" :key="area.code">{{area}}</option>
          </select>
        </div>
      </div>
      <div class="ge2">
        <div class="fir"><b>产品类型</b>
          <div class="leixing"><p>所有</p><p v-for="name in names" :key="name.id">{{name}}</p></div>
        </div>
      </div>
      <div class="bigge">
        <div class="ge3">
          <div class="forms"><p> 综合排序</p><span></span></div>
          <div class="forms"><p> 价格↓↓</p><span></span></div>
          <div class="forms"><p> 接单数↑↑</p><span></span></div>
        </div>
        <div class="bigges">
          <div class="box" v-for="store in stores" :key="store.id">
            <span class="logoimg"><img :src="'http://115.182.107.203:8088/xinda/pic'+store.providerImg" alt=""></span>
            <span class="jinpai"><img src="../images/shop/jinpai.gif"><p>金牌服务商</p></span>
            <p>{{store.providerName}}</p>
            <p>信誉</p>
            <p>{{store.regionName}}</p>
            <p>累计服务客户次数：{{store.orderNum}} | 好评率：100%</p>
            <div class="type"><p>{{store.productTypes}}</p></div>
            <div class="store"><a href="#/inner/shophome">进入店铺</a></div>
          </div>
        </div>
      </div>
      <div class="lastbutton">
        <a>上一页</a>
        <a>1</a>
        <a>下一页</a>
      </div>
    </div>
    <router-view/> 
  </div>
</template>

<script>
  
import dist from '../images/districts'

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
    stores:[],
    provinces:dist[100000],
    citys:[],
    areas:[],
    province:'0',
    city:'0'
    }
  },
  methods:{
    proChange(){
      this.citys = dist[this.province];
    },
    cityChange(){
      this.areas=dist[this.city];
    },
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
// .liandong {
//   margin-top: -42px;
//   margin-left: 120px;
//   position: absolute;
//   select {
//     float: left;
//     font-size: 14px;
//     line-height: 22px;
//     height: 25px;
//     padding: 0;
//     width: 90px;
//     height: 25px;
//     margin-top: 10px;
//     margin-left: 6px;
//   }
// }
.adress{
  margin-left:130px;
  margin-top:-35px;
  position: absolute;
  select{
    border:1px solid #cdcdcd;
    width:130px;
    height:30px;
    margin-right:10px;
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
  .forms{
    display: inline-block;
    width:100px;
    height: 40px;
    // background-color: #2693d4;
    border-radius:3px;
    p{
      font-size: 14px;
      line-height: 40px;
      position: relative;
      margin-left: 10px;
      margin-top: -2px;
      text-align: center;
    }
    span{
      margin-left:40px;
      display: block;
      border-bottom: 9px solid transparent;
      border-left: 9px solid transparent;
      border-top: 9px solid #2693d4;
      border-right: 9px solid transparent;
      position: absolute;
      display:none;
    }
  }
}
.ge3 .forms:hover{
  background-color: #2693d4;
}
.ge3 .forms:hover span{
  display: block;
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
        margin-left: 155px;
        margin-top: -27px;
      }
    }
    p{
      margin-top: 20px;
      margin-left: 230px;
      font-size: 14px;
      line-height:5px;
    }
    .type{
      p{
        height:40px;
        line-height: 25px;
      }
    }
    .store{
      width:100px;
      height: 33px;
      background-color: #ff591b;
      margin-left: 230px;
      margin-top: 25px;
      border-radius: 5px;
      a{
        font-size: 13px;
        color:#fff;
        text-decoration: none;
        line-height: 31px;
      }
    }
  }
}
.lastbutton{
  height: 35px;
  margin: 50px auto 130px;
  a{
    height: 35px;
    border:1px solid #cccccc;
    background-color: #ffffff;
    padding:10px 15px;
    color:#000;
    cursor: pointer;
  }
}
.lastbutton a:hover{
  color:red;
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


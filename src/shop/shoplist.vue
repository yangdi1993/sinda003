<template>
  <div class="shoplist">
    <div class="list-head">
      <p>首页 / 店铺列表</p>
      <div class="ge1">
        <div class="fir">
          <b>服务区域</b>
        </div>
        <div class="adress">
          <select @change="proChange" v-model="province">
            <option value="0">省</option>
            <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
          </select>
          <select @change="cityChange" v-model="city">
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
        <div class="fir">
          <b>产品类型</b>
          <div class="leixing">
            <p :class="{blue:show==true}" @click="changebgAll">所有</p>
            <p :class="{blue:inner==name}" v-for="(name) in names" :key="name" @click="changebg(name)">{{name}}</p>
          </div>
        </div>
      </div>
      <div class="bigge">
        <div class="ge3">
          <div class="forms":class="{blued:sort==1}">
            <p @click="synthesize" > 综合排序</p>
            <span></span>
          </div>
          <div class="forms" :class="{blued:sort==2}">
            <p @click="price"> 价格↓↓</p>
            <span></span>
          </div>
          <div class="forms" :class="{blued:sort==3}">
            <p @click="number"> 接单数↑↑</p>
            <span></span>
          </div>
        </div>
        <div class="bigges">
          <div class="box" v-for="store in disStores" :key="store.id">
            <span class="logoimg"><img :src="'http://115.182.107.203:8088/xinda/pic'+store.providerImg" alt=""></span>
            <span class="jinpai"><img src="../images/shop/jinpai.gif">
              <p>金牌服务商</p>
            </span>
            <p>{{store.providerName}}</p>
            <p>信誉</p><div class="xinyu"><img src="../images/shop/xinyu.gif" alt=""></div>
            <p>{{store.regionName}}</p>
            <p>累计服务客户次数：{{store.orderNum}} | 好评率：100%</p>
            <div class="type"><p v-for="pro in store.productTypes" :key="pro.id" >{{pro}}</p></div>
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
import dist from "../images/districts";

export default {
  created() {
    var that = this;
    this.ajax.post("/xinda-api/product/style/list", {}).then(function(data) {
      var ser = data.data.data;
      // console.log(ser);
      var names = [];
      for (var key in ser) {
        var name = ser[key].itemList;
        // console.log(ser);
        for (var vice in name) {
          names.push(name[vice].name);
          // conaole.log(name)
        }
      }
      that.names = names;
      // console.log(names);
    });
    this.ajax
      .post(
        "/xinda-api/provider/grid",
        this.qs.stringify({
          //数据地址
          start: 0, //数据参数
          limit: 6
        })
      )
      .then(function(data) {
        var box = data.data.data;
        // console.log('box',box);
        for (var key in box) {
          box[key].productTypes = box[key].productTypes.split(",");
          // console.log(box[key].productTypes);
        }
        that.stores = box;
        that.disStores = box;
        // console.log(that.stores);
      });
    // that.box=box;
  },
  data() {
    return {
      names: [],
      stores: [],
      disStores: [],
      provinces: dist[100000],
      citys: [],
      areas: [],
      province: "0",
      city: "0",
      index: "0",
      inner: "",
      show: true,
      sort: 1
    };
  },
  methods: {
    proChange() {
      this.city = "0";
      this.area = "0";
      if (this.province != "0") {
        this.citys = dist[this.province];
      } else {
        this.citys = [];
        this.areas = [];
      }
    },
    cityChange() {
      this.areas = dist[this.city];
    },
    // 导航点击更换背景色
    changebg(name) {
      this.inner = name;
      this.show = false;
      var tempArr = [];
      for (var key in this.stores) {
        for (var i = 0; i < this.stores[key].productTypes.length; i++) {
          var codeDes = this.stores[key].productTypes[i];
          if (codeDes == this.inner) {
            tempArr.push(this.stores[key]);
            break;
          }
        }
      }
      this.disStores = tempArr;
    },
    changebgAll() {
      this.show = true;
      this.inner = "";
      this.disStores = this.stores;
    },
    synthesize() {
      this.sort = 1;
      this.ajax
        .post(
          "/xinda-api/provider/grid",
          this.qs.stringify({
            start: 0,
            limit: 6,
            productTypeCode: 1,
            regionId: 110102,
            sort: 1
          })
        )
        .then(function(data) {});
    },
    price() {
      this.sort = 2;
      this.ajax
        .post(
          "/xinda-api/provider/grid",
          this.qs.stringify({
            start: 0,
            limit: 6,
            productTypeCode: 1,
            regionId: 110102,
            sort: 1
          })
        )
        .then(function(data) {});
    },
    number() {
      this.sort = 3;
      this.ajax
        .post(
          "/xinda-api/provider/grid",
          this.qs.stringify({
            start: 0,
            limit: 6,
            productTypeCode: 1,
            regionId: 110102,
            sort: 1
          })
        )
        .then(function(data) {});
    }
  }
};
</script>

<style  lang="less">
.shoplist {
  width: 1200px;
  margin: 0 auto;
}
.list-head p {
  text-align: left;
  //margin-left: 90px;
  color: #000;
  font-size: 13px;
  margin-top: 26px;
}
.ge1 {
  width: 1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  //margin-left: 90px;
  margin-top: 7px;
}
.ge2 {
  width: 1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-top: hidden;
  //margin-left: 90px;
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
  cursor: pointer;
}
.blue {
  background-color: #2693d4;
}
.adress {
  margin-left: 130px;
  margin-top: -35px;
  position: absolute;
  select {
    border: 1px solid #cdcdcd;
    width: 130px;
    height: 30px;
    margin-right: 10px;
  }
}
.ge3 {
  width: 1200px;
  height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  //margin-left: 90px;
  margin-top: 25px;
  text-align: left;
  .forms {
    display: inline-block;
    width: 100px;
    height: 40px;
    // background-color: #2693d4;
    border-radius: 3px;
    p {
      font-size: 14px;
      line-height: 40px;
      position: relative;
      margin-left: 10px;
      margin-top: -2px;
      text-align: center;
      cursor: pointer;
    }

    span {
      margin-left: 40px;
      display: block;
      border-bottom: 9px solid transparent;
      border-left: 9px solid transparent;
      border-top: 9px solid #2693d4;
      border-right: 9px solid transparent;
      position: absolute;
      display: none;
    }
  }
  .blued {
    background-color: #2693d4;
  }
}
.ge3 .forms:hover {
  background-color: #2693d4;
}
.ge3 .forms:hover span {
  display: block;
}
.bigges {
  width: 1200px;
  height: 280px;
  background-color: #fff;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  //margin-left: 90px;
  .box {
    width: 570px;
    height: 250px;
    border: 1px solid #ccc;
    margin-left: 17px;
    margin-top: 12px;
    float: left;
    .logoimg {
      margin-top: 50px;
      float: left;
      margin-left: 30px;
      img {
        width: 130px;
        height: 70px;
      }
    }
    .jinpai {
      margin-top: 70px;
      float: left;
      margin-left: -200px;
      margin-top: 180px;
      position: relative;
      img {
        width: 30px;
        height: 35px;
        margin-left: 20px;
      }
      p {
        font-size: 13px;
        margin-left: 155px;
        margin-top: -27px;
      }
    }
    p {
      margin-top: 13px;
      margin-left: 230px;
      font-size: 13px;
      line-height: 10px;
      text-align: left;
    }
    .xinyu {
      margin-top: -17px;
      img {
        margin-left: -110px;
      }
    }
    .type {
      display: flex;
      margin-left: 220px;
      flex-wrap: wrap;
      position: absolute;
      width: 370px;
      clear: both;
      p {
        font-size: 13px;
        text-align: center;
        width: 70px;
        height: 25px;
        color: #f6fafd;
        margin-top: 15px;
        line-height: 25px;
        margin-left: 10px;
        border-radius: 3px;
        background-color: #2693d4;
      }
    }
    .store {
      width: 100px;
      height: 33px;
      background-color: #ff591b;
      margin-left: 230px;
      border-radius: 5px;
      position: absolute;
      margin-top: 100px;
      a {
        font-size: 13px;
        color: #fff;
        text-decoration: none;
        line-height: 31px;
      }
    }
  }
}
.lastbutton {
  height: 35px;
  margin: 20px auto 20px;
  a {
    height: 35px;
    border: 1px solid #cccccc;
    background-color: #ffffff;
    padding: 10px 15px;
    color: #000;
    cursor: pointer;
    color: #2794d5;
    border: 1px solid #2794d5;
  }
}
.lastbutton a:hover {
  color: #2794d5;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


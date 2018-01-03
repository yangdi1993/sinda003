<template>
  <div class="pay">
    <div class="pay-content">
      <div class="pay-top">
        <p>首页/
          <span>购物车</span>
        </p>
      </div>
      <div class="pay-head">
        <div>
          <p>全部商品
            <span>({{carts.length}})</span>
          </p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>公司</th>
            <th>服务商品</th>
            <th>单价</th>
            <th>数量</th>
            <th>金额</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="cart in carts" :key="cart.id">
          <tr class="shopname">
            <p>店铺：
              <span>{{cart.providerName}}</span>
            </p>
          </tr>
          <tr class="goods">
            <td class="tdone"><img :src="newUrl + cart.providerImg" alt=""></td>
            <td class="tdtwo">{{cart.serviceName}}</td>
            <td class="tdthree">￥{{cart.unitPrice}}.00</td>
            <td class="tdfour">
              <button @click="min(cart.serviceId,cart.buyNum)">-</button><input type="number" v-model="cart.buyNum" readonly="readonly">
              <button @click="add(cart.serviceId,cart.buyNum)">+</button>
            </td>
            <td class="zjia">￥{{cart.totalPrice}}.00</td>
            <td class="dele">
              <el-button type="text" @click="Dele(cart.serviceId)" style="width:40px;">删除</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="tomoney">
        <div class="total">金额总计：
          <p class="">￥{{Total}}.00</p>
        </div>
        <div class="continue" @click="continued()">继续购物</div>
        <div class="balance" @click="balance()">去结算</div>
      </div>
      <div class="hotservice">
        <div>
          <p>热门服务
          </p>
        </div>
        <div class="service" v-for="product in products" :key="product.id">
          <div class="fir">
            <p>{{product.serviceName}}</p>
          </div>
          <div class="bg-img"></div>
          <div class="sec">
            <p>{{product.serviceInfo}}</p>
          </div>
          <div class="thd">
            <p>销量：{{product.buyNum}}</p>
          </div>
          <div class="four">
            <p>￥{{product.price}}.00</p>
          </div>
          <div class="fifth">
            <p>原价：￥{{product.marketPrice}}</p>
          </div>
          <div class="check" @click="viewDetails(product.id)">查看详情>>></div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import { mapActions } from "vuex";
import {MessageBox,Message,Button} from 'element-ui'
import Vue from 'vue'
Vue.use(Button);
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
export default {
  name: "HelloWorld",
  // components:{
  //   [MessageBox.name]:MessageBox,
  //   [Message.name]:Message,
  //   [Button.name]:Button
  // },
  
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      num1: 1,
      products: [],
      carts: [],
      num: "",
      Total: "",
      id: "",
      promt: false
    };
  },
  methods: {
    //获取购物车列表
    gettingData() {
      var that = this;
      this.ajax.post("/xinda-api/cart/list").then(function(data) {
        var proData = data.data.data;
        that.carts = proData;
        var Total = 0;
        for (var i in that.carts) {
          Total += that.carts[i].totalPrice;
        }
        that.Total = Total;
        //console.log(that.carts);
      });
    },
    //增加数量
    add(id, buyNum) {
      var that = this;
      if (buyNum < 10) {
        this.ajax
          .post("/xinda-api/cart/add", this.qs.stringify({ id: id, num: 1 }))
          .then(function(data) {
            //console.log(data.data);
            that.gettingData();
          });
      } else {
        buyNum = 10;
      }
    },
    //减少数量
    min(id, buyNum) {
      var that = this;
      if (buyNum - 1 >= 1) {
        this.ajax
          .post("/xinda-api/cart/add", this.qs.stringify({ id: id, num: -1 }))
          .then(function(data) {
            //console.log(data.data);
            that.gettingData();
          });
      } else {
        this.Dele(id);
        that.gettingData();
      }
    },
    //结算
    balance() {
      var that = this;
      this.ajax.post("/xinda-api/cart/submit").then(function(data) {
        that.$router.push({
          path: "/inner/paypage",
          query: { id: data.data.data }
        });
        //console.log(data.data.data);
      });
    },
    //继续购物
    continued() {
      this.$router.push({ path: "/inner/homepage" });
    },
    //查看详情
    viewDetails: function(id) {
      this.$router.push({ path: "/inner/Detail", query: { id: id } });
      //console.log(this.$route.query.id);
    },
    //删除商品
    Dele(id) {
      var that=this;
      this.$confirm("即将删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          var that = this;
          this.ajax
            .post("/xinda-api/cart/del", this.qs.stringify({ id: id }))
            .then(function(data) {
              //location.reload();
              that.gettingData();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    // 热门服务
    var that = this;
    this.ajax
      .post(
        "/xinda-api/product/package/grid",
        this.qs.stringify({
          start: 0,
          limit: 4
        })
      )
      .then(function(data) {
        var rData = data.data.data;
        that.products = rData;
        //console.log(that.products);
      });
    this.gettingData();
  }
};
</script>

<style scoped lang="less">
.pay-content {
  width: 1200px;
  //height: 950px;
  background: white;
  margin: 0 auto;
  overflow: hidden;
}
.pay-top {
  width: 100%;
  margin-top: 20px;
  color: black;
  font-size: 16px;
  p {
    margin-right: 1100px;
  }
}
.pay-head {
  width: 100%;
  border-bottom: 1px solid #bcbdbd;
  margin-top: 25px;
  p {
    color: #74b2df;
    width: 150px;
    font-size: 16px;
    margin-right: 1115px;
    margin-bottom: 10px;
  }
}
table {
  width: 1200px;
}
thead {
  width: 1200px;
  tr {
    line-height: 55px;
    width: 1200px;
    //margin-left: 50px;
    color: #686868;
    display: flex;
    justify-content: space-around;
  }
}
tbody {
  width: 1200px;
  position: relative;
  p {
    color: #686868;
    margin-right: 1000px;
    line-height: 40px;
    background-color: white;
    width: 300px;
  }
  .goods {
    background-color: #f7f7f7;
    line-height: 55px;
    width: 1200px;
    //margin-left: 50px;
    color: #686868;
    // display: flex;
    // justify-content: space-around;
    overflow: hidden;
    button {
      width: 18px;
      background-color: #bcbdbd;
    }
    input {
      width: 33px;
      outline: none;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
}
.tdone {
  width: 40px;
  float: left;
  margin-left: 65px;
}
.tdtwo {
  width: 360px;
  float: left;
}
.tdthree {
  width: 100px;
  float: left;
}
.tdfour {
  width: 100px;
  float: left;
  margin-left: 100px;
}
.zjia {
  color: #71afdd;
  float: left;
  margin-left: 120px;
}
.dele {
  cursor: pointer;
  float: left;
  margin-left: 155px;
}
.tomoney {
  margin-top: 25px;
  float: left;
}
.total {
  font-size: 13px;
  color: #686868;
  margin-left: 980px;
  p {
    color: #2693d4;
    font-size: 20px;
    font-weight: bold;
    display: inline;
  }
}
.continue {
  width: 100px;
  line-height: 26px;
  border: 1px solid #2693d4;
  color: #2693d4;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 950px;
}
.balance {
  width: 100px;
  line-height: 26px;
  border: 1px solid #2693d4;
  color: #2693d4;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 1070px;
  margin-top: -28px;
}
.hotservice {
  width: 100%;
  border-bottom: 1px solid #bcbdbd;
  margin-top: 25px;
  p {
    color: #74b2df;
    width: 150px;
    font-size: 16px;
    margin-right: 1115px;
    margin-bottom: 10px;
  }
}
.service {
  margin-top: 34px;
  width: 265px;
  height: 189px;
  border: 1px solid #b6b6b6;
  float: left;
  margin-left: 25px;
  text-align: left;
  margin-bottom: 25px;
  cursor: pointer;
  div {
    margin-left: 10px;
  }
  .fir {
    margin-top: 20px;
    p {
      font-size: 17px;
      color: #676767;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 230px;
    }
  }
  .sec {
    p {
      font-size: 14px;
      color: #676767;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .thd {
    p {
      color: #676767;
    }
  }
  .four {
    p {
      color: #2693d4;
      font-size: 30px;
      font-weight: bold;
    }
  }

  .bg-img {
    width: 200px;
    height: 6px;
    background: url(../images/paypage/Sprites.png) no-repeat;
    background-position: -219px -488px;
    margin-bottom: 10px;
  }
  .fifth {
    p {
      color: #676767;
      text-decoration: line-through;
    }
  }
  .check {
    float: right;
    color: #2693d4;
    margin-top: -28px;
  }
}
</style>
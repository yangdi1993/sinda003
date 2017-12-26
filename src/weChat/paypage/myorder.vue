<template>
  <div class="orderWhole">
    <div class="head" style="">
      <div class="back" @click="back()"><img src="../images/paypage/back.png" alt=""></div>
      <div class="ord">
        <p>我的订单</p>
      </div>
    </div>
    <div class="orderCon" v-for="item in shopData" :key="item.id">
      <div class="fir">
        <p class="ornum">订单号：{{item.businessNo}}</p>
        <p class="status">等待买家付款</p>
      </div>
      <div class="sec">
        <div class="Img"><img src="../images/paypage/dingdan.png" alt=""></div>
        <div class="orDetail">
          <p class="sername">{{item.providerName}}</p>
          <p class="ortime">下单时间：{{nowdate}}</p>
          <p class="toprice">
            <span class="price">￥{{item.totalPrice}}</span>元
            <span>x{{1}}</span>
          </p>
        </div>

      </div>
      <div class="thd">
        <div class="Total">合计：
          <span>￥{{item.totalPrice}}</span>
        </div>
        <div class="dele" @click="dele(item.providerId)">删除订单</div>
        <div class="payment" @click="toPay()">
          <div>付款</div>
        </div>
      </div>
      <!-- 删除订单提示 -->
      <div class="prombox" v-show="promt">
        <div class="btop">
          <p class="xinxi">信息</p>
          <p class="up" @click="cancel()">X</p>
        </div>
        <div class="bcon">确认删除订单吗？</div>
        <div class="bbtm">
          <div class="confirm" @click="confirm(item.providerId)">确认</div>
          <div class="cancel" @click="cancel()">取消</div>
        </div>
      </div>
    </div>
    <!-- 删除订单提示框 -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {
    //获取订单详情
    this.gettingData();
  },
  data() {
    return {
      promt: false,
      dataAll: [],
      rData: [],
      shopData: []
    };
  },
  methods: {
    //获取订单详情
    gettingData() {
      var that = this;
      this.ajax.post("/xinda-api/service-order/grid").then(function(data) {
        var sData = data.data.data;
        that.shopData = sData;
        console.log(that.shopData);
        //that.busOrder = data.data.data.businessOrder;
        //that.serOrLists = data.data.data.serviceOrderList;
        //console.log(that.busOrder.businessNo);
      });
      var date = new Date();
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      var h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      var s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // console.log(Y+M+D+h+m+s);
      this.nowdate = Y + M + D + h + m + s; //时间
    },
    //去付款
    toPay() {},
    //删除订单-弹出提示框
    dele(providerId) {
      this.promt = true;
    },
    //取消删除
    cancel() {
      this.promt = false;
    },
    //确认删除
    confirm(providerId) {
      this.promt = false;
      this.shopData.splice(this.index,1);
      this.gettingData();
      // var that = this;
      // this.ajax
      //   .post("/xinda-api/business-order/del", this.qs.stringify({ id: id }))
      //   .then(function(data) {
      //     console.log(data.data.data);
      //     //that.gettingData();
      //     //location.reload();
      //     that.gettingData();
      //   });
    },
    //返回上一级
    back() {
      history.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.orderWhole {
  width: 100%;
  //margin-top: 1rem;
}
.head {
  background-color: #e5e5e5;
  width: 100%;
  position: fixed;
  top: 0 !important;
  z-index: 10000;
  overflow: hidden;
  .back {
    width: 0.8rem;
    height: 1rem;
    float: left;
  }
  .ord {
    line-height: 1rem;
    color: #000;
    font-size: 0.29rem;
    margin-left: 1.8rem;
    width: 50%;
  }
}
.orderCon {
  height: 3.75rem;
  background-color: #f8f8f8;
  margin-top: 1.0rem;
}
.fir {
  font-size: 0.26rem;
  height: 0.77rem;
  background-color: white;
  .ornum {
    width: 60%;
    float: left;
    line-height: 0.73rem;
    //margin-left: -0.9rem;
  }
  .status {
    width: 25%;
    float: right;
    line-height: 0.73rem;
  }
}
.sec {
  height: 2.63rem;
  .Img {
    width: 2rem;
    height: 2.18rem;
    float: left;
    margin-top: 0.45rem;
    img {
      width: 1.66rem;
      height: 1.66rem;
      border: 0.02rem solid #e3e3e3;
    }
  }
  .orDetail {
    margin-top: 0.45rem;
    height: 2.18rem;
    width: 5.5rem;
    text-align: left;
    float: left;
    .sername {
      font-size: 0.28rem;
      width: 3.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ortime {
      font-size: 0.24rem;
      margin-top: 0.18rem;
    }
    .toprice {
      margin-top: 0.5rem;
      font-size: 0.16rem;
    }
    .price {
      font-size: 0.24rem;
      color: #ff1515;
      font-weight: bold;
    }
  }
}
.thd {
  height: 0.73rem;
  width: 100%;
  background-color: white;
  font-size: 0.24rem;
  line-height: 0.73rem;
  //float: left;
  .Total {
    float: left;
    margin-left: 0.25rem;
    span {
      color: #fe0000;
    }
  }
  .dele {
    float: left;
    width: 1rem;
    height: 0.73rem;
    color: #fe0000;
    margin-left: 2.5rem;
    cursor: pointer;
  }
  .payment {
    width: 1.22rem;
    height: 0.73rem;
    float: right;
    margin-right: 0.3rem;
    cursor: pointer;
    div {
      background-color: #2693d4;
      width: 1.22rem;
      line-height: 0.47rem;
      margin-top: 0.15rem;
      border-radius: 0.01rem;
      color: white;
    }
  }
}
.prombox {
  width: 70%;
  height: 3rem;
  border: 0.01rem solid #e5e5e5;
  background-color: white;
  position: absolute;
  left: 15%;
  .btop {
    height: 0.7rem;
    background-color: #e5e5e5;
    font-size: 0.36rem;
    .xinxi {
      float: left;
      line-height: 0.7rem;
      margin-left: 0.25rem;
    }
    .up {
      line-height: 0.7rem;
      float: right;
      margin-right: 0.25rem;
    }
  }
  .bcon {
    font-size: 0.4rem;
    line-height: 1.4rem;
    font-size: 0.36rem;
  }
  .bbtm {
    height: 0.7rem;
    font-size: 0.32rem;
    .confirm {
      float: left;
      width: 1rem;
      line-height: 0.42rem;
      background-color: #2693d4;
      color: white;
      margin-left: 1.2rem;
    }
    .cancel {
      float: right;
      width: 1rem;
      line-height: 0.42rem;
      background-color: #e5e5e5;
      margin-right: 1.2rem;
    }
  }
}
</style>
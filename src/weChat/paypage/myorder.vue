<template>
  <div class="orderWhole">
    <div class="head">
      <div class="back"></div>
      <div class="ord">
        <p>我的订单</p>
      </div>
    </div>
    <div class="orderCon">
      <div class="fir">
        <p class="ornum">订单号：S13131312121312</p>
        <p class="status">等待买家付款</p>
      </div>
      <div class="sec">
        <div class="Img"><img src="" alt=""></div>
        <div class="orDetail">
          <p class="sername">新公司注册</p>
          <p class="ortime">下单时间：2017-12-25 12:22:22</p>
          <p class="toprice">
            <span class="price">￥1200</span>元
            <span>x1</span>
          </p>
        </div>

      </div>
      <div class="thd">
        <div class="Total">合计：
          <span>￥1200</span>
        </div>
        <div class="dele">删除订单</div>
        <div class="payment" @click="toPay()">
          <div>付款</div>
        </div>
      </div>
    </div>
    <!-- 删除订单提示框 -->
    <div class="prombox">
      <div class="btop"><p class="xinxi">信息</p><p class="up">X</p></div>
      <div>确认删除订单吗？</div>
      <div>
        <div>确认</div>
        <div>取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {},
  data() {
    return {};
  },
  methods: {
    //去付款
    toPay() {}
    //删除订单
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.orderWhole {
  width: 100%;
}
.head {
  background-color: #e5e5e5;
  .back {
    background: url("../images/paypage/ssprites.png") no-repeat;
    position: -13px -8px;
    width: 0.8rem;
    height: 0.77rem;
    float: left;
  }
  .ord {
    line-height: 0.77rem;
    color: #000;
    font-size: 0.29rem;
    margin-left: 1.8rem;
    width: 50%;
  }
}
.orderCon {
  height: 4.35rem;
  background-color: #f8f8f8;
}
.fir {
  font-size: 0.26rem;
  height: 0.77rem;
  background-color: white;
  .ornum {
    width: 50%;
    float: left;
    line-height: 0.73rem;
    margin-left: -0.9rem;
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
.prombox{
  width: 70%;
  height: 3.0rem;
  border: 0.01rem solid #e5e5e5;
  background-color: white;
  position: absolute;
  
  .btop{
    height: 0.7rem;
    background-color: #e5e5e5;
    font-size: 0.36rem;
    .xinxi{
      float: left;
      line-height: 0.7rem;
      margin-left: 0.25rem;
    }
    .up{
      line-height: 0.7rem;
      float: right;
      margin-right: 0.2rem;
    }
  }
}
</style>
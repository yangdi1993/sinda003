<template>
  <div class="pay">
    <div class="pay-content">
      <div class="pay-top">
        <p>首页/
          <span>支付</span>
        </p>
      </div>
      <div class="pay-head">
        <div>
          <p>支付成功</p>
        </div>
      </div>
      <div class="show">
        <div><img src="../images/paypage/u3186.jpg" alt=""></div>
        <div class="warn">
          <p class="fir">支付成功！</p>
          <p class="sec">我们将尽快确认您的（订单号：<span class="codes">{{order}}</span>）付款信息。</p>
          <p class="thd">如有问题，请联系客服：<span>010-83421842</span></p>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      order:''
    };
  },
  created(){  
    this.order=sessionStorage.getItem('busOrder')   //获取订单号
  }
};
</script>

<style scoped lang="less">
.pay-content {
  width: 1200px;
  height: 550px;
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
    font-size: 16px;
    margin-right: 1115px;
    margin-bottom: 10px;
  }
}
.show {
  background-color: #f7f7f7;
  height: 380px;
  margin-top: 20px;
  img {
    margin-top: 70px;
    margin-left: -600px;
  }
  .warn{
    text-align: left;
     margin-top: -200px;
    p{
      margin-left: 450px;
    }
  }
}
.fir{
  font-size: 30px;
  color: #2693d4;
  margin-bottom: 50px;
}
.sec{
  color: #010101;
  font-size: 18px;
  margin-bottom: 30px;
  font-weight: bold;
}
.thd{
  color: #010101;
  font-size: 13px;
  span{
    font-size: 18px;
    font-weight: bold;
  }
}

</style>
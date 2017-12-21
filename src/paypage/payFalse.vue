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
          <p>支付失败</p>
        </div>
      </div>
      <div class="show">
        <div><img src="../images/paypage/u2743.jpg" alt=""></div>
        <div class="warn">
          <p class="fir">支付失败！</p>
          <p class="sec">支付未成功，让我们再试一次吧！</p>
          <p class="thd">如有问题，请联系客服：<span>010-83421842</span></p>
        </div>
        <div class="back" @click="gotoback">返回支付页</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    gotoback(){
      this.$router.go(-1)
    }
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
}
.thd{
  color: #010101;
  font-size: 13px;
  span{
    font-size: 18px;
    font-weight: bold;
  }
}
.back{
  width: 125px;
  height: 34px;
  border-radius: 3px;
  border: 1px solid #2693d4;
  color: #2693d4;
  line-height: 34px;
  margin-left: 720px;
  margin-top: -80px;
  cursor: pointer;
}
</style>
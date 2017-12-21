<template>
  <div class="pay">
    <div class="pay-content">
      <div>
        <div class="pay-top">
          <p>首页/
            <span>支付</span>
          </p>
        </div>
      </div>
      <div class="pay-head">
        <div>
          <p>订单详情</p>
        </div>
      </div>
      <div class="order">
        <div class="count">
          <div class="code">订单编号：
            <span>{{busOrder.businessNo}}</span>
          </div>
          <div class="time">创建时间：
            <span>2017-12-02&nbsp13:59:21</span>
          </div>
          <div class="money">订单金额：
            <span class="jine">￥{{busOrder.totalPrice}}.00元</span><br>
            <div class="showDe" @click="showde()">
              <span class="mingx dianji">订单明细</span>
              <div class="hhh">
                <span class="sanjiao"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="list" v-for="serOrList in serOrLists" :key="serOrList.id" v-show="showDe">
        <ul>
          <li>服务名称：
            <span class="fuwu">{{serOrList.serviceName}}</span>
          </li>
          <li>单价：
            <span class="price">￥{{serOrList.unitPrice}}.00元</span>
          </li>
          <li>数量：
            <span class="number">{{serOrList.buyNum}}</span>
          </li>
          <li>服务总额：
            <span class="amount">￥{{serOrList.totalPrice}}.00元</span>
          </li>
        </ul>
      </div>
      <div class="pay-way">
        <div>
          <p>支付方式</p>
        </div>
      </div>
      <div class="fwy">
        <div>
          <p>非网银支付</p>
        </div>
        <div class="fwy-con">
          <div class="fwy1"><input type="radio" name="paylist" class="radioclass"></div>
          <div class="fwy2"></div>
        </div>
      </div>
      <div class="pt">
        <div class="pt-fir">
          <p>平台支付</p>
        </div>
        <div class="pt-sec">
          <div class="fir1"><input type="radio" name="paylist" class="radioclass"></div>
          <div class="fir2"></div>
          <div class="fir3">
            <p>微信支付</p>
          </div>
        </div>
        <div class="pt-thd">
          <div class="fir1"><input type="radio" name="paylist" class="radioclass"></div>
          <div class="fir2"></div>
          <div class="fir3">
            <p>快捷支付</p>
          </div>
        </div>
      </div>
      <div class="self">
        <div class="self-fir">
          <p>自助转账</p>
          <p class="warn">因限额不能支付时，建议使用自助转账</p>
        </div>
        <div class="self-sec">
          <div class="fir1"><input type="radio" name="paylist" class="radioclass"></div>
          <div class="fir2"></div>
          <div class="fir3">
            <p>开户账号：
              <span>110916853310605</span>
            </p>
            <p>开户名：
              <span>北京爱蓝领科技有限公司</span>
            </p>
            <p>开户行：
              <span>招商银行北京东三环支行</span>
            </p>
          </div>

        </div>
        <div class="warning">
          <p>注：转账时请将订单编号备注在付款信息里，转账完成后，请通知客服</p>
        </div>
      </div>
      <div class="accounts">
        <p>金额总计
          <span>￥{{busOrder.totalPrice}}.00</span>
        </p>
        <div class="account">立即支付</div>
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
      msg: "Welcome to Your Vue.js App",
      shopData: [],
      busOrder: {},
      serOrLists: [],
      showDe: false,
    };
  },
  created() {
    var that = this;
    this.ajax
      .post(
        "/xinda-api/business-order/detail",
        this.qs.stringify({
          businessNo: this.$route.query.id
        })
      )
      .then(function(data) {
        var sData = data.data.data;
        that.shopData = sData;
        console.log(that.shopData);
        that.busOrder = data.data.data.businessOrder;
        that.serOrLists = data.data.data.serviceOrderList;
      });
  },
  methods: {
    showde() {
      this.showDe = true;
    }
  }
};
</script>

<style scoped lang="less">
.pay-content {
  width: 1200px;
  height: 1155px;
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
.order {
  margin-top: 36px;
  width: 1198px;
  height: 75px;
  border: 1px solid #b6b6b6;
  background-color: #f7f7f7;
  .code {
    color: #525252;
    font-size: 14px;
    margin-right: 1050px;
    width: 300px;
    line-height: 75px;
    span {
      color: #71afdd;
    }
  }
  .time {
    color: #525252;
    font-size: 14px;
    line-height: 75px;
    width: 250px;
    margin-left: 480px;
    margin-top: -75px;
  }
  .money {
    color: #525252;
    font-size: 14px;
    width: 250px;
    margin-left: 980px;
    margin-top: -50px;
    .showDe {
      cursor: pointer;
    }
    .hhh {
      width: 10px;
      height: 10px;
      margin-left: 90px;
      margin-top: -25px;
    }
    .jine {
      color: #71afdd;
    }
    .mingx {
      color: #ff2323;
    }
    .sanjiao {
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 5px solid #ff2323;
      margin-top: -50px;
      margin-left: 65px;
    }
  }
}
.dianji {
  div {
    margin-left: 70px;
    margin-top: -25px;
  }
}
.list {
  height: 75px;
  border-bottom: 1px solid #b6b6b6;
  border-left: 1px solid #b6b6b6;
  border-right: 1px solid #b6b6b6;
  background-color: #f7f7f7;
  ul {
    line-height: 75px;
    display: flex;
    list-style: none;
    justify-content: space-around;
    color: #252525;
    .price {
      color: #50a2d9;
    }
    .amount {
      color: #50a2d9;
    }
  }
}
.pay-way {
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
.fwy {
  p {
    margin-right: 1100px;
    color: #676767;
    line-height: 64px;
  }
  .fwy-con {
    width: 205px;
    height: 50px;
    border: 1px solid #f0efef;
    margin-left: 10px;
    .fwy1 {
      .radioclass {
        margin-right: 175px;
        margin-top: 18px;
      }
    }
    .fwy2 {
      margin-left: 20px;
      margin-top: -32px;
      width: 185px;
      height: 50px;
      background: url("../images/paypage/Sprites.png") no-repeat -334px -162px;
    }
  }
}
.pt {
  .pt-fir {
    margin-right: 1100px;
    color: #676767;
    line-height: 64px;
  }
  .pt-sec {
    width: 205px;
    height: 50px;
    border: 1px solid #f0efef;
    margin-left: 10px;
    .fir1 {
      width: 15px;
      margin-left: 10px;
      .radioclass {
        margin-right: 175px;
        margin-top: 18px;
      }
    }
    .fir2 {
      margin-left: 45px;
      margin-top: -32px;
      width: 55px;
      height: 50px;
      background: url("../images/paypage/Sprites.png") no-repeat -458px -20px;
    }
    .fir3 {
      color: #676767;
      width: 50px;
      margin-left: 117px;
      margin-top: -34px;
      font-size: 12px;
    }
  }
  .pt-thd {
    width: 205px;
    height: 50px;
    border: 1px solid #f0efef;
    margin-left: 225px;
    margin-top: -52px;
    .fir1 {
      width: 15px;
      margin-left: 10px;
      .radioclass {
        margin-right: 175px;
        margin-top: 18px;
      }
    }
    .fir2 {
      margin-left: 45px;
      margin-top: -20px;
      width: 70px;
      height: 50px;
      background: url("../images/paypage/Sprites.png") no-repeat -533px -18px;
    }
    .fir3 {
      color: #676767;
      width: 50px;
      margin-left: 117px;
      margin-top: -47px;
      font-size: 12px;
    }
  }
}
.self {
  .self-fir {
    margin-right: 1100px;
    color: #676767;
    p {
      line-height: 64px;
    }
    .warn {
      margin-left: 110px;
      margin-top: -62px;
      width: 210px;
      font-size: 12px;
    }
  }
  .self-sec {
    width: 420px;
    height: 70px;
    margin-left: 10px;
    border: 1px solid #f0efef;
    .fir1 {
      width: 15px;
      margin-left: 10px;
      margin-top: 25px;
    }
    .fir2 {
      margin-left: 35px;
      margin-top: -25px;
      width: 140px;
      height: 50px;
      background: url("../images/paypage/Sprites.png") no-repeat -335px -94px;
    }
    .fir3 {
      text-align: left;
      width: 255px;
      margin-left: 180px;
      margin-top: -55px;
      font-size: 12px;
      color: #676767;
      span {
        color: #333;
      }
    }
  }
}
.warning {
  line-height: 30px;
  margin-right: 680px;
}
.accounts {
  float: right;
  margin-top: 90px;
  p {
    color: #686868;
    margin-right: 30px;
    span {
      color: #2693d4;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .account {
    width: 100px;
    height: 28px;
    border: 1px solid #2693d4;
    border-radius: 4px;
    line-height: 28px;
    color: #2693d4;
    cursor: pointer;
    margin-left: 30px;
  }
}
</style>
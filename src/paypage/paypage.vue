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
            <span>{{nowdate}}</span>
          </div>
          <div class="money">订单金额：
            <span class="jine">￥{{busOrder.totalPrice}}.00元</span><br>
            <div class="showDe" @click="showDe=!showDe">
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
          <li class="fuwu">服务名称：
            <span>{{serOrList.serviceName}}</span>
          </li>
          <li class="price">单价：
            <span>￥{{serOrList.unitPrice}}.00元</span>
          </li>
          <li class="number">数量：
            <span>{{serOrList.buyNum}}</span>
          </li>
          <li class="amount">服务总额：
            <span>￥{{serOrList.totalPrice}}.00元</span>
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
          <div class="fwy1"><input type="radio" v-model="check" value="yinlian" name="paylist" class="radioclass"></div>
          <div class="fwy2"></div>
        </div>
      </div>
      <div class="pt">
        <div class="pt-fir">
          <p>平台支付</p>
        </div>
        <div class="pt-sec">
          <div class="fir1"><input type="radio" v-model="check" value="weixin" name="paylist" class="radioclass"></div>
          <div class="fir2"></div>
          <div class="fir3">
            <p>微信支付</p>
          </div>
        </div>
        <div class="pt-thd">
          <div class="fir1"><input type="radio" v-model="check" value="zhifubao" name="paylist" class="radioclass"></div>
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
          <div class="fir1"><input type="radio" v-model="check" value="zizhu" name="paylist" class="radioclass"></div>
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
        <div class="account" @click="paynow">立即支付</div>
        <div class="paychoose" v-show="!andshow==check">
          <a href="javascript:void(0)" @click="yinlianzf" target="blank">银联支付</a>
          <a href="javascript:void(0)" @click="weixinzf">微信</a>
          <a href="javascript:void(0)" @click="zhifubaozf" target="blank">支付宝</a>
        </div>
      </div>
      <div class="wxmengban" v-show="closewx">
        <div class="wxpaytip">
          <div class="wxpayhead">
            <p>微信支付</p>
            <span @click="closewx=false,andshow=false">×</span>
          </div>
          <div class="wxpayinner">
            <div class="codeimg"><img src="../images/paypage/wxcode.png" alt=""></div>
            <p class="saoyisao">请使用微信扫一扫 进行扫码支付</p>
            <div class="payfinal"><a href="#/inner/payTrue"  @click="alreadypay">已完成支付</a><a href="#/inner/payFalse">支付遇到问题</a></div>
            <p class="packagain" @click="closezfb=false,andshow=false">返回重新选择支付方式</p>
          </div>
        </div>
      </div>
      <div class="wxmengban" v-show="closezfb">   <!-- 支付宝 -->
        <div class="zfbpaytip">
          <div class="wxpayhead">
            <p>支付反馈</p>
            <span @click="closezfb=false,andshow=false">×</span>
          </div>
          <div class="zfbpayinner">
            <div class="payfinaltip">请您在新打开的页面上完成订单付款</div>
            <p class="saoyisao">请使用微信扫一扫 进行扫码支付</p>
            <div class="payfinal"><a href="#/inner/payTrue" @click="alreadypay">已完成支付</a><a href="#/inner/payFalse">支付遇到问题</a></div>
            <p class="packagain" @click="closezfb=false,andshow=false">返回重新选择支付方式</p>
          </div>
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
      msg: "Welcome to Your Vue.js App",
      shopData: [],
      busOrder: {},
      serOrLists: [],
      showDe: false,
      nowdate:'',   //时间
      check:'',   //页面支付方式是否选择
      andshow:false,  //支付弹出支付方式
      closewx:false,  //微信支付页面弹出
      closezfb:false,  //其他支付页面弹出
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
        // console.log(that.shopData);
        that.busOrder = data.data.data.businessOrder;
        that.serOrLists = data.data.data.serviceOrderList;
      });
      //以下是杨迪补充的，时间部分
      var date = new Date();
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes())  + ':';
      var s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds())
      // console.log(Y+M+D+h+m+s);
      this.nowdate=Y+M+D+h+m+s  //时间
  },
  methods: {
    paynow(){
      if(!this.check){  //页面没有选择支付方式时
        this.andshow=true
      }else{
        if(this.check=='weixin'){
          this.andshow=false
          this.closewx=true
          this.closezfb=false
          //console.log(this.check,'微信')
          this.ajax.post('xinda-api/pay/ weixin-pay',this.qs.stringify({
            businessNo:this.busOrder.businessNo
          })).then(function(data){
            sessionStorage.setItem('orderdata',data.data)
            window.open('#/inner/orderData')
          })
        }else{
          this.andshow=false
          this.closewx=false
          this.closezfb=true
          
          if(this.check=='yinlian'|'zizhu'){   //银联
            //console.log(this.check,'银联',123)
            this.ajax.post('xinda-api/pay/china-pay',this.qs.stringify({
              businessNo:this.busOrder.businessNo
            })).then(function(data){
              sessionStorage.setItem('orderdata',data.data)
              window.open('#/inner/orderData')
            })
          }else if(this.check=='zhifubao'){    //支付宝
            //console.log(this.check,'支付宝')
            this.ajax.post('xinda-api/pay/ali-pay',this.qs.stringify({
              businessNo:this.busOrder.businessNo
            })).then(function(data){
              sessionStorage.setItem('orderdata',data.data)
              window.open('#/inner/orderData')
            })
          }
        }
      }
    },
    yinlianzf(){
      this.closezfb=true
      this.check='yinlian'
      //console.log(this.check,'银联',123)
      this.ajax.post('xinda-api/pay/china-pay',this.qs.stringify({
        businessNo:this.busOrder.businessNo
      })).then(function(data){
        sessionStorage.setItem('orderdata',data.data)
        console.log(data.data)
        window.open('#/inner/orderData')
      })
    },
    weixinzf(){
      this.closewx=true
      this.check='weixin'
      //console.log(this.check,'微信')
      this.ajax.post('xinda-api/pay/ weixin-pay',this.qs.stringify({
        businessNo:this.busOrder.businessNo
      })).then(function(data){
        sessionStorage.setItem('orderdata',data.data)
        window.open('#/inner/orderData')
      })
    },
    zhifubaozf(){
      this.closezfb=true
      this.check='zhifubao'
      //console.log(this.check,'支付宝')
      this.ajax.post('xinda-api/pay/ali-pay',this.qs.stringify({
        businessNo:this.busOrder.businessNo
      })).then(function(data){
        sessionStorage.setItem('orderdata',data.data)
        window.open('#/inner/orderData')
      })
    },
    alreadypay(){   //点击支付成功
      sessionStorage.setItem('busOrder',this.busOrder.businessNo)
    },

  }
};
</script>

<style scoped lang="less">
*{padding: 0;margin: 0;border: 0;}
.pay-content {
  width: 1200px;
  height: 1000px;
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
      margin-top: 10px;
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
    // justify-content: space-around;
    // float: left;
    color: #252525;
    text-align: left;
    .fuwu{
      width: 400px;
      margin-left: 45px;
    }
    .price {
      color: #50a2d9;
      width: 300px;
    }
    .number{
      width: 250px;
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
      background: url("../images/paypage/Sprites.png") no-repeat -8px -162px;
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
      background: url("../images/paypage/Sprites.png") no-repeat -132 px -20px;
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
      background: url("../images/paypage/Sprites.png") no-repeat -207px -18px;
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
      background: url("../images/paypage/Sprites.png") no-repeat -9px -94px;
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
  position: relative;
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
    margin-top: 20px;
    margin-left: 30px;
    
  }
}
.paychoose{
  width: 78px;
  height: 98px;
  border: 1px solid #999;
  border-radius: 6px;
  background: #fff;
  position: absolute;
  left: 70px;
  top: 65px;
  a{
    width: 50px;
    height: 19px;
    padding: 3px 8px;
    display: block;
    border: 1px solid #999;
    border-radius: 5px;
    background: #eee;
    font-size: 12px;
    color: #000;
    text-decoration: none;
    line-height: 19px;
    margin: 4px auto;
  }
}
.wxmengban{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: fixed;
  background: rgba(0,0,0,.2);
  top: 0;
  left:0;
  z-index: 26;
}
.wxpaytip{
  width: 334px;
  height: 367px;
  box-shadow: 3px 3px 10px 3px rgb(59, 56, 56);
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
  z-index: 30;
}
.zfbpaytip{
  width: 450px;
  height: 270px;
  box-shadow: 3px 3px 10px 3px rgb(59, 56, 56);
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
  z-index: 30;
}
.wxpayhead{
  width: 100%;
  height: 40px;
  background: #eee;
  p{
    width: 200px;
    height: 100%;
    font-size: 14px;
    font-weight: 700;
    color: #666;
    line-height: 40px;
    float: left;
    text-align: left;
    margin-left: 15px;
  }
  span{
    width: 40px;
    height: 100%;
    display: block;
    float: right;
    font-size: 20px;
    font-weight: 800;
    line-height: 40px;
    color: #666;
    cursor: pointer;
  }
  span:hover{
    background: red;
    color: #fff;
  }
}

.wxpayinner{
  width: 250px;
  height: 327px;
  padding: 0 42px;
  // margin: 0 auto;
  background: #fff;
  float: left;
}
.zfbpayinner{
  width: 100%;
  height: 230px;
  padding: 0 42px;
  // margin: 0 auto;
  background: #fff;
  float: left;
  .payfinaltip{
    font-size: 20px;
    color: #000;
    font-family: '黑体';
    margin: 30px 0 20px;
  }
}
.codeimg{
    width: 180px;
    height: 180px;
    margin: 20px auto 0;
    img{
      width: 100%;
    }
  }
  .saoyisao{
    height: 25px;
    font-size: 15px;
    color: #666;
    font-family: '黑体';
    line-height: 25px;
  }
  .payfinal{
    height: 30px;
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    a{
      height: 25px;
      width: 110px;
      font-size: 14px;
      color: #2cd4d4;
      line-height: 25px;
      border-radius: 5px;
      border: 1px solid #2cd4d4;
      text-decoration: none;
      // padding: 5px 20px ;
    }
  }
  .packagain{
    font-size: 10px;
    margin-top: 20px;
    color: #2cd4d4;
    cursor: pointer;
  }
</style>
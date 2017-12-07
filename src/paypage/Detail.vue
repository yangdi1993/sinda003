<template>
  <div class="pay">
    <div class="pay-content">
      <div class="pay-top">
        <p>首页/
          <span>购物车</span>
        </p>
      </div>
      <div class="content">
        <div class="g-img"><img src="../images/paypage/u1182.png" alt=""></div>
        <div class="main">
          <div>
            <p class="name">代理记账（半年）</p>
          </div>
          <div>
            <p class="mingxi">6个月小规模企业代理记账业务</p>
          </div>
          <div class="rate">
            <p>市场价：
              <span class="line-through ">￥900</span>
            </p>
            <p>价格：
              <span class="price">￥800.00</span>元</p>
          </div>
          <div class="types">类型：
            <div class="type fir">代理记账（半年）</div>
            <div class="type sec">代理记账+取票+取银行回单（半年）</div>
            <div class="type thd">小规模记账（一年）</div>
          </div>
          <div class="area">
            <p>地区：
              <span class="place">北京-北京市-朝阳区</span>
            </p>
          </div>
          <div class="number">购买数量：
            <input type="text" v-model="quantity" v-on:blur="counts">
          </div>
          <div class="buy">立即购买</div>
          <div class="add">加入购物车</div>
        </div>
        <div class="service">
          <p class="fir">顶级服务商</p>
          <p class="sec">北京信达服务中心</p>
          <div class="consult">马上咨询</div>
          <div class="search">
            <div>查看服务商</div>
          </div>
        </div>
        <div class="bg-img"><img src="../images/paypage/u1225.png" alt=""></div>
        <div class="proservice">
          <div class="kuang">
            <div class="touch fir">服务内容</div>
            <div class="touch sec">商品评价</div>
            <div class="serviceCon" style="display:none">服务内容： <br>1.整理原始票据  <br>2.记账  <br>3.装订凭证  <br>4.出报表  <br>5.月报、季度企业所得税、年度汇算清缴 <br>6.打印总帐、明晰账本 </div>
            <div class="userRating">
              <div class="main">
                <p><span>0%</span>好评</p>
                <div>
                  <p>好评 （0%）</p><div></div>
                  <p>中评 （0%）</p><div></div>
                  <p>差评 （0%）</p><div></div>
                </div>
                <p>客户印象暂无已添加的印象标签</p>
              </div>
              <div class="list"></div>
              <div class="pingjia"></div>
            </div>
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
      quantity: 1
    };
  },
  methods: {
    counts: function() {
      if (/^\+?[1-9]\d*$/.test(this.quantity)) {
        console.log(this);

        this.quantity = "";
      } else {
        this.quantity = this.quantity;
      }
    }
  }
};
</script>

<style scoped lang="less">
.pay-content {
  width: 1200px;
  //height: 1155px;
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
.content {
  margin-top: 20px;
}
.g-img {
  img {
    width: 525px;
    height: 393px;
  }
  margin-right: 675px;
  float: left;
}
.main {
  text-align: left;
  width: 387px;
  float: left;
  margin-left: 555px;
  margin-top: -395px;
}
.name {
  font-size: 22px;
  font-weight: bold;
  color: black;
}
.mingxi {
  margin-top: 21px;
  color: #676767;
  font-size: 14px;
}
.rate {
  width: 385px;
  height: 75px;
  background-color: #f7f7f7;
  p {
    color: #686868;
    margin-top: 20px;
  }
  .line-through {
    color: #686868;
    font-size: 14px;
    text-decoration: line-through;
  }
  .price {
    color: #ff0000;
    font-weight: bold;
    font-size: 16px;
  }
}
.types {
  color: #686868;
  margin-top: 20px;
  .type {
    display: inline-block;
    padding: 3px;
    margin-top: 10px;
    cursor: pointer;
  }
  .fir {
    border: 1px solid #2693d4;
    color: #2693d4;
  }
  .sec {
    border: 1px solid #e4e4e4;
    color: #333;
    margin-left: 55px;
  }
  .thd {
    border: 1px solid #e4e4e4;
    color: #333;
    margin-left: 55px;
  }
}
.area {
  margin-top: 25px;
  color: #686868;
}
.number {
  color: #686868;
  margin-top: 25px;
  button {
    width: 25px;
    height: 25px;
  }
  input {
    width: 118px;
    height: 23px;
    border: 1px solid #707070;
    outline: none;
  }
}
.buy {
  width: 95px;
  line-height: 27px;
  background-color: #2693d4;
  color: white;
  text-align: center;
  cursor: pointer;
  margin-top: 25px;
  margin-left: 60px;
}
.add {
  width: 95px;
  line-height: 25px;
  border: 1px solid #2693d4;
  color: #2693d4;
  text-align: center;
  cursor: pointer;
  margin-top: -27px;
  margin-left: 170px;
}
.service {
  width: 198px;
  height: 233px;
  border: 1px solid #2693d4;
  float: right;
  margin-top: -395px;
  .fir {
    color: black;
    font-weight: bold;
    font-size: 24px;
    margin-top: 23px;
    text-align: center;
  }
  .sec {
    color: #676767;
    font-size: 14px;
    margin-top: 21px;
  }
  .consult {
    width: 88px;
    line-height: 28px;
    border: 1px solid #2693d4;
    color: #2693d4;
    margin-top: 23px;
    margin-left: 54px;
    cursor: pointer;
  }
  .search {
    width: 198px;
    height: 75px;
    background-color: #bddef2;
    overflow: hidden;
    margin-top: 18px;
    div {
      width: 110px;
      line-height: 30px;
      background-color: #2693d4;
      color: white;
      margin-top: 23px;
      margin-left: 44px;
      cursor: pointer;
    }
  }
}
.bg-img {
  float: left;
  height: 98px;
  margin-top: 20px;
}
.proservice {
  width: 1198px;
  height: 788px;
  border: 1px solid #ccc;
  float: left;
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
}
.kuang {
  height: 41px;
  border-bottom: 1px solid #ccc;
  background-color: #f7f7f7;
  .fir {
    //display: block;
    width: 135px;
    line-height: 41px;
    background-color: #2693d4;
    color: white;
    cursor: pointer;
  }
  .sec {
    width: 135px;
    line-height: 41px;
    color: #636363;
    cursor: pointer;
    margin-left: 135px;
    margin-top: -41px;
  }
}
.serviceCon{
  text-align: left;
  margin-left: 10px;
  line-height: 35px;
  color: #333;
}
.userRating{
  float: left;
  margin-right: 1000px;
  margin-top: 500px;
}
</style>
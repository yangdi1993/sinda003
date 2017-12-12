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
            <div class="type type-fir">代理记账（半年）</div><br>
            <div class="type type-sec">代理记账+取票+取银行回单（半年）</div><br>
            <div class="type type-thd">小规模记账（一年）</div>
          </div>
          <div class="area">
            <p>地区：
              <span class="place">北京-北京市-朝阳区</span>
            </p>
          </div>
          <div class="number">购买数量：
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
      </div>
      <div class="bg-img"><img src="../images/paypage/u1225.png" alt=""></div>
      <div class="proservice">
        <div class="kuang">
          <el-radio-group v-model="tabPosition" style="margin-bottom: 30px; margin-right:1000px;">
            <el-radio-button label="top" v-on:click="changefir">服务列表</el-radio-button>
            <el-radio-button label="" v-on:click="changesec">商品评价</el-radio-button>
          </el-radio-group>
        </div>
        <div class="serviceCon">服务内容： <br>1.整理原始票据 <br>2.记账 <br>3.装订凭证 <br>4.出报表 <br>5.月报、季度企业所得税、年度汇算清缴 <br>6.打印总帐、明晰账本 </div>
        <div class="userRating" style="display:none">
          <div class="con">
            <p class="main-fir">
              <span>0%</span>好评</p>
            <div class="main-sec">
              <p class="">好评 （0%）</p>
              <div></div>
              <p class="">中评 （0%）</p>
              <div></div>
              <p class="">差评 （0%）</p>
              <div></div>
            </div>
            <div class="main-thd">
              <p class="">客户印象</p>
              <p>暂无已添加的印象标签</p>
            </div>
          </div>
          <div class="list">
            <div>全部评价（0）</div>
            <div>好评（0）</div>
            <div>中评（0）</div>
            <div>差评（0）</div>
          </div>
          <div class="pingjia">
            <table>
              <thead>
                <tr>
                  <th>评价</th>
                  <th>满意度</th>
                  <th>用户</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="key in products" :key="key">
                  <td>{{111}}</td>
                  <td>{{111}}</td>
                  <td>{{111}}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <!-- <button>上一页</button>
                    <button>1</button>
                    <button>下一页</button> -->
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      quantity: 1,
      products: [],
      isA: true,
      num1: 1,
      tabPosition: "top"
    };
  },
  methods: {
    //购买数量
    handleChange(value) {
      console.log(value);
    },
    counts: function() {
      var Quantity = document.querySelector(".Quantity");
      if (/^\+?[1-9]\d*$/.test(this.quantity)) {
        //console.log(this);
        this.quantity = "";
      } else {
        this.quantity = this.quantity;
      }
    },
    changefir: function() {
      var ServiceCon = document.querySelector(".serviceCon");
      var UserRating = document.querySelector(".userRating");
    }
  },
  // created: {
  //   UserRating: function() {
  //     this.ajax.post(
  //       "/xinda-api/product/judge/grid",
  //       this.qs
  //         .stringify({
  //           start: 0
  //         })
  //         .then(data => {
  //           console.log(data);
  //         })
  //     );
  //   }
  // }
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
  // display: flex;
  // flex-direction: column;
  .type {
    display: inline-block;
    padding: 3px;
    margin-top: 10px;
    cursor: pointer;
  }
  .type-fir {
    border: 1px solid #2693d4;

    color: #2693d4;
  }
  .type-sec {
    border: 1px solid #e4e4e4;
    color: #333;
    margin-left: 55px;
  }
  .type-thd {
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
  margin-top: 50px;
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
  .t-fir {
    //display: block;
    width: 135px;
    line-height: 41px;
    background-color: #2693d4;
    color: white;
    cursor: pointer;
  }
  .t-Fir {
    width: 135px;
    line-height: 41px;
    color: #636363;
    cursor: pointer;
  }
  .t-sec {
    width: 135px;
    line-height: 41px;
    color: #636363;
    cursor: pointer;
    margin-left: 135px;
    margin-top: -41px;
  }
  .t-Sec {
    width: 135px;
    line-height: 41px;
    background-color: #2693d4;
    color: white;
    cursor: pointer;
    margin-left: 135px;
    margin-top: -41px;
  }
}
.serviceCon {
  text-align: left;
  margin-left: 10px;
  line-height: 35px;
  color: #333;
  height: 120px;
  width: 790px;
}
.userRating {
  float: left;
  //line-height: 120px;
  // margin-left: -530px;
  // margin-top: 400px;
  width: 1200px; //1200
  height: 790px; //790
}
.list {
  //margin-left: 530px;
  float: left;
  width: 1198px;
  height: 48px;
  background-color: #f2f2f2;
  border-top: 1px solid #bcbcbc;
  border-bottom: 1px solid #bcbcbc;
  div {
    float: left;
    line-height: 48px;
    //margin-left: 14px;
    //padding-right: 5px;
    width: 115px;
    height: 48px;
    color: #333;
    border-right: 1px solid #bcbcbc;
    cursor: pointer;
  }
}
.list > div:first-child {
  background-color: #169bd5;
  color: white;
}
.pingjia {
  thead {
    tr {
      width: 1200px;
      color: #333;
      border-bottom: 1px solid #bcbcbc;
      display: flex;
      justify-content: space-around;
      line-height: 45px;
    }
  }
}
.con {
  //float: left;
  width: 1170px;
  height: 90px;
  .main-fir {
    margin-left: 20px;
    color: #169bd5;
    font-size: 16px;
    line-height: 80px;
    width: 80px;
    span {
      font-size: 35px;
    }
  }
  .main-sec {
    margin-left: 80px;
    margin-top: -85px;
    color: #646464;
    border-right: 1px solid #bcbcbc;
    width: 800px;
    height: 86px;
    p {
      line-height: 30px;
      margin-right: 550px;
    }
    div {
      width: 165px;
      height: 20px;
      background-color: #e4e4e4;
      //display: block;
      margin-left: 170px;
      margin-top: -23px;
    }
  }
  .main-thd {
    margin-left: 900px;
    width: 160px;
    height: 86px;
    margin-top: -85px;
    color: #4b4b4b;
    p {
      line-height: 40px;
    }
  }
}
</style>
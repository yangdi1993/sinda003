<template>
  <div class="pay">
    <div class="pay-content">
      <div class="pay-top">
        <p>首页/
          <span>购物车</span>
        </p>
      </div>
      <div class="content">
        <div class="g-img"><img :src="newUrl + products.img" alt=""></div>
        <div class="main">
          <div>
            <p class="name">{{providerProducts.serviceName}}</p>
          </div>
          <div>
            <p class="mingxi">{{providerProducts.serviceInfo}}</p>
          </div>
          <div class="rate">
            <p>市场价：
              <span class="line-through ">￥{{products.marketPrice}}</span>
            </p>
            <p>价格：
              <span class="price">￥{{providerProducts.price}}</span>元</p>
          </div>
          <div class="types">类型：
            <div class="type">{{products.info}}</div>
          </div>
          <div class="area">
            <p>地区：
              <span class="place">{{regionText}}</span>
            </p>
          </div>
          <div class="number">购买数量：
            <button @click="min(num)">-</button><input type="number" v-model="num" readonly="readonly"><button @click="add(num)">+</button>
          </div>
          <div class="buy" v-on:click="buy(providerProducts.id,num)">立即购买</div>
          <div class="add" v-on:click="addCart(providerProducts.id,num)">加入购物车</div>
        </div>
        <div class="service">
          <p class="fir">顶级服务商</p>
          <p class="sec">北京信达服务中心</p>
          <div class="consult" @click="Consult()">马上咨询</div>
          <div class="search">
            <div>
              <a href="#/inner/shophome">查看服务商</a>
            </div>
          </div>
        </div>
        <!-- 电话咨询 -->
        <div class="phAdvice" v-show="phadvice">
          <div class="phTop">
            <div>
              <p>免费电话咨询</p>
              <p class="up" @click="Up()">X</p>
            </div>

          </div>
          <div class="phCon">
            <div class="conFir">
            </div>
            <div class="conSec"><input type="text" placeholder="请输入手机号码"></div>
            <div class="conThd"><input type="text" placeholder="请输入图形验证码">
              <div class="code"><img src="../images/paypage/code.png" alt=""></div>
            </div>
            <div class="conFor"><input type="text" placeholder="请输入验证码">
              <div>获取验证码</div>
            </div>
            <div class="conFif" @click="startCon()">
              <div>开始免费咨询</div>
            </div>
            <div class="conSix">
              <p>本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用</p>
            </div>
          </div>
        </div>
        <!-- 咨询等候 -->
        <div class="adviceCon" v-show="advicecon">
          <div class="conTop">
            <div>
              <p>免费电话咨询</p>
              <p class="up" @click="Up()">X</p>
            </div>

          </div>
          <div class="phcon">
            <p class="phconFir">本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用</p>
            <p class="phconSec">正在为您接通电话</p>
            <p class="phconThd">请您注意接听电话</p>
          </div>
        </div>
      </div>
      <div class="bg-img"><img src="../images/paypage/u1225.png" alt=""></div>
      <div class="proservice">
        <div class="kuang">
          <div class="ch-service" :class="{blued:sort==1}" @click="chService()">服务内容</div>
          <div class="ch-judge" :class="{blued:sort==2}" @click="chJudge()">商品评价</div>
        </div>
        <div class="serviceCon" v-show="serviceCon" v-html="providerProducts.serviceContent"></div>
        <div class="userRating" v-show="userRating">
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
            <div class="lifir" @click="liFir()" :class="{blueded:fort==1}">全部评价（{{2}}）</div>
            <div class="lifec" @click="liSec()" :class="{blueded:fort==2}">好评（{{2}}）</div>
            <div class="lithd" @click="liThd()" :class="{blueded:fort==3}">中评（{{assesses.midNum}}）</div>
            <div class="lifor" @click="liFor()" :class="{blueded:fort==4}">差评（{{assesses.badNum}}）</div>
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
              <tbody v-show="Tab">
                <tr>
                  <td>
                    <div class="pingJia">服务很好服务很好服务很好</div>
                  </td>
                  <td>
                    <div class="degree"><img src="../images/paypage/manyidu.png" alt=""></div>
                  </td>
                  <td>
                    <div class="headImg"><img src="../images/paypage/touxiang.png" alt=""></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="pingJia">服务很好很负责，很满意</div>
                  </td>
                  <td>
                    <div class="degree"><img src="../images/paypage/manyidu.png" alt=""></div>
                  </td>
                  <td>
                    <div class="headImg"><img src="../images/paypage/touxiang.png" alt=""></div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div class="paging">
                      <button class="pravicepage" @click="praverpage">上一页</button>
                      <button @click="choosepage(index)">1</button>
                      <button class="nextpage" @click="nexpage">下一页</button>
                    </div>
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
import plugins from "../plugins";
import getData from "../homepage/public";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      quantity: 1,
      products: {},
      isA: true,
      num1: 1,
      tabPosition: "top",
      providerProducts: {},
      num: 1,
      regionText: {},
      serviceCon: true,
      userRating: false,
      assesses: "",
      sort: 1,
      fort: 1,
      phadvice: false,
      advicecon: false,
      pagecount: { allshow: {} },
      Tab: true
    };
  },
  watch: {
    $route: function() {
      var that = this;
    this.ajax
      .post(
        "/xinda-api/product/package/detail",
        this.qs.stringify({ sId: this.$route.query.id }) //this.$route.query.id
      )
      .then(function(data) {
        that.products = data.data.data.product;
        that.providerProducts = data.data.data.providerProduct;
        that.regionText = data.data.data.regionText;
        //console.log(data.data.data.providerProduct);
        //console.log(data.data.data.product);
      });
    }
  },
  methods: {
    ...mapActions(["setNum", "setName"]),
    //减少数量
    min(num) {
      if (num - 1 >= 1) {
        this.num -= 1;
      } else {
        num = 1;
      }
    },
    //增加数量
    add(num) {
      if (this.num < 10) {
        this.num += 1;
      }else{
        this.num=10;
      }
    },
    //服务内容
    chService: function() {
      this.sort = 1;
      this.serviceCon = true;
      this.userRating = false;
    },
    //商品评价
    chJudge: function() {
      this.sort = 2;
      this.serviceCon = false;
      this.userRating = true;
    },
    //全部评价
    liFir() {
      this.fort = 1;
      this.Tab = true;
    },
    //好评
    liSec() {
      this.fort = 2;
      this.Tab = true;
    },
    //中评
    liThd() {
      this.fort = 3;
      this.Tab = false;
    },
    //差评
    liFor() {
      this.fort = 4;
      this.Tab = false;
    },
    //立即购买
    buy(id) {
      var that = this;
      plugins(id, that);
    },
    //咨询
    Consult() {
      this.phadvice = true;
    },
    //开始咨询
    startCon() {
      this.phadvice = false;
      this.advicecon = true;
    },
    //关闭咨询
    Up() {
      this.phadvice = false;
      this.advicecon = false;
    },
    //
    //加入购物车
    addCart(id, num) {
      var that = this;
      this.ajax.post(
        "/xinda-api/cart/add",
        this.qs.stringify({
          id: id,
          num: this.num
        })
      );
      this.ajax.post("/xinda-api/cart/cart-num").then(function(data) {
        that.setNum(data.data.data.cartNum); //购物车物品数量,点击加入购物车后自动更新
      });
    },
    // 分页功能上一页
    praverpage: function() {
      this.changepage <= 0 ? this.changepage : (this.changepage -= 1);
      getData(
        this.lists,
        this.changepage,
        6,
        2,
        this.url,
        this.totle,
        this.pagecount,
        this.productId,
        this.productTypeCode,
        6
      );
      //console.log(this.changepage);
    },
    // 下一页
    nexpage: function() {
      this.changepage >= this.totle.allpage - 1
        ? this.changepage
        : (this.changepage += 1);
      getData(
        this.lists,
        this.changepage,
        6,
        2,
        this.url,
        this.totle,
        this.pagecount,
        this.productId,
        this.productTypeCode,
        6
      );
    },
    // 页数
    choosepage(index) {
      //点击页数
      this.changepage = index;
      // this.showborder=index   //当前页数提示样式
      getData(
        this.lists,
        this.changepage,
        6,
        2,
        this.url,
        this.totle,
        this.pagecount,
        this.productId,
        this.productTypeCode,
        6
      );
    }
  },
  //获取商品详情
  created() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var that = this;
    this.ajax
      .post(
        "/xinda-api/product/package/detail",
        this.qs.stringify({ sId: this.$route.query.id }) //this.$route.query.id
      )
      .then(function(data) {
        that.products = data.data.data.product;
        that.providerProducts = data.data.data.providerProduct;
        that.regionText = data.data.data.regionText;
      });
    //获取评价数量
    this.ajax
      .post(
        "/xinda-api/product/judge/detail",
        this.qs.stringify({ serviceId: "efddc8a338944e998ff2a7142246362b" })
      )
      .then(function(data) {
        var mData = data.data.data;
        that.assesses = mData;
        //console.log(that.assesses);
      });
    getData(
      this.lists,
      this.changepage,
      6,
      2,
      this.url,
      this.totle,
      this.pagecount,
      this.productId,
      this.productTypeCode,
      6
    );
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
  height: 400px;
  width: 1200px;
}
.g-img {
  width: 525px;
  height: 393px;
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
    border: 1px solid #2693d4;
    color: #2693d4;
    border-radius: 3px;
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
    width: 128px;
    margin-left: 35px;
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
      a {
        text-decoration: none;
        color: white;
      }
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
  height: 588px;
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
  overflow: hidden;
  .ch-service {
    //display: block;
    width: 135px;
    line-height: 41px;
    //background-color: #2693d4;
    color: #636363;
    cursor: pointer;
  }
  .ch-judge {
    width: 135px;
    line-height: 41px;
    color: #636363;
    cursor: pointer;
    margin-left: 135px;
    margin-top: -41px;
  }
  .blued {
    background-color: #2693d4;
    color: white;
  }
}
.serviceCon {
  text-align: left;
  line-height: 35px;
  margin-left: 10px;
  color: #333;
  height: 590px;
  width: 1190px;
}
.userRating {
  float: left;
  //line-height: 120px;
  // margin-left: -530px;
  // margin-top: 400px;
  width: 1200px; //1200
  height: 590px; //790
}
.list {
  //margin-left: 530px;
  float: left;
  width: 1198px;
  height: 48px;
  background-color: #f2f2f2;
  border-top: 1px solid #bcbcbc;
  border-bottom: 1px solid #bcbcbc;
  .blueded {
    background-color: #2693d4;
    color: white;
  }
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

.pingjia {
  width: 1198px;
  table {
    width: 1198px;
    display: block;
  }
  thead {
    display: block;
    tr {
      width: 1198px;
      color: #333;
      border-bottom: 1px solid #bcbcbc;
      display: flex;
      justify-content: space-around;
      line-height: 45px;
    }
  }
  tbody {
    display: block;
    tr {
      height: 140px;
      width: 1198px;
      .pingJia {
        line-height: 140px;
        color: #645c5f;
        width: 500px;
        height: 138px;
      }
      .degree {
        width: 200px;
        height: 138px;
      }
      .headImg {
        width: 500px;
        height: 138px;
        img {
          margin-top: 30px;
          margin-left: 90px;
        }
      }
    }
  }
  tfoot {
    width: 1198px;
    display: block;
    margin-top: 10px;
    margin-left: 525px;
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
.phAdvice {
  background-color: white;
  width: 645px;
  height: 425px;
  border: 1px solid #dddbdb;
  position: absolute;
  margin-left: 330px;
  margin-top: 70px;
}
.phTop {
  background-color: #f8f8f8;
  div {
    width: 600px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  line-height: 45px;
  color: #3d434e;
  .up {
    cursor: pointer;
  }
}
.phCon {
  .conFir {
    height: 55px;
    margin-top: 20px;
  }
  .conSec {
    input {
      border: 1px solid #707070;
      outline: none;
      width: 305px;
      height: 35px;
    }
  }
  .conThd {
    margin-top: 20px;
    input {
      width: 190px;
      height: 35px;
      border: 1px solid #707070;
      outline: none;
      margin-right: 115px;
    }
    .code {
      width: 105px;
      margin-left: 370px;
      margin-top: -35px;
    }
  }
  .conFor {
    margin-top: 20px;
    input {
      width: 190px;
      height: 35px;
      border: 1px solid #707070;
      outline: none;
      margin-right: 115px;
    }
    div {
      width: 103px;
      line-height: 33px;
      border: 1px solid #d7d7d7;
      border-radius: 3px;
      background-color: #f5f4f4;
      color: #746f6b;
      cursor: pointer;
      margin-left: 370px;
      margin-top: -35px;
    }
  }
  .conFif {
    margin-top: 20px;
    width: 305px;
    line-height: 35px;
    background-color: #4eb5ba;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    margin-left: 170px;
  }
  .conSix {
    color: #717171;
    font-size: 12px;
    margin-top: 20px;
  }
}
.adviceCon {
  width: 645px;
  height: 425px;
  border: 1px solid #dddbdb;
  position: absolute;
  background-color: white;
  margin-left: 330px;
  margin-top: 70px;
}
.conTop {
  background-color: #f8f8f8;
  div {
    width: 600px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  line-height: 45px;
  color: #3d434e;
  .up {
    cursor: pointer;
  }
}
.phcon {
  font-size: 28px;
  .phconFir {
    color: #646464;
    margin-top: 60px;
  }
  .phconSec {
    color: #60bcc1;
    margin-top: 40px;
  }
  .phconThd {
    color: #60bcc1;
    margin-top: 40px;
  }
}

.paging {
  margin: 20px 0;
  button {
    padding: 0 10px;
    height: 34px;
    font-size: 13px;
    color: #aaa;
    line-height: 34px;
    text-align: center;
    border: 1px solid #ccc;
    margin: 0 3px;
    background: #fff;
    cursor: pointer;
  }
  .bluebd {
    color: #2693d4;
    border: 1px solid #2693d4;
  }
}
</style>
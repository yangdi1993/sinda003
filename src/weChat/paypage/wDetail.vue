<template>
  <div class="detailWhole">
    <div class="head">
      <img :src="'http://115.182.107.203:8088/xinda/pic' + products.img" alt="">
      <div class="quyu">
        <p>区域：{{regionText}}</p>
      </div>
      <div class="Price">
        <p>价格：
          <span>￥{{providerProducts.price}}</span>
          <del>￥{{products.marketPrice}}</del>
        </p>
      </div>
      <div class="sfu">
        <div>
          <p class="sFir">{{providerProducts.serviceName}}</p>
        </div>
        <div>
          <p class="sSec">{{providerProducts.serviceInfo}}</p>
        </div>
      </div>
    </div>
    <div class="shop">
      <div class="shopTop">
        <p>服务商家</p>
        <span class="lineSanjiao"></span>
      </div>
      <div class="shopCon">
        <div class="Img"><img :src="newUrl + providers.providerImg" alt=""></div>
        <div class="shopcon">
          <p>{{providers.name}}</p><br>
          <p>信誉：
            <img src="../images/paypage/diamonds_03.png" alt="">
          </p><br>
          <p>{{providerRegionText}}</p><br>
          <p>累计服务客户次数：{{providerBusinesses.serviceNum}}</p>
          <div class="toshop" @click="ToShop(providers.id)">进入店铺</div>
        </div>
      </div>
      <div class="shopbottom">
        <div class="bofir"><img src="../images/paypage/icon03.png" alt=""></div>
        <div class="bosec">
          <p>金牌服务商</p>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="sertop">
        <p>服务介绍</p>
        <span class="lineSanjiao"></span>
      </div>
      <div class="sercon" v-html="providerProducts.serviceContent">
      </div>
    </div>
    <div class="pingjia">
      <div class="ptop">
        <p>用户评价</p>
        <span class="lineSanjiao"></span>
      </div>
      <div class="pcon">
        <div class="pfir"><img src="../images/paypage/user.jpg" alt=""></div>
        <div class="psec">
          <p>满意度
            <img src="../images/paypage/stars_03.png" alt="">
          </p>
          <p>评价：很好</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="contact" @click="Contact()"><img src="../images/paypage/call_07.png" alt="">
        <p>联系商家</p>
      </div>
      <div class="add" @click="addCart(providerProducts.id)">加入购物车</div>
      <div class="buynow" @click="buyNow(providerProducts.id)">立即购买</div>
    </div>
    <!-- 电话咨询 -->
    <div class="phAdvice" v-show="phadvice">
      <div class="phTop">
        <div>
          <p class="down">免费电话咨询</p>
          <p class="up" @click="Up()">X</p>
        </div>
      </div>
      <div class="phCon">
        <div class="conFir">
          <p>本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用</p>
        </div>
        <div class="conSec"><input type="text" placeholder="请输入手机号码"></div>
        <div class="conThd"><input type="text" placeholder="请输入图形验证码">
          <div class="code"><img src="../images/paypage/code.png" alt=""></div>
        </div>
        <div class="conFor"><input type="text" placeholder="请输入验证码">
          <div>获取验证码</div>
        </div>
        <div class="conFif">
          <div @click="startCon()">开始免费咨询</div>
        </div>
      </div>
    </div>
    <!-- 咨询等候 -->
    <div class="adviceCon" v-show="advicecon">
      <div class="conTop">
        <div>
          <p class="condown">免费电话咨询</p>
          <p class="conup" @click="Up()">X</p>
        </div>
      </div>
      <div class="phcon">
        <p class="phconFir">本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用</p>
        <p class="phconSec">正在为您接通电话</p>
        <p class="phconThd">请您注意接听电话</p>
      </div>
    </div>
    <!-- 提示加入购物车成功 -->
    <div class="buytrue" v-show="buySuccess">加入成功</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HelloWorld",
  created() {
    this.setTitle("商品详情");
    var that = this;
    //商品详情,店铺详情
    this.ajax
      .post(
        "/xinda-api/product/package/detail",
        this.qs.stringify({ sId: this.$route.query.id }) //this.$route.query.id
      )
      .then(function(data) {
        that.products = data.data.data.product;
        that.providerProducts = data.data.data.providerProduct;
        that.regionText = data.data.data.regionText;
        that.providers = data.data.data.provider;
        that.providerRegionText = data.data.data.providerRegionText;
        that.providerBusinesses = data.data.data.providerBusiness;
        //console.log(data.data.data.providerProduct);
        console.log(that.providers.providerImg);
      });
    //店铺详情
  },
  data() {
    return {
      phadvice: false,
      products: {},
      providerProducts: {},
      regionText: {},
      providers: {},
      providerRegionText: {},
      providerBusinesses: {},
      num: 1,
      advicecon: false,
      buySuccess: false
    };
  },
  methods: {
    ...mapActions(["setTitle"]),
    //联系商家
    Contact() {
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
    //加入购物车
    addCart(id) {
      var that = this;
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({
            id: id,
            num: 1
          })
        )
        .then(function(data) {
          that.buySuccess = true;
        });
      setInterval(function() {
        that.buySuccess = false;
      }, 1500);
    },
    //立即购买
    buyNow(id) {
      var that = this;
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({
            id: id,
            num: 1
          })
        )
        .then(function(data) {
          that.$router.push({
            path: "/weChat/shopTro"
          });
        });
    },
    //查看店铺详情
    ToShop(id) {
      this.$router.push({ path: "/weChat/storehome", query: { id: id } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.detailWhole {
  width: 100%;
  margin-top: 1rem;
}
.head {
  position: relative;
  img {
    width: 100%;
    height: 4.78rem;
  }
  .quyu {
    width: 100%;
    font-size: 0.24rem;
    border-bottom: 0.01rem solid #c5c5c5;
    color: #000;
    p {
      margin-right: 3.5rem;
      margin-bottom: 0.18rem;
    }
  }
  .Price {
    border-bottom: 0.05rem solid #c5c5c5;
    p {
      font-size: 0.24rem;
      margin-right: 3.95rem;
      color: #000;
      margin-top: 0.18rem;
      margin-bottom: 0.18rem;
      span {
        font-size: 0.28rem;
        font-weight: bold;
        color: red;
      }
    }
  }
  .sfu {
    position: absolute;
    width: 100%;
    height: 1.18rem;
    background-color: rgba(19, 18, 18, 0.5);
    bottom: 1.4rem;
    div {
      bottom: -0.1rem;
      width: 95%;
      text-align: left;
      float: left;
      margin-left: 0.5rem;
      .sFir {
        width: 95%;
        font-size: 0.28rem;
        color: white;
        line-height: 0.55rem;
      }
      .sSec {
        font-size: 0.24rem;
        width: 95%;
        color: white;
      }
    }
  }
}

.shop {
  margin-top: 0.24rem;
  border-bottom: 0.05rem solid #ebebeb;
  height: 3.6rem;
  .shopTop {
    font-size: 0.28rem;
    color: #000;
    border-bottom: 0.02rem solid #2693d4;
    position: relative;
    p {
      margin-right: 5.15rem;
      margin-bottom: 0.12rem;
    }
    .lineSanjiao {
      width: 0.14rem;
      height: 0.14rem;
      background: #2693d4;
      display: block;
      clip-path: polygon(50% 0%, 100% 50%, 0 50%);
      position: absolute;
      left: 1.1rem;
      bottom: -0.08rem;
    }
  }

  .shopCon {
    .Img {
      width: 2.4rem;
      height: 2.4rem;
      //background-color: #000;
      float: left;
      img {
        width: 1.5rem;
        margin-top: 0.6rem;
        height: 1rem;
      }
    }
    .shopcon {
      font-size: 0.28rem;
      color: #676767;
      text-align: left;
      width: 5.05rem;
      height: 1.6rem;
      float: right;
      margin-top: 0.2rem;
      p {
        line-height: 0.15rem;
      }
      .toshop {
        text-align: center;
        background-color: #ff591b;
        width: 1.52rem;
        line-height: 0.52rem;
        border-radius: 0.03rem;
        color: white;
        font-size: 0.24rem;
        margin-top: 0.3rem;
        cursor: pointer;
      }
      img {
        height: 0.2rem;
      }
    }
  }

  .shopbottom {
    font-size: 0.2rem;
    margin-top: 0.2rem;
    margin-right: 5.8rem;
    color: #676767;
    bofir {
      float: left;
      height: 0.16rem;
      img {
        height: 0.1rem;
      }
    }
    .bosec {
      margin-left: 1.2rem;
      margin-top: -0.3rem;
      p {
        width: 1.2rem;
      }
    }
  }
}
.service {
  margin-top: 0.24rem;
  border-bottom: 0.05rem solid #ebebeb;
  height: 3.2rem;
  .sertop {
    font-size: 0.28rem;
    color: #000;
    border-bottom: 0.02rem solid #2693d4;
    position: relative;
    p {
      margin-right: 5.15rem;
      margin-bottom: 0.12rem;
    }
    .lineSanjiao {
      width: 0.14rem;
      height: 0.14rem;
      background: #2693d4;
      display: block;
      clip-path: polygon(50% 0%, 100% 50%, 0 50%);
      position: absolute;
      left: 1.1rem;
      bottom: -0.08rem;
    }
  }
  .sercon {
    font-size: 0.22rem;
    text-align: left;
    margin-left: 0.6rem;
  }
}
.pingjia {
  margin-top: 0.24rem;
  margin-bottom: 1.2rem;
  .ptop {
    font-size: 0.28rem;
    color: #000;
    border-bottom: 0.02rem solid #2693d4;
    position: relative;
    p {
      margin-right: 5.15rem;
      margin-bottom: 0.12rem;
    }
    .lineSanjiao {
      width: 0.14rem;
      height: 0.14rem;
      background: #2693d4;
      display: block;
      clip-path: polygon(50% 0%, 100% 50%, 0 50%);
      position: absolute;
      left: 1.1rem;
      bottom: -0.08rem;
    }
  }
  .pcon {
    height: 1.28rem;
    overflow: hidden;
    .pfir {
      margin-left: 0.6rem;
      float: left;
      img {
        width: 0.6rem;
        margin-top: 0.3rem;
        height: 0.6rem;
      }
    }
    .psec {
      text-align: left;
      font-size: 0.24rem;
      margin-top: 0.2rem;
      margin-left: 1.5rem;
      border-bottom: 0.01rem solid #e0e0e0;
      //margin-bottom: 0.2rem;
      height: 1.28rem;
      p {
        color: #000;
        line-height: 0.45rem;
      }
      img {
        height: 0.32rem;
      }
    }
  }
}
.bottom {
  position: fixed;
  bottom: 0;
  div {
    float: left;
    width: 2.5rem;
    font-size: 0.28rem;
    color: white;
    cursor: pointer;
  }
  .contact {
    background-color: #edeff2;
    color: #2d2d2d;
    height: 1.15rem;
    img {
      height: 0.41rem;
      margin-left: 0.1rem;
      margin-top: 0.2rem;
    }
  }
  .add {
    background-color: #2693d4;
    line-height: 1.15rem;
  }
  .buynow {
    background-color: #fc4145;
    line-height: 1.15rem;
  }
}
.phAdvice {
  width: 90%;
  height: 6.5rem;
  position: absolute;
  background-color: white;
  border: 0.01rem solid #dddbdb;
  position: fixed;
  left: 5%;
  bottom: 30%;
}
.phTop {
  background-color: #2693d4;
  overflow: hidden;
  height: 0.55rem;
  div {
    width: 100%;
    font-size: 0.28rem;
  }

  .down {
    text-align: center;
    line-height: 0.55rem;
    color: white;
  }
  .up {
    cursor: pointer;
    text-align: right;
    margin-right: 0.2rem;
    margin-top: -0.4rem;
    color: #3d434e;
  }
}
.phCon {
  .conFir {
    font-size: 0.28rem;
    line-height: 0.35rem;
    margin-top: 0.2rem;
  }
  .conSec {
    input {
      border: 0.01rem solid #707070;
      outline: none;
      width: 75%;
      height: 0.45rem;
    }
  }
  .conThd {
    margin-top: 0.1rem;
    input {
      width: 50%;
      height: 0.45rem;
      border: 0.01rem solid #707070;
      outline: none;
      margin-right: 1.65rem;
    }
    .code {
      width: 20%;
      margin-left: 4.5rem;
      margin-top: -1rem;
      img {
        width: 100%;
        height: 0.45rem;
      }
    }
  }
  .conFor {
    input {
      width: 50%;
      height: 0.45rem;
      border: 0.01rem solid #707070;
      outline: none;
      margin-right: 1.65rem;
    }
    div {
      width: 20%;
      line-height: 0.45rem;
      border: 0.01rem solid #d7d7d7;
      border-radius: 0.03rem;
      background-color: #f5f4f4;
      color: #746f6b;
      font-size: 0.18rem;
      cursor: pointer;
      margin-left: 4.5rem;
      margin-top: -0.5rem;
    }
  }
  .conFif {
    margin-top: 0.6rem;
    div {
      width: 50%;
      line-height: 0.45rem;
      background-color: #2693d4;
      color: white;
      border-radius: 0.03rem;
      cursor: pointer;
      font-size: 0.18rem;
      margin: 0 auto;
    }
  }
}
.adviceCon {
  width: 90%;
  height: 4.5rem;
  background-color: white;
  border: 0.01rem solid #dddbdb;
  position: fixed;
  left: 5%;
  bottom: 20%;
  position: absolute;
}
.conTop {
  background-color: #2693d4;
  overflow: hidden;
  height: 0.55rem;
  div {
    width: 100%;
    font-size: 0.28rem;
  }
  .condown {
    text-align: center;
    line-height: 0.55rem;
    color: white;
  }
  .conup {
    cursor: pointer;
    text-align: right;
    margin-right: 0.2rem;
    margin-top: -0.4rem;
    color: #3d434e;
  }
}
.phcon {
  font-size: 0.28rem;
  .phconFir {
    color: #646464;
    margin-top: 0.6rem;
  }
  .phconSec {
    color: #60bcc1;
    margin-top: 0.4rem;
  }
  .phconThd {
    color: #60bcc1;
    margin-top: 0.4rem;
  }
}
.buytrue {
  width: 3rem;
  line-height: 1rem;
  text-align: center;
  background-color: rgba(19, 18, 18, 0.5);
  position: fixed;
  left: 2.3rem;
  bottom: 35%;
  font-size: 0.36rem;
  color: white;
}
</style>
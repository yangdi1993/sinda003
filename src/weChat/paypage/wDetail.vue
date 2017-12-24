<template>
  <div class="detailWhole">
    <div class="head">
      <img src="../images/paypage/u1182.png" alt="">
      <div class="quyu">
        <p>区域：北京-北京市-朝阳区</p>
      </div>
      <div class="Price">
        <p>价格：
          <span>￥2000</span>
          <del>￥5000</del>
        </p>
      </div>
      <div class="sfu">
        <p class="sFir">注册分公司</p>
        <p class="sSec">营业执照+5个章</p>
      </div>
    </div>
    <div class="shop">
      <div class="shopTop">
        <p>服务商家</p>
      </div>
      <div class="shopCon">
        <div class="Img"><img src="" alt=""></div>
        <div class="shopcon">
          <p>信达北京服务中心</p><br>
          <p>信誉：
            <img src="../images/paypage/diamonds_03.png" alt="">
          </p><br>
          <p>北京-北京市-朝阳区</p><br>
          <p>累计服务客户次数：8888</p>
          <button>进入店铺</button>
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
      </div>
    </div>
    <div class="pingjia">
      <div class="ptop">
        <p>用户评价</p>
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
      <div class="contact"><img src="../images/paypage/call_07.png" alt=""><p>联系商家</p></div>
      <div class="add">加入购物车</div>
      <div class="buynow">立即购买</div>
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
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.detailWhole {
  width: 100%;
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
      margin-right: 3.75rem;
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
}
.sfu {
  position: absolute;
  width: 100%;
  height: 1.18rem;
  background-color: rgba(19, 18, 18, 0.5);
  bottom: 1.5rem;
  .sFir {
    font-size: 0.28rem;
    color: white;
    margin-right: 4.8rem;
    line-height: 0.7rem;
  }
  .sSec {
    font-size: 0.24rem;
    color: white;
    margin-right: 4.55rem;
  }
}
.shop {
  margin-top: 0.24rem;
  border-bottom: 0.05rem solid #ebebeb;
  height: 3.1rem;
  .shopTop {
    font-size: 0.28rem;
    color: #000;
    border-bottom: 0.02rem solid #2693d4;
    p {
      margin-right: 5.15rem;
      margin-bottom: 0.12rem;
    }
  }

  .shopCon {
    .Img {
      width: 2.45rem;
      height: 1.8rem;
      //background-color: #000;
      float: left;
      img {
        width: 1.5rem;
        height: 1rem;
      }
    }
    .shopcon {
      font-size: 0.14rem;
      color: #676767;
      text-align: left;
      width: 5.05rem;
      height: 1.6rem;
      float: right;
      margin-top: 0.2rem;
      p {
        line-height: 0.15rem;
      }
      button {
        outline: none;
        background-color: #ff591b;
        width: 1.02rem;
        height: 0.32rem;
        border-radius: 0.03rem;
        color: white;
        font-size: 0.14rem;
        margin-top: 0.15rem;
      }
      img {
        height: 0.1rem;
      }
    }
  }

  .shopbottom {
    font-size: 0.14rem;
    margin-top: 0.2rem;
    margin-right: 5.8rem;
    color: #676767;
    bofir {
      float: left;
      img {
        height: 0.16rem;
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
    p {
      margin-right: 5.15rem;
      margin-bottom: 0.12rem;
    }
  }
}
.pingjia {
  margin-top: 0.24rem;
  .ptop {
    font-size: 0.28rem;
    color: #000;
    border-bottom: 0.02rem solid #2693d4;
    p {
      margin-right: 5.15rem;
      margin-bottom: 0.12rem;
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
      img{
        height: 0.32rem;
      }
    }
  }
}
.bottom{
  //position: fixed;
  div{
    float: left;
    width: 2.5rem;
    
    font-size: 0.28rem;
    color: white;
  }
  .contact{
    background-color: #edeff2;
    color: #2d2d2d;
    height: 1.15rem;
    img{
      height: 0.41rem;
      margin-left: 0.1rem;
      margin-top: 0.2rem;
    }
  }
  .add{
    background-color: #2693d4;
    line-height: 1.15rem;
  }
  .buynow{
    background-color: #fc4145;
    line-height: 1.15rem;
  }
}
</style>
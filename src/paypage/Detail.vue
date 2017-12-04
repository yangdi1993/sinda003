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
                    <div class="7">
                        <p>注册分公司</p>
                    </div>
                    <div>
                        <p>营业执照+5个章（公章，人名章，财务章，发票章，合同章）</p>
                    </div>
                    <div>
                        <p>市场价：
                            <span class="line-through">￥900</span>
                        </p>
                        <p>价格：
                            <span>￥800</span>元</p>
                    </div>
                    <div>类型：
                        <div>注册分公司</div>
                    </div>
                    <div>
                        <p>地区：
                            <span>北京-北京市-朝阳区</span>
                        </p>
                    </div>
                    <div>购买数量：</div>
                    <div class="buy">立即购买</div>
                    <div class="add">加入购物车</div>
                </div>
                <div class="service"></div>
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
      msg: "Welcome to Your Vue.js App"
    };
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
</style>
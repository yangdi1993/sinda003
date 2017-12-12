<template>
    <div class="pay">
        <div class="pay-content">
            <div class="pay-top">
                <p>首页/
                    <span>购物车</span>
                </p>
            </div>
            <div class="pay-head">
                <div>
                    <p>全部商品
                        <span>(1)</span>
                    </p>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>公司</th>
                        <th>服务商品</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>金额</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <p>店铺：
                        <span>哈哈哈哈啊哈哈</span>
                    </p>
                    <tr>
                        <td><img src="" alt="">哈哈哈哈</td>
                        <td>代理记账</td>
                        <td>￥1200</td>
                        <td>
                            <!-- <button>-</button><input type="text" value=1><button>+</button> -->
                            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" style="width:140px;"></el-input-number>
                        </td>
                        <td class="zjia">￥1200</td>
                        <td class="dele">
                            <div>删除</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="tomoney">
                <div class="total">金额总计：
                    <p class="">￥800.00</p>
                </div>
                <div class="continue">继续购物</div>
                <div class="balance">去结算</div>
            </div>
            <div class="hotservice">
                <div>
                    <p>热门服务
                    </p>
                </div>
                <div class="service" v-for="product in products":key="product.id">
                    <div class="fir">
                        <p>{{product.serviceName}}</p>
                    </div>
                    <div class="bg-img"></div>
                    <div class="sec">
                        <p>{{product.serviceInfo}}</p>
                    </div>
                    <div class="thd">
                        <p>销量：</p>
                    </div>
                    <div class="four">
                        <p>￥{{product.marketPrice}}</p>
                    </div>
                    <div class="fifth">
                        <p>原价：￥250000</p>
                    </div>
                    <div class="check">查看详情>>></div>
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
      num1: 1,
      products:[],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  },
  created() {
    var that = this;
    this.ajax
      .post("/xinda-api/recommend/list")
      .then(function(data) {
        var rData = data.data.data.hq;
        console.log(rData);
        that.products = rData;
      });
  }
};
</script>

<style scoped lang="less">
.pay-content {
  width: 1200px;
  //height: 650px;
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
    width: 150px;
    font-size: 16px;
    margin-right: 1115px;
    margin-bottom: 10px;
  }
}
table {
  width: 1200px;
}
thead {
  width: 1200px;
  tr {
    line-height: 55px;
    width: 1200px;
    //margin-left: 50px;
    color: #686868;
    display: flex;
    justify-content: space-around;
  }
}
tbody {
  width: 1200px;
  p {
    color: #686868;
    margin-right: 1000px;
    line-height: 40px;
  }
  tr {
    background-color: #f7f7f7;
    line-height: 55px;
    width: 1200px;
    //margin-left: 50px;
    color: #686868;
    display: flex;
    justify-content: space-around;
    button {
      width: 18px;
      background-color: #bcbdbd;
    }
    input {
      width: 33px;
      outline: none;
    }
    .dele {
      cursor: pointer;
    }
  }
}
.zjia {
  color: #71afdd;
}
.tomoney {
  margin-top: 25px;
}
.total {
  font-size: 13px;
  color: #686868;
  margin-left: 980px;
  p {
    color: #2693d4;
    font-size: 20px;
    font-weight: bold;
    display: inline;
  }
}
.continue {
  width: 100px;
  line-height: 26px;
  border: 1px solid #2693d4;
  color: #2693d4;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 950px;
}
.balance {
  width: 100px;
  line-height: 26px;
  border: 1px solid #2693d4;
  color: #2693d4;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 1070px;
  margin-top: -28px;
}
.hotservice {
  width: 100%;
  border-bottom: 1px solid #bcbdbd;
  margin-top: 25px;
  p {
    color: #74b2df;
    width: 150px;
    font-size: 16px;
    margin-right: 1115px;
    margin-bottom: 10px;
  }
}
.service {
  margin-top: 34px;
  width: 265px;
  height: 189px;
  border: 1px solid #b6b6b6;
  float: left;
  margin-left: 25px;
  text-align: left;
  margin-bottom: 25px;
  cursor: pointer;
  div {
    margin-left: 10px;
  }
  .fir {
    margin-top: 20px;
    p {
      font-size: 17px;
      color: #676767;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 230px;
    }
  }
  .sec {
    p {
      font-size: 14px;
      color: #676767;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .thd {
    p {
      color: #676767;
    }
  }
  .four {
    p {
      color: #2693d4;
      font-size: 30px;
      font-weight: bold;
    }
  }

  .bg-img {
    width: 200px;
    height: 6px;
    background: url(../images/paypage/Sprites.png) no-repeat;
    background-position: -219px -488px;
    margin-bottom: 10px;
  }
  .fifth {
    p {
      color: #676767;
      text-decoration: line-through;
    }
  }
  .check {
    float: right;
    color: #2693d4;
    margin-top: -28px;
  }
}
</style>
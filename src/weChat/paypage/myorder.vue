<template>
  <div class="box">
    <div class="aBody" v-for="list in lists" :key="list.businessNo">
      <div class="order">
        <div>
          <p>订单号：{{list.businessNo}}</p>
          <p>{{list.status}}</p>
        </div>
        <div v-for="serv in list.servitem" :key="serv.id" class="servbox">
          <div>
            <p>{{serv.providerName}}</p>
          </div>
          <div>
            <div><img src="../images/paypage/company.png" alt="公司logo"></div>
            <div>
              <p>{{serv.serviceName}}</p>
              <p>下单时间：{{serv.createTime}}</p>
              <div>
                <p>
                  <span>￥{{serv.unitPrice}}</span>元</p>
                <p>
                  <span>x{{serv.buyNum}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="list.status=='等待买家付款'" class="waitpay">
          <p>合计：
            <span>￥{{list.totalPrice}}</span>
          </p>
          <p @click="dele(list.id)">删除订单</p>
          <button @click="payfor(list.businessNo)">付款</button>
        </div>
        <div v-if="list.status=='已付款'" class="payalready">
          <p>合计：
            <span>￥{{list.totalPrice}}</span>
          </p>
          <p>交易完成</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
import { mapActions } from "vuex";
// import { MessageBox,Lazyload } from "mint-ui";
export default {
  //   components:{
  //   [Lazyload.name]:Lazyload
  // },
  created() {
    //顶部
    this.setTitle("我的订单");
    //执行获取订单的方法
    this.getData();
  },
  components: {},
  data() {
    return {
      lists: [], //v-for循环数据包
      promt: false
    };
  },
  methods: {
    ...mapActions(["setTitle"]),
    // 获取订单列表
    getData() {
      var that = this;
      that.ajax
        .post(
          "/xinda-api/business-order/grid",
          that.qs.stringify({
            //start: start,
            //limit: limit
          })
        )
        .then(function(data) {
          //console.log("origin==", data);
          //if (data.data.data && data.data.data.length) {
            that.businessshow(data);
          //} else {
            //that.errorbox = true;
            //that.error = "无结果";
          //}
        });
    },
    //处理每个订单的商品
    businessshow(data) {
      var data = data.data.data;
      for (let i = 0; i < data.length; i++) {
        data[i].createTime = moment(data[i].createTime).format(
          "YYYY-MM-DD hh:mm:ss"
        );
        data[i].servitem = [];
        var orderN = data[i].businessNo;
        //关于订单状态
        if (data[i].status == 1) {
          data[i].status = "等待买家付款";
        } else if (data[i].status == 4) {
          data[i].status = "已付款";
        }
        var that = this;
        that.ajax
          .post(
            "/xinda-api/service-order/grid",
            that.qs.stringify({
              businessNo: orderN
            })
          )
          .then(function(servdata) {
            //console.log("servicedata==", servdata);
            var servdata = servdata.data.data;
            for (var key in servdata) {
              // 关于订单时间
              servdata[key].createTime = moment(
                servdata[key].createTime
              ).format("YYYY-MM-DD hh:mm:ss");
              // 将服务订单信息添加到循环包里
              data[i].servitem.push(servdata[key]);
            }
          });
      }
      this.lists = data;
    },
    // 删除订单
    dele(id) {
      //this.promt = true;
      MessageBox.confirm("确定删除该订单吗?").then(
        action => {
          var that = this;
          this.ajax
            .post(
              "/xinda-api/business-order/del",
              this.qs.stringify({ id: id })
            )
            .then(function(data) {
              if (data.data.status === 1) {
                //location.reload();
                 that.getData();
              } else {
                
              }
            });
        },
        cancel => {}
      );
    },
    //付款
    payfor(code) {},
  }
};
</script>

<style lang="less" scoped>
// 大盒子
.box {
  width: 100%;
  margin: 0 auto;
  background: #f8f8f8;
}
// 订单部分
.aBody {
  font-size: 0.18rem;
  margin-top: 1rem;
  // height: 10rem;
  width: 100%;
  background: #f8f8f8;
  .order {
    width: 100%;
    margin-bottom: 0.28rem;
    // 顶部订单号
    > div:first-child {
      width: 100%;
      height: 0.72rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      p {
        font-size: 0.22rem;
      }
      p:first-child {
        margin-left: 0.16rem;
        color: #a3a3a3;
      }
      p:last-child {
        margin-right: 0.32rem;
      }
    }
    // 服务内容循环盒子
    .servbox {
      width: 100%;
      height: 2.62rem;
      background: #f8f8f8;
      // 公司名称
      > div:first-child {
        width: 100%;
        height: 0.46rem;
        line-height: 0.46rem;
        p {
          text-align: left;
          margin-left: 0.16rem;
          font-size: 0.3rem;
        }
      }
      // 服务订单主体
      > div:nth-child(2) {
        width: 100%;
        height: 2.17rem;
        display: flex;
        // 公司logo
        > div:first-child {
          width: 1.7rem;
          height: 2.17rem;
          margin: 0 0.15rem;
          text-align: center;
          img {
            width: 1.7rem;
            height: 1.7rem;
          }
        }
        // 订单详情
        > div:last-child {
          width: 73%;
          height: 2.17rem;
          display: flex;
          flex-direction: column;
          // 服务内容
          > p:first-child {
            font-size: 0.28rem;
            color: #000;
            text-align: left;
          }
          // 创建时间
          > p:nth-child(2) {
            font-size: 0.24rem;
            margin-top: 0.16rem;
            text-align: left;
          }
          // 数量和单价
          > div:last-child {
            display: flex;
            margin-top: 0.48rem;
            // 单价
            > p:first-child {
              font-size: 0.15rem;
              margin-right: 0.34rem;
              > span {
                font-size: 0.25rem;
                color: #fe1614;
                padding-right: 0.16rem;
              }
            }
            // 数量
            > p:last-child {
              font-size: 0.13rem;
              margin-top: 0.08rem;
              > span {
                font-size: 0.25rem;
                padding-left: 0.05rem;
              }
            }
          }
        }
      }
    }
    // 等待买家付款的底部
    .waitpay {
      width: 100%;
      height: 0.77rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      p {
        font-size: 0.24rem;
      }
      // 合计
      > p:first-child {
        margin-left: 0.2rem;
        span {
          color: #fd6766;
        }
      }
      // 删除订单
      > p:nth-child(2) {
        color: #fd6766;
        margin-left: 1.2rem;
      }
      // 付款按钮
      > button {
        width: 1.23rem;
        height: 0.48rem;
        background: #2693d4;
        color: #ebf4f9;
        font-size: 0.24rem;
        margin-right: 0.5rem;
      }
    }
    // 已付款的底部
    .payalready {
      width: 100%;
      height: 0.77rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      p {
        font-size: 0.24rem;
      }
      // 合计
      > p:first-child {
        margin-left: 0.2rem;
        span {
          color: #fd6766;
        }
      }
      // 交易完成
      > p:last-child {
        color: #5c5c5c;
        margin-right: 0.49rem;
      }
    }
  }
}
// div[lazy="loading"] {
//   width: 100%;
//   height: 3rem;
//   margin: auto;
// }
</style>

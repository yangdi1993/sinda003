<template>
  <div class="hello">
    <!-- 表头 -->
    <div class="title">
      <p class="titleTe">购物车内共有 <a>{{menCen.length}}</a> 件商品</p>
    </div>
    <div class="comDetDiv" v-for="(item,idx) in menCen" :key="item.id">
      <p class="comDetName">{{item.providerName}}</p>
      <ul class="comDetUl">
        <li class="comDetImg"><img :src="'http://115.182.107.203:8088/xinda/pic'+item.providerImg" alt=""></li>
        <li class="comDetTe">
          <a class="comDetPro">{{item.serviceName}}</a>
          <p class="comDetDel" @click="dele(item.serviceId)">删除订单</p>
          <a class="conPrice">￥{{item.unitPrice}}.00</a>
          <a class="purQua">购买数量：</a>
           <div class="numChan">
            <button class="numChanRed" @click="numChanRedBtn(item.serviceId,item.buyNum)">-</button>
            <input type="text" v-model="item.buyNum" readonly="readonly">
            <button class="numChanAdd" @click="numChanAddBtn(item.serviceId,item.buyNum)">+</button>
          </div>
         <a class="address">地区：{{'北京市-朝阳区'}}</a>
          </li>
      </ul>
    </div>
    <p class="totolPrice">
      共<a>{{toPriNum}}</a>件商品&nbsp;&nbsp;&nbsp;&nbsp;小计：<a>￥{{Totle}}.00</a>
    </p>
    <div class="setAcc">
      <div class="setAccLe">合计：<a>￥{{Totle}}.00</a></div>
      <button class="setAccGo" @click="setAccGoBtn">去结算</button>
    </div>
  </div>
</template>

<script>
import weChat from '../components/weChat';
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      // 数量
      numVal:1,
      // 数据
      menCen:[],
      idx:0,
      // 总数
      Totle:0,
      toPriNum:0,
    }
  },
  created(){
    // 数据获取
    this.gettingData();
  },
  methods:{
    //初始数据获取 
    gettingData(){
      var that = this;
      this.ajax.post('xinda-api/cart/list').then(function(data){
        var dataAll = data.data.data;
        that.menCen = dataAll;
        that.Totle = 0;
        for( var i in that.menCen){
          that.Totle += that.menCen[i].totalPrice;
        }
        that.Totle = that.Totle;
        that.toPriNum = dataAll.length;
      })
    },
    // 增加按钮
    numChanAddBtn(id,buyNum){
       var that=this;
       this.ajax.post('/xinda-api/cart/add',this.qs.stringify({id:id,num:1})).then(function(data){
         if (data.data.status === 1) {
            // 如果成功增加订单 刷新当前页面
            that.gettingData();
        } else {
            console.log("系统正在开小差中，请稍后重试");
        }
       })
    },
    // 减少按钮
    numChanRedBtn(id,buyNum){
      var that = this;
      if(buyNum-1>0){
        this.ajax.post('/xinda-api/cart/add',this.qs.stringify({id:id,num:-1})).then(function(data){
          if (data.data.status === 1) {
            // 如果成功减少订单 刷新当前页面
            that.gettingData();
          } else {
            console.log("系统正在开小差中，请稍后重试");
          }
        })
      }else{
        this.dele(id);
      }
    },
    // 删除按钮
    dele(id){
      MessageBox.confirm('确定删除该产品吗?').then(action => {
        var that = this;
        this.ajax.post('xinda-api/cart/del',this.qs.stringify({id : id})).then(function(data){
          if(data.data.status === 1){
            that.gettingData();
          } else{
            
          }
        });
      },cancel=>{
        
      })
    },
    // 去结算
    setAccGoBtn(){
      let instance = Toast('目前仅支持微信支付，请在微信浏览器中打开');
      setTimeout(() => {
        instance.close();
      }, 2000);
    },

  }
}
</script>

<style scoped lang='less'>
  .title{
    width: 7.5rem;
    height: 0.8rem;
    margin-top: 1rem;
    .titleTe{
      font-size: 0.29rem;
      color: #666666;
      line-height: 0.8rem;
      text-align: left;
      margin-left: 0.25rem;
      a{
        color: #fc4145;
      }
    }
  }
  .comDetDiv{
    width: 7.5rem;
    height: 2.5rem;
    background-color: #f6f6f6;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    .comDetName{
      font-size: 0.29rem;
      font-weight: bold;
      color: #333333;
      margin-top: 0.32rem;
      margin-left: 0.15rem;
      text-align: left;
    }
  }
  .comDetImg{
    width: 1.58rem;
    height: 1.21rem;
    margin-top: 0.17rem;
    margin-left: 0.13rem;
    float: left;
    border-right: 1px solid #ccc;
    img{
      width: 1.4rem;
    }
  }
  .comDetTe{
    float: left;
    width: 4.89rem;
    height: 1.21rem;
    margin-left: 0.29rem;
    margin-top: 0.17rem;
    position: relative;
    .comDetPro{
      font-size: 0.22rem;
      float: left;
      color: #333333;
      margin-left: 0.06rem;
      font-weight: bold;
    }
    .comDetDel{
      width: 1.34rem;
      height: 0.4rem;
      border: 1px solid #1356ff;
      border-radius: 0.06rem;
      line-height: 0.4rem;
      font-size: 0.17rem;
      color: #1356ff;
      position: absolute;
      left: 3.5rem;
      top: 0.1rem;
      cursor: pointer;
    }
    .conPrice{
      font-size: 0.25rem;
      color: #fb4145;
      font-weight: bold;
      position: absolute;
      top: 0.32rem;
      left: 0;
    }
    .purQua{
      font-size: 0.2rem;
      color: #666666;
      position: absolute;
      top: 0.7rem;
      left: 0.06rem;
    }
    .numChan{
      width: 1.5rem;
      height: 0.45rem;
      border: 1px solid #ccc;
      margin-top: 0.55rem;
      margin-left: 1.2rem;
      button{
        width: 0.45rem;
        height: 0.45rem;
        float: left;
        font-size: 0.4rem;
        line-height: 0.4rem;
      }
      input{
        float: left;
        width: 0.6rem;
        height: 0.25rem;
        text-align: center;
        padding-top: 0.1rem;
        font-size: 0.25rem;
      }
    }
    .address{
      font-size: 0.2rem;
      color: #666666;
      position: absolute;
      top: 1.1rem;
      left: 0.06rem;
    }
  }
  .comDetUl{
    list-style: none;
  }
  // 总计
.totolPrice{
  font-size: 0.23rem;
  color: #4c4c4c;
  text-align: right;
  margin-right: 0.5rem;
  margin-top: 0.1rem;
  margin-bottom: 3rem;
  a{
    font-size: 0.25rem;
    color: #fe2423;
  }
}
.setAcc{
  width: 7.5rem;
  height: 1.11rem;
  bottom: 0.868rem;
  position: fixed;
  .setAccLe{
    width: 4.90rem;
    height: 1.11rem;
    background-color: #e5e5e5;
    float: left;
    font-size: 0.29rem;
    color: #4d4d4d;
    line-height: 1.11rem;
    a{
      color: #fb2d2d;
      font-weight: bold;
    }
  }
  .setAccGo{
    width: 2.6rem;
    height: 1.11rem;
    background-color: #fb2d2d;
    float: left;
    font-size: 0.29rem;
    color: #fff;
    line-height: 1.11rem;
  }
}
</style>

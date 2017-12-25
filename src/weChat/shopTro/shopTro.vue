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
            <button class="numChanRed" @click="numChanRedBtn(idx)">-</button>
            <input type="text" v-model="item.buyNum">
            <button class="numChanAdd" @click="numChanAddBtn(item.serviceId,item.buyNum)">+</button>
          </div>
         <a class="address">地区：{{'北京市-朝阳区'}}</a>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import weChat from '../components/weChat';
export default {
  data () {
    return {
      // 数量
      numVal:1,
      // 数据
      menCen:[],
      idx:0
    }
  },
  created(){
    var that = this;
    this.ajax.post('xinda-api/cart/list').then(function(data){
      var dataAll = data.data.data;
      that.menCen = dataAll;
      // console.log(that.menCen);
      // console.log(dataAll[0].providerImg);
    })
  },
  methods:{
    // 增加按钮
    numChanAddBtn(id,buyNum){
       var thst=this;
       this.ajax.post('/xinda-api/cart/add',this.qs.stringify({id:id,num:1})).then(function(data){

       })
    },
    // 减少按钮
    numChanRedBtn(id,buyNum){
      var that = this;
      if(buyNum-1>0){
        this.ajax.post('',this.qs.stringify({id:id,num:-1})).then(function(data){
          console.log(111)
        })
      }else{
        this.dele(id);
      }
      
    },
    // 删除按钮
    dele(id){
      var that = this;
      this.ajax.post('xinda-api/cart/del',this.qs.stringify({id : id})).then(function(data){
        if (data.data.status === 1) {
            // 如果成功删除订单 刷新当前页面
            this.$router.go(0);
        } else {
            console.log("系统正在开小差中，请稍后重试");
        }

      })
    },
  }
}
</script>

<style scoped lang='less'>
  .title{
    width: 7.5rem;
    height: 0.8rem;
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
      height: 1.10;
    }
  }
  .comDetTe{
    float: left;
    width: 4.89rem;
    height: 1.21rem;
    margin-left: 0.09rem;
    margin-top: 0.17rem;
    position: relative;
    .comDetPro{
      font-size: 0.19rem;
      float: left;
      color: #333333;
      margin-top: 0.06rem;
      font-weight: bold;
    }
    .comDetDel{
      font-size: 0.17rem;
      color: #1356ff;
      position: absolute;
      left: 4rem;
      // float: left;
      top: 0.1rem;
      cursor: pointer;
    }
    .conPrice{
      // float: left;
      font-size: 0.17rem;
      color: #fb4145;
      // text-align: left;
      font-weight: bold;
      position: absolute;
      top: 0.4rem;
      left: 0;
    }
    .purQua{
      font-size: 0.13rem;
      color: #666666;
      // float: left;
      // text-align: left;
      // margin-top: 0.63rem;
      // margin-left: -3.78rem;
      position: absolute;
      top: 0.7rem;
      left: 0rem;
    }
    .numChan{
      width: 0.9rem;
      height: 0.25rem;
      border: 1px solid #ccc;
      margin-top: 0.65rem;
      margin-left: 0.8rem;
      button{
        width: 0.245rem;
        height: 0.26rem;
        float: left;
      }
      input{
        float: left;
        width: 0.4rem;
        height: 0.25rem;
        text-align: center;
      }
      .numChanAdd{
        
      }
      .numChanRed{

      }
    }
    .address{
      font-size: 0.14rem;
      color: #666666;
      // float: left;
      // text-align: left;
      position: absolute;
      top: 1rem;
      left: 0;
    }
  }
  .comDetUl{
    list-style: none;
  }
</style>

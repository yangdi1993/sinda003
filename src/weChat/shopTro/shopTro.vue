<template>
  <div class="hello">
    <!-- 表头 -->
    <div class="title">
      <p class="titleTe">购物车内共有 <a>{{2}}</a> 件商品</p>
    </div>
    <div class="comDetDiv" v-for="(item,idx) in menCen" :key="item.id">
      <p class="comDetName">{{'北京金萍无敌律师事务所'}}</p>
      <ul class="comDetUl">
        <li class="comDetImg"></li>
        <li class="comDetTe">
          <a class="comDetPro">{{'商标驳回复审'}}</a>
          <p class="comDetDel">删除订单</p>
          <a class="conPrice">￥{{'800.00'}}</a>
          <a class="purQua">购买数量：</a>
          <div class="numChan">
            <button class="numChanRed" @click="numChanRedBtn(idx)">-</button>
            <input type="text" v-model="numVal">
            <button class="numChanAdd" @click="numChanAddBtn(idx)">+</button>
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
      console.log(that.menCen);
    })
  },
  methods:{
    // 增加按钮
    numChanAddBtn(idx){
        this.numVal+=1;
      console.log(idx);
      // this.numVal=this.numVal;
    },
    numChanRedBtn(){
      if(this.numVal==1){
        this.numVal=1
      }else{
        this.numVal-=1;
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .title{
    width: 7.5rem;
    height: 0.8rem;
    background-color: yellow;
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
    border: 1px solid red;
    margin-top: 0.17rem;
    margin-left: 0.13rem;
    float: left;
  }
  .comDetTe{
    float: left;
    width: 4.89rem;
    height: 1.21rem;
    margin-left: 0.09rem;
    margin-top: 0.17rem;
    border: 1px solid red;
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
      margin-left: 1.96rem;
      float: left;
      margin-top: 0.1rem;
      cursor: pointer;
    }
    .conPrice{
      float: left;
      font-size: 0.17rem;
      color: #fb4145;
      margin-top: 0.33rem;
      margin-left: -3.8rem;
      text-align: left;
      font-weight: bold;
    }
    .purQua{
      font-size: 0.13rem;
      color: #666666;
      float: left;
      text-align: left;
      margin-top: 0.63rem;
      margin-left: -3.78rem;
    }
    .numChan{
      width: 0.9rem;
      height: 0.25rem;
      border: 1px solid #ccc;
      margin-top: 0.6rem;
      margin-left: 0.8rem;
      button{
        width: 0.25rem;
        height: 0.26rem;
        float: left;
      }
      input{
        float: left;
        width: 0.4rem;
        height: 0.25rem;
      }
      .numChanAdd{

      }
      .numChanRed{

      }
    }
    .address{
      font-size: 0.14rem;
      color: #666666;
      float: left;
      text-align: left;
      margin-top: 0.1rem;
      margin-left: 0;
    }
  }
  .comDetUl{
    list-style: none;
  }
</style>

<template>
  <div id="aaapp">
    <div class="memCenBg">
      <div class="memCenDiv">
        <!-- 左侧边栏 -->
        <ul class="memCenLe">
          <p class="homePer">首页/个人主页</p>
          <!-- 个人信息 -->
          <li class="perIma">
            <div class="headPor"></div>
            <p class="perPnoNum">13800138000</p>
          </li>
          <!-- 业务 -->
          <li class="perBus">
            <a href="#/inner/myOrder">
              <div class="perBusO">
                <div class="perBusOB"></div>
                <p>我的订单</p>
              </div>
            </a> 
            <a href="#/inner/userUnEvalu">
              <div class="perBusTw">
                <div class="perBusTwB"></div>
                <p>用户评价</p>
              </div>
            </a> 
            <a href="#/inner/accountSetting">
              <div class="perBusTh">
                <div class="perBusThB"></div>
                <p>账户设置</p>
              </div>
            </a> 
          </li>
        </ul>
        <!-- 右侧边栏 -->
        <div class="memCenRi">
          <div class="myOrderHead">
            <p>我的订单</p>
          </div>
          <!-- 搜索行 -->
          <div class="orderSearch">
            <p>订单号：</p>
            <input :class="{warnRed:colo==1}" v-on:focus="redBlur()" type="text" class="orSerIn" v-model="orSerInVal" placeholder="请输入订单号搜索">
            <input type="button" class="orSerBut" value="搜索" @click="orderSeaBtn()">
          </div>
          <!-- 时间行 -->
          <div class="timeSet">
            <p>创建时间：</p>
            <input class="timeStart" type="date"> 至 
            <input class="timeEnd" type="date">
          </div>
          <!-- 订单表头 -->
          <ul class="orderHead">
            <li class="comName">商品名称</li>
            <li>单价</li>
            <li>数量</li>
            <li>总金额</li>
            <li>订单状态</li>
            <li>订单操作</li>
          </ul>
          <!-- 订单插入 -->
          <div v-for="item in rDataSh" :key="item.id">
            <!-- 删除 弹出框 -->
              <!-- <div class="duihuakuang" v-show="isShow">
                <div class="confirmIma">
                  <p>信息</p>
                  <div class="close" @click="closeFun()">×</div>
                </div>
                <p class="confirm">确定删除该订单吗？</p>
                <button class="confirmYes" @click="conCloseFun(item.id)">确定</button>
                <button class="confirmNo" @click="canCliseFun()">取消</button>
              </div> -->
              <!-- 订单插入 -->
              <table class="orderInTa" id="myorderInTa" v-show="searchShow">
                <tr class="orderInTh">
                  <th class="orderInThTdO" colspan="2">
                    <input type="checkbox">
                    订单号：{{item.businessNo}}
                  </th>
                  <th class="orderInThTdTw" colspan="5">
                    <span>
                    下单时间：{{item.createTime}}</span>
                    </th>
                    <div class="orderInTrTdSe">
                      <a href="#/inner/paypage"><input type="button" @click="toPay(list.businessNo)"  value="付款"></a>
                      <p class="delOr" @click="conCloseFun(item.id)">删除订单</p>
                    </div>
                </tr>
                <tr class="orderInTr" v-for="list in item.servitem" :key="list.servitem">
                  <td class="orderInTrTdO"></td>
                  <td class="orderInTrTdTw">
                    <p>{{list.providerName}}</p>
                    <p>{{list.serviceName}}</p>
                  </td>
                  <td class="orderInTrTdTh">￥{{list.unitPrice}}.00</td>
                  <td class="orderInTrTdFo">{{list.buyNum}}</td>
                  <td class="orderInTrTdFi">￥{{list.totalPrice}}.00</td>
                  <td class="orderInTrTdSi">{{item.status}}</td>
                </tr>
                  
              </table>  
          </div>
          <!-- 翻页 -->
          <div class="pageTurn">
            <button class="prePage" @click="prePageBtn()" v-bind:disabled="preDis">上一页</button>
            <button :class="{blued:index==pageChange}" class="pageNum" v-for="(pageO,index) in pageOAll" :key="pageO.id" @click="cliPaNo(index)">{{pageO}}</button>
            <button class="nextPage" @click="nextPageBtn()" v-bind:disabled="nextDis">下一页</button>
            <div class="toPageDiv">共{{toPage}}页</div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// 引进头部和尾部
// this.ajax.post("").then(data=>{
  var moment = require('moment');
import ihead from '../components/ihead';
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return{
      // 当前页改变颜色
      pageChange:-1,
      // 当前页
      index:0,
      // 全部数据
      rData:[],
      // 当前页要显示的数据
      rDataSh:[],
      // 弹出框
      isShow:false,
      // 搜索
      orSerInVal:"",
      // 搜索数据
      searchShow:true,
      // 订单编号
      businessNo:'',
      // 共几页
      toPage:"",
      // 页数
      pageOAll:[],
      // 上一页
      preDis:false,
      // 下一页
      nextDis:false,
      //  搜索为空变色
      colo:0,
      // // 删除
      // delOrder:''
      servitem:[],
    }
  },
  created(){
    this.getData();
  },
  methods:{
    // 点击删除弹出框
    // delOrder:function(){
    //   this.isShow = true;
    // },
    // 点击X弹出框消失
    // closeFun:function(){
    //   this.isShow = false;
    // },
    // 
    getData(start,limit){
      var that=this;
      that.ajax.post('/xinda-api/business-order/grid',that.qs.stringify({
          start:start,
          limit:limit,
      })).then(function(data){
        var dataAll = data.data.data
        // console.log(dataAll);
        for( var key in dataAll){
          dataAll[key].createTime=moment(dataAll[key].createTime).format('YYYY-MM-DD hh:mm:ss');
        }
          if(dataAll&&dataAll.length){
              that.businessshow(data);
          }else{
              that.errorbox=true;
              that.error='无结果';
          }
      })
    },
    // 处理获取数据
    businessshow(data){
      var data=data.data.data;
      // console.log(data);
      for(let i=0;i<data.length;i++){
          data[i].servitem=[];
          var orderN=data[i].businessNo;
          //关于订单状态
          if(data[i].status==1){
              data[i].status='等待买家付款';
          }else if(data[i].status==4){
              data[i].status='已付款';
          }
          var that=this;
          that.ajax.post('/xinda-api/service-order/grid',that.qs.stringify({
              businessNo:orderN,
          })).then(function(servdata){
            var servdata=servdata.data.data;
              
              for(var key in servdata){
                // 关于订单时间
                // 将服务订单信息添加到循环包里  
                data[i].servitem.push(servdata[key]);
              }
          })
      }
      this.rData=data;
      // console.log(data.length);
      // console.log(this.rData);
      var bb = this.rData.length<3?this.rData.length:3;
      for(var i=0;i<bb;i++){
        that.rDataSh.push(this.rData[i]);
      }
      // 总页数
      var totolPage = Math.ceil(this.rData.length/3);
      that.toPage = totolPage;
      // 页数判断
      for(var i=0;i<totolPage;i++){
        that.pageOAll.push(i+1);
      }
    },

    // 删除
    conCloseFun(id){
        MessageBox.confirm('确定删除该产品吗?').then(action => {
        var that = this;
        this.ajax.post('xinda-api/ business-order/del',this.qs.stringify({id : id})).then(function(data){
          if(data.data.status === 1){
            location.reload();
          } else{
          }
        });
      },cancel=>{
        
      })
    }, 
    // 点击取消
    // canCliseFun:function(index){
    //   this.isShow = false;
    // },
    
    // 订单搜索
    orderSeaBtn:function(){
      // 清空页面要渲染的数据
      if(this.orSerInVal==''){
        // this.orSerInVal
        this.colo=1;
      }else{
        console.log('111');
        this.rDataSh =[];
        for(var i=0;i<this.rData.length;i++){
          var ordLiNa = this.rData[i].businessNo;
          console.log(ordLiNa);
          if(ordLiNa==this.orSerInVal){
            // 把符合条件的数据添加到[]里面
            this.rDataSh.push(this.rData[i]);
          }
          else{

          }
        } 
      }  
    },
    // 搜索框失去颜色
    redBlur(){
      this.colo=0
    },
    // 下一页
    nextPageBtn(){
      this.preDis = false;
      // 最后一页按钮不可点击
      if(this.toPage==this.index+1||this.toPage==0){
        this.nextDis=true;
      }else{
        this.rDataSh=[];
        var aa = this.rData.length-(this.index+1)*3;
        var nn = this.toPage-(this.index+1)
        if(nn>1){
          for(var i=(this.index+1)*3;i<(this.index+1)*3+3;i++){
            this.rDataSh.push(this.rData[i]);
          }
          this.index += 1;
          this.pageChange=this.index;
        }else{
            if(aa==1){
              for(var i=(this.index+1)*3;i<(this.index+1)*3+1;i++){
                this.rDataSh.push(this.rData[i]);
              }
            }else if(aa==2){
              for(var i=(this.index+1)*3;i<(this.index+1)*3+2;i++){
                this.rDataSh.push(this.rData[i]);
              }
            }else if(aa==3){
              for(var i=(this.index+1)*3;i<(this.index+1)+3;i++){
                this.rDataSh.push(this.rData[i]);
              }
            }   
        this.index += 1;
        this.pageChange=this.index;
        }
      }
    },
    // 点击页
    cliPaNo(index){
      this.pageChange=index;
      this.rDataSh=[];
      this.nextDis=false;
      this.preDis = false;
      var aa = this.rData.length-index*3;
      if(this.toPage!=index+1){
        for(var i=index*3;i<index*3+3;i++){
          this.rDataSh.push(this.rData[i]);
        }
      }else{
          if(aa==1){
            for(var i=index*3;i<index*3+1;i++){
              this.rDataSh.push(this.rData[i]);
            }
          }else if(aa==2){
            for(var i=index*3;i<index*3+2;i++){
              this.rDataSh.push(this.rData[i]);
            }
          }else if(aa==3){
            for(var i=index*3;i<index*3+3;i++){
              this.rDataSh.push(this.rData[i]);
            }
          }
      } 
    },
    // 上一页
    prePageBtn(){
      // 第一页按钮不可点击
      this.nextDis=false;
      if(this.index==0){
        this.preDis = true;
        this.pageChange=this.index;
      }else{
        this.rDataSh=[];
      if(this.index<=0){
        for(var i=0;i<3;i++){
          this.rDataSh.push(this.rData[i]);
        }
      }else{
        for(var i=(this.index-1)*3;i<(this.index-1)*3+3;i++){
          this.rDataSh.push(this.rData[i]);
        }
      }
      this.index -= 1;
      this.pageChange=this.index;
      }
    },
    // 付款
    toPay(){
      var that = this;
      this.ajax.post("xinda-api/business-order/grid").then(function(data) {
        that.$router.push({
          path: "/inner/paypage",
          query: { id: data.data.data.businessNo }
        });
      });    
    }
  }
}
</script>

<style scoped lang="less">
.mint-msgbox-wrapper .mint-msgbox {
  width: 25%!important;
}
// 删除弹出框
.duihuakuang{
  width: 350px;
  height: 200px;
  background-color: #fff;
  position: fixed;
  top: 190px;
  left: 598px;
  border: 1px solid #3f3f3f;
  .confirmIma{
    width: 350px;
    height: 50px;
    background-color: #e8e8e8;
    border-bottom: 1px solid #3f3f3f;
     overflow: hidden;
    p{
      font-size: 18px;
      font-weight: bold;
      color: #3d3d3d;
      margin-left: 10px;
      margin-top: 15px;
      float: left;
    }
    .close{
      width: 50px;
      height: 50px;
      background-color: #e8e8e8;
      float: left;
      margin-left: 300px;
      margin-top: -36px;
      color: #222;
      font-size: 20px;
      text-align: center;
      line-height: 50px;
    }
    .close:hover{
      background-color: #999;
      color: #e8e8e8;
    }
  }
}
.confirm{
  font-size: 18px;
  color: #3f3f3f;
  margin-top: 30px;
}
.confirmYes{
  width: 100px;
  height: 40px;
  border: 1px solid #3f3f3f;
  border-radius: 3px;
  margin-top: 40px;
  outline: 0;
  cursor: pointer;
  background-color: #2693d4;
  color: #fff;
}
.confirmNo{
  width: 100px;
  height: 40px;
  border: 1px solid #3f3f3f;
  border-radius: 3px;
  margin-top: 40px;
  outline: 0;
  cursor: pointer;
  background-color: #fff;
}
// 固定最小宽度
// @media all and (min-width:1200px){
 .memCenBg{
    width: 100%;
    height: 786px;
    margin-bottom: 400px;
    .memCenDiv{
      width: 1200px;
      height: 786px;
      margin: 0 auto;
      .memCenLe{
        width: 240px;
        height: 786px;
        float: left;
        list-style: none;
      }
      .memCenRi{
        width: 934px;
        height: 786px;
        float: left;
        margin-left: 26px;
      }
    }
  }
  .homePer{
    font-size: 13px;
    color: #2a2a2a;
    margin-top: 26px;
    margin-left: -100px;
  }
  .perIma{
    width: 100%;
    height: 140px;
    margin-top: 13px;
    background-color: #e9e9e9;
    overflow: hidden;
    // 头像
    .headPor{
      margin: 9px auto;
      width: 96px;
      height: 96px;
      background: url(../images/memCen.png) -14px -12px no-repeat;
    }
    .perPnoNum{
      font-size: 16px;
      color: #000000;
    }
  }
  // 左侧边栏下栏样式
  .perBus{
    width: 100%;
    height: 377px;
    background-color: #f7f7f7;
    margin-top: 9px;
  }
  .perBus>a>div{
    overflow: hidden;
    cursor: pointer;
  }
  .perBus>a>div:hover{
    background-color: #e9e9e9;
  }
 .perBus>a>div>div{
    width: 27px;
    height: 25px;
    margin-left: 56px;
    margin-top: 14px;
    float: left;
 }
 .perBus>a>div>p{
    font-size: 16px;
    color: #000000;
    margin-left: 13px;
    float: left;
    line-height: 50px;
 }
 .perBusO{
   background-color: #e9e9e9;
 }
 .perBusTh{
   background-color: #f7f7f7;
 }
//  左边栏小背景
 .perBusOB{
   background: url(../images/memCen.png) -25px -126px no-repeat;
 }
 .perBusTwB{
   background: url(../images/memCen.png) -25px -159px no-repeat;
 }
 .perBusThB{
   background: url(../images/memCen.png) -25px -190px no-repeat;
 }
 .myOrderHead{
   width: 934px;
   height: 30px;
   margin-top: 60px;
   margin-left: 0;
   border-bottom: 1px solid #e9e9e9;
   p{
     width: 80px;
     font-size: 14px;
     font-weight: bold;
     color: #3e9bd6;
     margin-left: 10px;
     padding: 7px 27px;
     border-bottom: 2px solid #3e9bd6;
   }
 }
//  订单搜索
  .orderSearch{
    width: 934px;
    height: 25px;
    margin-top: 23px;
    p{
      width: 80px;
      font-size: 14px;
      color: #242424;
      margin-left: 0;
      line-height: 25px;
      float: left;
    }
    // 搜索框
    .orSerIn{
      width: 265px;
      height: 25px;
      margin-left: 15px;
      outline: 0;
      float: left;
      border: 1px solid #b0b0b0;
    }
    .warnRed::-webkit-input-placeholder{
      color: red;
    }
    // 搜索按钮
    .orSerBut{
      width: 70px;
      height: 25px;
      margin-left: -480px;
      border-radius: 3px;
      background-color: #fff;
      border: 1px solid #2494d3;
      font-size: 14px;
      color: #3d9bd8;
      outline: 0;
    }
    .orSerBut:hover{
      cursor: pointer;
    }
  }
  // 时间框
 .timeSet{
    width: 934px;
    height: 25px;
    margin-top: 20px;
    font-size: 14px;
    color: #242424;
    p{
      width: 80px;
      font-size: 14px;
      color: #242424;
      margin-left: 7px;
      line-height: 25px;
      float: left;
    }
    .timeStart{
      width: 120px;
      height: 25px;
      outline: 0;
      margin-left: -565px;
      border: 1px solid #b0b0b0;
    }
    .timeEnd{
      width: 120px;
      height: 25px;
      outline: 0;
      border: 1px solid #b0b0b0;
      // margin-left: -10px;
    }
 }
//  订单表头
 .orderHead{
   width: 934px;
   height: 34px;
   margin-top: 20px;
   margin-left: 0;
   border-top: 1px solid #b0b0b0;
   background-color: #f7f7f7;
   display: flex;
   list-style: none;
   line-height: 34px;
   font-size: 12px;
   color: #3f3f3f;
   font-weight: bold;
   li{
     margin-left: 85px;
   }
   .comName{
     margin-left: 38px;
     margin-right: 185px;
   }
 }
//  .orderInsert{
//    width: 934px;
//    height: 356px;
//    margin-top: 12px;
//    background-color: pink;
//    position: relative;
//  }
 .pageTurn{
   height: 36px;
   margin-top: 37px;
   font-size: 14px;
   color: #cccccc;
   line-height: 36px;
   display: inline-block;
   text-align: center;
   .prePage{
     width: 68px;
     height: 36px;
     background-color: #fff;
     border: 1px solid #cccccc;
     float: left;
     margin-right: 6px;
     outline: 0;
     cursor: pointer;
   }
   .pageNum{
     width: 30px;
     height: 36px;
     background-color: #fff;
     border: 1px solid #cccccc;
     float: left;
     margin-left: 6px;
     margin-right: 6px;
     outline: 0;
     cursor: pointer;
   }
  //  翻页点击改变颜色
   .blued{
     color: blue;
     border: 1px solid blue;
     box-shadow: 0 0 0.5px 0.5px blue;
     
   }
   .nextPage{
     width: 68px;
     height: 36px;
     background-color: #fff;
     border: 1px solid #cccccc;
     float: left;
     margin-left: 6px;
     margin-right: 6px;
     outline: 0;
     cursor: pointer;
   }
   .toPageDiv{
     width: 68px;
     height: 34px;
     background-color: #fff;
     border: 1px solid #ccc;
     color: #111;
     float: left;
     margin-left: 6px;
     margin-right: 6px;
     outline: 0;
   }
 }
// 翻页 

// }
// 订单插入
.orderInTa{
  width: 935px;
  height: 108px;
  margin-top: 10px;
  border: 1px solid #e8e8e8;
  .orderInTh{
    width: 935px;
    height: 37px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #e8e8e8;
    .orderInThTdO{
      width: 193px;
      height: 37px;
      font-size: 14px;
      color: #616161;
      margin-left: -10px;
      input{
        margin-left: -50px;
        outline: 0;
      }
    }
    .orderInThTdTw{
      width: 222px;
      height: 37px;
      font-size: 14px;
      color: #616161;
      margin-left: -10px;
      span{
        margin-left: -270px;
      }
    }
  }
  .orderInTr{
    width: 933px;
    height: 68px;
    .orderInTrTdO{
      width: 70px;
      height: 68px;
      background: url(../images/memCen.png) no-repeat -15px -260px;
      border-bottom: 1px solid #e8e8e8;
    }
    .orderInTrTdTw{
      width: 238px;
      height: 68px;
      font-size: 16px;
      color: #656565;
      text-align: left;
      border-bottom: 1px solid #e8e8e8;
    }
    .orderInTrTdTh{
      width: 129px;
      height: 68px;
      font-size: 16px;
      color: #656565;
      border-bottom: 1px solid #e8e8e8;
    }
    .orderInTrTdFo{
      width: 95px;
      height: 68px;
      font-size: 16px;
      color: #656565;
      border-right: 1px solid #e8e8e8;
      border-bottom: 1px solid #e8e8e8;
    }
    .orderInTrTdFi{
      width: 139px;
      height: 68px;
      border-right: 1px solid #e8e8e8;
      font-size: 12px;
      font-size: 16px;
      color: #2793d3;
      border-bottom: 1px solid #e8e8e8;
    }
    .orderInTrTdSi{
      width: 143px;
      height: 68px;
      border-right: 1px solid #e8e8e8;
      font-size: 14px;
      color: #2793d3;
      border-bottom: 1px solid #e8e8e8;
    }
    
  }
}
.orderInTrTdSe{
      width: 118px;
      height: 39px;
      border-bottom: 1px solid #e8e8e8;
      line-height: 39px;
      input{
        width: 56px;
        height: 23px;
        background-color: #2793d3;
        color: #fff;
        font-size: 14px;
        border-radius: 3px;
        outline: 0;
        cursor: pointer;
      }
      p{
        font-size: 14px;
        color: #ff4747;
        margin-top: 9px;
        cursor: pointer;
      }
    }
// 未找到相应订单
.unFindOr{
  width: 200px;
  height: 50px;
  font-size: 20px;
  border: 2px solid red;
  line-height: 50px;
  position: absolute;
  margin-top: 100px;
  margin-left: 368px;
}

</style>



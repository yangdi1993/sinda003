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
            <input type="text" class="orSerIn" v-model="orSerInVal" placeholder="请输入订单号搜索">
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
              <div class="duihuakuang" v-show="isShow">
                <div class="confirmIma">
                  <p>信息</p>
                  <div class="close" @click="closeFun()">×</div>
                </div>
                <p class="confirm">确定删除该订单吗？</p>
                <button class="confirmYes" @click="conCloseFun(item.id)">确定</button>
                <button class="confirmNo" @click="canCliseFun()">取消</button>
              </div>
              <!-- 订单插入 -->
              <table class="orderInTa" id="myorderInTa" v-show="searchShow">
                <tr class="orderInTh">
                  <th class="orderInThTdO" colspan="2">
                    <input type="checkbox" v-model="businessNo">
                    订单号：{{item.businessNo}}
                  </th>
                  <th class="orderInThTdTw" colspan="5">
                    <span></span>
                    下单时间：{{item.createTime}}</th>
                </tr>
                <tr class="orderInTr">
                  <td class="orderInTrTdO"></td>
                  <td class="orderInTrTdTw">
                    <p>信达北京服务中心</p>
                    <p>代理记账（1）</p>
                  </td>
                  <td class="orderInTrTdTh">{{item.totalPrice}}</td>
                  <td class="orderInTrTdFo">{{item.status}}</td>
                  <td class="orderInTrTdFi">{{item.totalPrice}}</td>
                  <td class="orderInTrTdSi">{{item.name8}}</td>
                  <td class="orderInTrTdSe">
                    <a href="#/inner/paypage"><input type="button" @click="toPay()"  value="付款"></a>
                    <p class="delOr" v-on:click="delOrder(item.id)">删除订单</p>
                  </td>
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
//       console.log('');
import ihead from '../components/ihead'
import getData from '../homepage/public'
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
      // 要删除的订单号
     
    }
  },
  created(){
    // 我的订单接口数据
    var that = this;
    this.ajax.post('xinda-api/business-order/grid').then(function(data){
      var dataAll = data.data.data;
      for(var i = 0;i<dataAll.length;i++){
        // 获取创建时间
        var dd = dataAll[i].createTime;
        // 转换格式
        var now = new Date(dd);
        var year=now.getFullYear(); 
        var month=now.getMonth()+1; 
        var date=now.getDate(); 
        var hour=now.getHours(); 
        var minute=now.getMinutes(); 
        var second=now.getSeconds(); 
        // 新的时间格式
        var newTime= year+"年"+month+"月"+date+"日"+hour+":"+minute+":"+second;           
        // 将原对象里面的时间格式替换掉
        dataAll[i].createTime = newTime;
        //  改变格式后加到总数组
        that.rData = dataAll;
      }
    //  第一页显示
    var bb = dataAll.length<3?dataAll.length:3;
    for(var i=0;i<bb;i++){
      that.rDataSh.push(dataAll[i]);
    }
      // 总页数
      var totolPage = Math.ceil(dataAll.length/3);
      that.toPage = totolPage;
      // 页数判断
      for(var i=0;i<totolPage;i++){
        that.pageOAll.push(i+1);
      }
    })
  },
  methods:{
    // 点击删除弹出框
    delOrder:function(code){
      this.isShow = true;
      console.log('111',code)
    },
    // 点击X弹出框消失
    closeFun:function(){
      this.isShow = false;
    },
    // 点击确定
    conCloseFun:function(code){
      this.isShow = false;
      console.log(code);
      // this.rDataSh.splice(this.index,1)
        // var that = this;
        this.ajax.post('xinda-api/ business-order/del',this.qs.stringify({
          id:code,
        })).then(function(data){
          console.log(data.data.data)
          
        })

    },
    // 点击取消
    canCliseFun:function(index){
      this.isShow = false;
    },
    
    // 订单搜索
    orderSeaBtn:function(){
      // 清空页面要渲染的数据
      this.rDataSh = [];
      for(var i=0;i<this.rData.length;i++){
        var ordLiNa = this.rData[i].businessNo;
        if(ordLiNa==this.orSerInVal||this.orSerInVal==''){
          // 把符合条件的数据添加到[]里面
          this.rDataSh.push(this.rData[i]);
        }
        else{

        }
      }  
    },
    
    // 下一页
    nextPageBtn(){
      
      this.preDis = false;
      // 最后一页按钮不可点击
      if(this.toPage==this.index+1||this.toPage==0){
        this.nextDis=true;
        // console.log(111);
      }else{
        // console.log(222);
        this.rDataSh=[];
        var aa = this.rData.length-(this.index+1)*3;
        var nn = this.toPage-(this.index+1)
        if(nn>1){
          for(var i=(this.index+1)*3;i<(this.index+1)*3+3;i++){
            this.rDataSh.push(this.rData[i]);
          }
          this.index += 1;
          // console.log(333);
        }else{
          // console.log(444);
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
        
        }
      }
      console.log(this.index)
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
      this.index = index;
    },
    // 上一页
    prePageBtn(){
      // 第一页按钮不可点击
      this.nextDis=false;
      if(this.index==0){
        this.preDis = true;
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
   
   .prePage{
     width: 68px;
     height: 36px;
     background-color: #fff;
     border: 1px solid #cccccc;
     float: left;
     margin-left: 370px;
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
        margin-left: -365px;
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
    }
    .orderInTrTdTw{
      width: 238px;
      height: 68px;
      font-size: 16px;
      color: #656565;
      text-align: left;
    }
    .orderInTrTdTh{
      width: 129px;
      height: 68px;
      font-size: 16px;
      color: #656565;
    }
    .orderInTrTdFo{
      width: 95px;
      height: 68px;
      font-size: 16px;
      color: #656565;
      border-right: 1px solid #e8e8e8;
    }
    .orderInTrTdFi{
      width: 139px;
      height: 68px;
      border-right: 1px solid #e8e8e8;
      font-size: 12px;
      font-size: 16px;
      color: #656565;
    }
    .orderInTrTdSi{
      width: 143px;
      height: 68px;
      border-right: 1px solid #e8e8e8;
      font-size: 12px;
      color: #2393d5;
    }
    .orderInTrTdSe{
      width: 118px;
      height: 68px;
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



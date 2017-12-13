<template>
  <div class="listbody">
    <div class="leftlist"> <!-- 列表页主体 -->
      <p class="listtop">首页/公司工商</p>
      <div class="listhead">    <!-- 靠上的部分 -->
        <div class="typeclass">
          <p>服务分类</p>
          <div >
            <span :class="{bluebg:index==showclass}" v-for="(obj,key,index) in objs" :key="obj.id" @click="typeclasses(index)">{{obj.name}}</span>
          </div>
        </div>
        <div class="typekind">
          <p>类型</p>
          <div>
            <span :class="{bluebg:index==showkind}" v-for="(innerobj,key,index) in innerobjs" :key="innerobj.id" @click="typekinds(index)">{{innerobj.name}}</span>
          </div>
        </div>
        <div class="typearea">
          <p>服务区域</p>
        </div>
      </div>
      <div class="listmenu">   <!-- 靠下的部分 -->
        <div class="menutop">
          <span>综合排序<span></span></span>
          <span>价格↑↑<span></span></span>
        </div>
        <div class="menuhead">
          <span>商品</span>
          <span>价格</span>
        </div>
        <div class="menuinner" v-for="(listobj,key,index) in listobjsA" :key="listobj.providerName">
          <span class="bgimg"><img :src="'http://115.182.107.203:8088/xinda/pic'+listobj.productImg" @error="errorimg()" alt=""></span>
          <div class="innertext">
            <p class="innertitle">{{listobj.providerName}}</p>
            <p class="innermore">{{listobj.serviceInfo}}</p>
            <p class="innermore"><span>{{listobj.serviceName}}</span><span>{{listobj.regionName}}</span></p>
          </div>
          <div class="innerpay">
            <p>￥ {{listobj.marketPrice}}.00</p>
            <div>
              <a href="#/inner/Alipay" class="buynow">立即购买</a>
              <a href="javascript:void(0)">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
      <div class="btnpage"> <!-- 翻页器 -->
        <button class="pravicepage" @click="praverpage">上一页</button>
        <button :class="{bluebd:index==showborder}" v-for="(page,key,index) in pagecount" :key="page.id" class="pagenum" @click="choosepage(index)">{{page}}</button>
        <button class="nextpage" @click="nexpage">下一页</button>
      </div>
    </div>
    <div class="rightlist"> <!-- 右边带图的那几个 -->

    </div>
  </div>
</template>

<script>
import getData from './public'
export default {
  data () {
    return {
      objs:[],
      innerobjs:[],
      showclass:0,
      showkind:0,
      listobjs:[],
      listobjsA:[],
      totle:0,
      showborder:0,
      pagecount:[],  //总页数对象
      changepage:0,  //点击之后选择的页数
    }
  },
  methods:{
    typeclasses(index){
      // console.log(this.objs[index].itemList)
      this.innerobjs=this.objs[index].itemList
      this.showclass=index
    },
    typekinds(index){
      this.showkind=index
    },
    errorimg(){ //图片路径错误时报错事件 

    },

    praverpage(){ //上一页
      // this.changepage+=1
      this.changepage<=0?this.changepage:this.changepage-=1
      getData(this.listobjsA,this.changepage)
    },
    nexpage(){  //下一页
      // this.changepage-=1
      this.changepage>=this.totle-1?this.changepage:this.changepage+=1;
      getData(this.listobjsA,this.changepage)
    },
    choosepage(index){  //点击页数
      this.changepage=index
      this.showborder=index
      getData(this.listobjsA,this.changepage)
      console.log(this.listobjsA)
    }
  },
  created(){
    var that = this;
    var objs={};
    var x=0;
    this.ajax.post('xinda-api/product/style/list').then(function(data){
      var rData=data.data.data
      // console.log(rData);
      for(var i in rData){ //获取所有二级内容，并且合并到一个对象里
        var n = rData[i].itemList
        // console.log(n)
        for(var j in n){
          objs[x]=n[j]
          // console.log(n[j])
          x++
        }
      }
      that.objs=objs
      // console.log(objs)
      that.innerobjs=objs[0].itemList
    });
      this.ajax.post('xinda-api/product/package/grid',this.qs.stringify({
      start:0,
      limit:3,
      productTypeCode: "1",
      // providerId: "8a82f52b674543e298d2e5f685946e6e",
      sort:2,
    })).then(function(data){
      // console.log(123)
      var rData=data.data.data
      var totle=Math.ceil(data.data.totalCount/3)   //总页数
      console.log(data.data)
      var pagecount={}  //翻页器的对象
      for(var i=0;i<totle;i++){
        pagecount[i]=i+1
      }
      that.totle=totle  //总页数
      that.pagecount=pagecount  //总页数对象
      // that.listobjs=rData   //数据
    })
    getData(this.listobjsA,this.changepage)
  }
}
</script>

<style scoped lang="less">
*{margin:0;padding:0;clear:both;}
.bluebg{
  background: #2693d4;
  color: #fff;
}
.bluebd{
  color: #2693d4;
  border: 1px solid #2693d4;
}
.listbody{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .leftlist{
    width: 950px;
  }
  .rightlist{
    width: 238px;
    height: 700px;
    margin-top: 46px;
  }
}
.listtop{
  height: 20px;
  font-size: 13px;
  color: #696969;
  margin-top: 25px;
  text-align: left;
}
.listhead{
  height: 160px;
  background: #f7f7f7;
  border: 1px solid #ccc;
  .typeclass{
    height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .typekind{
    height: 80px;
    border-bottom: 1px solid #ccc;
  }
  .typearea{
    height: 40px;
  }
  >div{
    display: flex;
    p{
      width: 100px;
      border-right: 1px solid #ccc;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
    }
    >div{
      height: 100%;
      max-width: 845px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      color: #3c3c3c;
      span{       //服务分类、类型各个选项样式
        font-size: 14px;
        padding: 6px;
        border-radius: 4px;
        margin-left: 7px;
      }
      span:hover{
        color: #fff;
        background: #2693d4;
      }
    }
  }
}
.listmenu{
  width: 100%;
  // height: 461px;
  border: 1px solid #ccc;
  margin-top: 25px;
  .menutop{
    width: 100%;
    height: 41px;
    border-bottom: 1px solid #ccc;
    text-align: left;
    >span{
      width: 107px;
      height: 100%;
      font-size: 14px;
      color: #636363;
      // background: #2693d4;
      text-align: center;
      line-height: 41px;
      display: inline-block;
      position: relative;
      span{
        width: 10px;
        height: 10px;
        display: block;
        clip-path: polygon(0% 50%, 50% 100%, 100% 50%);
        background: #2693d4;
        position: absolute;
        left: 50px;
        top: 36px;
      }
    }
  }
  .menuhead{
    width: 934px;
    height: 50px;
    margin: 0 auto;
    text-align: left;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    span{
      width: 100px;
      height: 100%;
      font-size: 14px;
      color: #636363;
      text-align: center;
      line-height: 50px;
    }
  }
  .menuinner{
    width: 934px;
    height: 100px;
    margin: 0 auto;
    text-align: left;
    padding: 11px 0;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    .bgimg{
      width: 98px;
      height: 98px;
      display: block;
      border: 1px solid #ccc;
      background: url(../images/homepage/errorimg.png) 100% 100% no-repeat;
      background-position: 22px 20px;
      img{
      width: 98px;
      height: 98px;
      }
    }
    .innertext{
      width: 500px;
      padding: 5px 12px;
      font-family: '黑体';
      // margin-left: 12px;
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      p{
        width: 100%;
      }
      .innertitle{
        font-size: 16px;
        color: #000;
      }
      .innermore{
        font-size: 14px;
        color: #676767;
        span:nth-child(1){
          margin-right: 70px;
        }
      }
    }
    .innerpay{
      width: 300px;
      margin-left: 14px;
      text-align: right;
      p{
        font-size: 30px;
        color: #f00;
        margin-right: 40px;
        margin-top: 10px;
      }
      a{
        width: 89px;
        height: 29px;
        font-size: 14px;
        color: #fff;
        text-decoration: none;
        background: #2693d4;
        line-height: 29px;
        text-align: center;
        letter-spacing: 1px;
        border-radius: 4px;
        margin-right: 11px;
        display: inline-block;
        margin-top: 25px;
      }
    }
  }
}

//翻页按钮的公共样式

.btnpage{
  margin: 29px 0 202px;
  button{
  height: 34px;
  font-size: 13px;
  color: #aaa;
  line-height: 34px;
  text-align: center;
  border: 1px solid #ccc;
  margin: 0 3px;
  background: #fff;
  cursor: pointer;
  }
}
.pravicepage{//下一页与上一页
  width: 66px;
}
.nextpage{
  width: 66px;
}
.pagenum{   //翻页器的页数
  width: 38px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


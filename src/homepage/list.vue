<template>
  <div class="listbody">
    <div class="leftlist"> <!-- 列表页主体 -->
      <p class="listtop">首页/公司工商</p>
      <div class="listhead">    <!-- 靠上的部分 -->
        <div class="typeclass">
          <p>服务分类</p>
          <div >
            <span :class="{bluebg:index==showclass}" v-for="(obj,key,index) in objs" :key="obj.id" @click="typeclasses(index,key)">{{obj.name}}</span>
          </div>
        </div>
        <div class="typekind">
          <p>类型</p>
          <div>
            <span :class="{bluebg:index==showkind}" v-for="(innerobj,key,index) in innerobjs" :key="innerobj.id" @click="typekinds(index,key)">{{innerobj.name}}</span>
          </div>
        </div>
        <div class="typearea">
          <p>服务区域</p>
          <div class="adress">
            <select  @change="proChange" v-model="province">
              <option value="0">省</option>
              <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
            </select>
            <select  @change="cityChange" v-model="city">
              <option value="0">市</option>
              <option :value="code" v-for="(city,code) in citys" :key="city.code">{{city}}</option>
            </select>
            <select>
              <option value="0">区</option>
              <option :value="code" v-for="(area,code) in areas" :key="area.code">{{area}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="listmenu">   <!-- 靠下的部分 -->
        <div class="menutop">
          <span @click="zonghe" :class="{bluebg:1==autopaixu}">综合排序<span v-show="daosanjian"></span></span>
          <span @click="upprice" :class="{bluebg:2==autopaixu}">价格↑↑<span v-show="!daosanjian"></span></span>
        </div>
        <div class="menuhead">
          <span>商品</span>
          <span>价格</span>
        </div>
        <div class="menuinner" v-for="(listobj) in listobjsA.page" :key="listobj.id">
          <router-link :to="{path:'/inner/Detail',query:{id:listobj.id}}" class="bgimg"><img :src="'http://115.182.107.203:8088/xinda/pic'+listobj.productImg" @error="errorimg()" alt=""></router-link>
          <div class="innertext">
            <router-link :to="{path:'/inner/Detail',query:{id:listobj.id}}" class="innertitle">{{listobj.providerName}}</router-link>
            <p class="innermore">{{listobj.serviceInfo}}</p>
            <p class="innermore"><span>{{listobj.serviceName}}</span><span>{{listobj.regionName}}</span></p>
          </div>
          <div class="innerpay">
            <p>￥ {{listobj.marketPrice}}.00</p>
            <div>
              <a href="#/inner/paypage" class="buynow">立即购买</a>
              <a href="javascript:void(0)" @click="addCart(listobj.id)" >加入购物车</a>
            </div>
          </div>
        </div>
      </div>
      <div class="btnpage"> <!-- 翻页器 -->
        <button class="pravicepage" @click="praverpage">上一页</button>  
        <button :class="{bluebd:index==changepage}" v-for="(page,index) in pagecount.allshow" :key="page.id" class="pagenum" @click="choosepage(index)">{{page}}</button>
        <button class="nextpage" @click="nexpage">下一页</button>
      </div>
    </div>
    <div class="rightlist"> <!-- 右边带图的那几个 -->
      <div class="rightlistinner">
        <div class="listInnerLogo innerLogo1"></div>
        <p>平台担保</p>
      </div>
      <div class="rightlistinner">
        <div class="listInnerLogo innerLogo2"></div>
        <p>平台担保</p>
      </div>
      <div class="rightlistinner">
        <div class="listInnerLogo innerLogo3"></div>
        <p>平台担保</p>
      </div>
      <div class="rightlistinner">
        <div class="listInnerLogo innerLogo4"></div>
        <p>平台担保</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import getData from './public'
import dist from '../images/districts'
export default {
  data () {
    return {
      
      objs:[],
      innerobjs:[],
      showclass:0,
      showkind:-1,
      listobjs:[],
      listobjsA:{page:''},
      totle:{allpage:0},
      showborder:0,
      pagecount:{allshow:{}},  //总页数对象
      changepage:0,  //点击之后选择的页数
      paixu:2,  //排序方式
      autopaixu:1,  //点击排序的方式
      daosanjian:true,
      url:'xinda-api/product/package/grid', //数据获取地址
      productId:'', //点击三级标题需要的
      productTypeCode:0,  //code值，点击二级标题需要的
      

      provinces:dist[100000],
      citys:[],
      areas:[],
      province:'0',
      city:'0'
    }
  },
  watch:{
    $route:function(){
      // var index=sessionStorage.getItem('index')
      var index=this.$route.query.num
      // console.log(index)
      var that = this;
      var oneobj={}
      var objs={};
      var y=0
      var x=0;
      this.ajax.post('xinda-api/product/style/list').then(function(data){
        var rData=data.data.data
        // console.log(rData)
        for(var i in rData){ //获取所有二级内容，并且合并到一个对象里
          y=rData[i].showOrder
          oneobj[y]=rData[i]
        }
        var n = oneobj[index].itemList// console.log(n)
        that.objs=n
        // console.log(oneobj)   //此时为{1：{}，2：{}，3：{}，4：{}}，已经排序
        //n为此时应显示的二级内容
        
        for(var j in n){
          objs[x]=n[j]
          x++
        }
        that.innerobjs=objs[0].itemList
      
        that.url='xinda-api/product/package/grid' //定义数据地址
        var numb=0
        for(var i in n){
          if(numb==0){
            that.productTypeCode=n[i].code
          }
          numb++
        }
        that.productId=""
        // that.productTypeCode=0
        getData(that.listobjsA,0,3,2,that.url,that.totle,that.pagecount,that.productId,that.productTypeCode,3)
      });
    }
  },
  methods:{
    ...mapActions(['setNum','setName']),
    addCart(id){  // 加入购物车
    this.ajax.post('xinda-api/cart/add',this.qs.stringify({
      id:id,
		  num:1
    }))
    var that=this
    this.ajax.post('xinda-api/cart/cart-num').then(function(data){
      that.setNum(data.data.data.cartNum)  //购物车物品数量,点击加入购物车后自动更新
    })
    },
    typeclasses(index,key){   //服务分类的点击
      // console.log(this.objs[index].itemList)
      this.innerobjs=this.objs[key].itemList
      this.showclass=index
      this.showkind=-1
      this.productTypeCode=this.objs[key].code
      this.productId=''
      this.changepage=0
      getData(this.listobjsA,this.changepage,3,this.paixu,this.url,this.totle,this.pagecount,this.productId,this.productTypeCode,3)      
    },
    typekinds(index,key){   //类型的点击
      this.showkind=index
      this.productId=this.innerobjs[key].id
      this.productTypeCode=0
      this.changepage=0
      getData(this.listobjsA,this.changepage,3,this.paixu,this.url,this.totle,this.pagecount,this.productId,this.productTypeCode,3)      
    },
    errorimg(){ //图片路径错误时报错事件 

    },
    praverpage(){ //上一页
      // this.changepage-=1
      this.changepage<=0?this.changepage:this.changepage-=1
      getData(this.listobjsA,this.changepage,3,this.paixu,this.url,this.totle,this.pagecount,this.productId,this.productTypeCode,3)
    },
    nexpage(){  //下一页
      // this.changepage+=1
      this.changepage>=this.totle.allpage-1?this.changepage:this.changepage+=1;
      getData(this.listobjsA,this.changepage,3,this.paixu,this.url,this.totle,this.pagecount,this.productId,this.productTypeCode,3)
    },
    choosepage(index){  //点击页数
      this.changepage=index
      // this.showborder=index   //当前页数提示样式
      getData(this.listobjsA,this.changepage,3,this.paixu,this.url,this.totle,this.pagecount,this.productId,this.productTypeCode,3)
      console.log(this.changepage)
    },
    zonghe(){ //综合排序
      this.paixu=2
      this.autopaixu=1
      this.daosanjian=true
      getData(this.listobjsA,this.changepage,3,this.paixu,this.url,this.totle,this.pagecount,this.productId,this.productTypeCode,3)
    },
    upprice(){ //升价排序
      this.paixu=3
      this.autopaixu=2
      this.daosanjian=false
      getData(this.listobjsA,this.changepage,3,this.paixu,this.url,this.totle,this.pagecount,this.productId,this.productTypeCode,3)
    },
    proChange(){
      this.citys = dist[this.province];
    },
    cityChange(){
      this.areas=dist[this.city];
    },
  },
  created(){
    this.ajax.post('xinda-api/cart/list').then(function(data){
      var alldata=data.data.data
      console.log(3,data.data.data)
    })
    this.nowindex=this.$route.query.num
    var that = this;
    var oneobj={}
    var objs={};
    var y=0
    var x=0;
    this.ajax.post('xinda-api/product/style/list').then(function(data){
      var rData=data.data.data
      // console.log(rData)
      for(var i in rData){ //获取所有二级内容，并且合并到一个对象里
        y=rData[i].showOrder
        oneobj[y]=rData[i]
      }
      var n = oneobj[that.nowindex].itemList// console.log(n)
      that.objs=n
      // console.log(oneobj)   //此时为{1：{}，2：{}，3：{}，4：{}}，已经排序
      //n为此时应显示的二级内容
      
      for(var j in n){
        objs[x]=n[j]
        x++
      }
      // console.log(n)
      // console.log(objs[0])
      that.innerobjs=objs[0].itemList
      // console.log(n)


      that.url='xinda-api/product/package/grid' //定义数据地址
      var numb=0
      for(var i in n){
        if(numb==0){
          that.productTypeCode=n[i].code
        }
        numb++
      }
      that.productId=""
      // that.productTypeCode=0
      getData(that.listobjsA,0,3,2,that.url,that.totle,that.pagecount,that.productId,that.productTypeCode,3)
    });
    // this.url='xinda-api/product/package/grid' //定义数据地址
    // // // var numb=0
    // // // for(var i in n){
    //     // if(numb==0){
    //     //   that.productTypeCode=n[i].code
    //     //   console.log(that.productTypeCode)
    //     // }
    //     // numb++
    // // // }
    // this.productId=""
    // this.productTypeCode=0
    // getData(this.listobjsA,0,3,2,this.url,this.totle,this.pagecount,this.productId,this.productTypeCode)
  }
}
</script>

<style scoped lang="less">
*{margin:0;padding:0;clear:both;}
.bluebg{
  background: #2693d4;
  color: #fff;
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
    width: 171px;
    height: 650px;
    padding: 0 29px;
    margin-top: 44px;
    border: 1px solid #ccc;
    .rightlistinner{
      width: 100%;
      height: 145px;
      border-bottom: 1px solid #ccc;
      @url:url(../images/homepage/listLogo.png) 100% 100% no-repeat;
      .listInnerLogo{
        width: 94px;
        height: 94px;
        margin: 15px auto 30px;
        border-radius: 50%;
        background: #f9f9f9 @url;
      }
      .innerLogo1{
        background-position: 10px 18px;
      }
      .innerLogo2{
        background-position: 10px -80px;
      }
      .innerLogo3{
        background-position: 10px -165px;
      }
      .innerLogo4{
        background-position: 10px -257px;
      }
      p{
        font-size: 17px;
        color:#000;
        font-weight: 700;
      }
    }
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
.adress{  //三级联动
margin: 0;
position: relative;
  select{
    width: 170px;
    height: 30px;
    border: 1px solid #999;
    margin-left: 20px;
  }
}
.listmenu{
  width: 100%;
  // height: 461px;
  border: 1px solid #ccc;
  color: #636363;
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
      // background: #2693d4;
      text-align: center;
      line-height: 41px;
      display: inline-block;
      position: relative;
      cursor: pointer;
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
      a{
        width: 100%;
        text-decoration: none;
      }
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
  .bluebd{
    color: #2693d4;
    border: 1px solid #2693d4;
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


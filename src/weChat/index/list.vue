<template>
<div class="list">
  <div class="listmenu">
    <!-- 靠下的部分 -->
    <div class="menutop">
      <span @click="zonghe" :class="{bluebg:1==autopaixu}">默认排序</span><span @click="upprice" :class="{bluebg:2==autopaixu}">价格</span>
    </div>
    <div class="menuinner" v-for="(listobj) in listobjsA.page" :key="listobj.id">
      <router-link :to="{path:'/weChatdog/wDetail',query:{id:listobj.id}}" class="bgimg"><img :src="newUrl+listobj.productImg" @error="errorimg()" alt=""></router-link>
      <div class="innertext">
        <router-link :to="{path:'/weChatdog/wDetail',query:{id:listobj.id}}" class="innertitle">{{listobj.providerName}}</router-link>
        <p class="innermore">{{listobj.serviceInfo}}</p>
        <p class="innermore">
          <span>{{listobj.regionName}}</span>
          <span class="innerpay">￥ {{listobj.marketPrice}}.00</span>
        </p>
      </div>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import getData from "../../homepage/public";
import { mapActions } from "vuex";
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
      url:'/xinda-api/product/package/grid', //数据获取地址
    }
  },
  created(){
    this.setTitle('列表页')


    this.ajax.post("/xinda-api/cart/list").then(function(data) {
      var alldata = data.data.data;
      // console.log(3, data.data.data);
    });
    this.nowindex = 2
    var that = this;
    var oneobj = {};
    var objs = {};
    var y = 0;
    var x = 0;
    this.ajax.post("/xinda-api/product/style/list").then(function(data) {
      var rData = data.data.data;
      // console.log(rData)
      for (var i in rData) {
        //获取所有二级内容，并且合并到一个对象里
        y = rData[i].showOrder;
        oneobj[y] = rData[i];
      }
      var n = oneobj[that.nowindex].itemList; // console.log(n)
      that.objs = n;
      // console.log(oneobj)   //此时为{1：{}，2：{}，3：{}，4：{}}，已经排序
      //n为此时应显示的二级内容

      for (var j in n) {
        objs[x] = n[j];
        x++;
      }
      // console.log(n)
      // console.log(objs[0])
      that.innerobjs = objs[0].itemList;
      // console.log(n)

      that.url = "/xinda-api/product/package/grid"; //定义数据地址
      // var numb = 0;
      // for (var i in n) {
      //   if (numb == 0) {
      //     that.productTypeCode = n[i].code;
      //   }
      //   numb++;
      // }
      that.productId = that.$route.query.id;
      console.log(that.$route.query.id)
      that.productTypeCode=0
      getData(
        that.listobjsA,
        0,
        3,
        2,
        that.url,
        that.totle,
        that.pagecount,
        that.productId,
        that.productTypeCode,
        3
      )
    });
  }, 
  
  methods:{
    ...mapActions(['setTitle']),

    zonghe() {
      //综合排序
      this.paixu = 2;
      this.autopaixu = 1;
      this.daosanjian = true;
      getData(
        this.listobjsA,
        this.changepage,
        3,
        this.paixu,
        this.url,
        this.totle,
        this.pagecount,
        this.productId,
        this.productTypeCode,
        3
      );
    },
    upprice() {
      //升价排序
      this.paixu = 3;
      this.autopaixu = 2;
      this.daosanjian = false;
      getData(
        this.listobjsA,
        this.changepage,
        3,
        this.paixu,
        this.url,
        this.totle,
        this.pagecount,
        this.productId,
        this.productTypeCode,
        3
      );
    },
  }
}
</script>


<style lang="less">
.bluebg {
  background: #2693d4;
  color: #fff;
}
.list{
  margin-top: 1rem;
  width: 100%;
  // height: 20rem;
  font-size: .2rem;
}
.listmenu {
  // width: 100%;
  /* height: 461px; */
  color: #636363;
  margin-top: .2rem;
  .menutop {
    width: 100%;
    height: .61rem;
    text-align: center;
    margin-top: .3rem;
    > span {
      width: 1.82rem;
      height: 100%;
      margin: 0 auto;
      font-size: .26rem;
      text-align: center;
      line-height: .61rem;
      display: inline-block;
      border: 1px solid #2693d4;
      position: relative;
    }
    >span:nth-child(1){
      border-top-left-radius: .1rem;
      border-bottom-left-radius: .1rem;
    }
    >span:nth-child(2){
      border-top-right-radius: .1rem;
      border-bottom-right-radius: .1rem;
    }
  }

  .menuinner {
    width: 7.5rem;
    height: 1.9rem;
    margin: 0 auto;
    text-align: left;
    padding: .25rem 0;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    .bgimg {
      width: 1.66rem;
      height: 1.66rem;
      display: block;
      float: left;
      border: 1px solid #ccc;
      background: url(../../images/homepage/errorimg.png) no-repeat;
      background-size: contain;
      margin-left: .16rem;
      // background-position: 22px 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .innertext {
      width: 5.1rem;
      height: 1.7rem;
      padding: .1rem .24rem;
      font-family: "黑体";
      // margin-left: 12px;
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      a {
        width: 100%;
        text-decoration: none;
        margin-top: .1rem;
      }
      p {
        width: 100%;
      }
      .innertitle {
        font-size: .28rem;
        color: #000;
      }
      .innermore {
        font-size: .22rem;
        color: #676767;
        line-height: .3rem;
        span:nth-child(1) {
          margin-right: 70px;
        }
      }
    }
    .innerpay {
      float: right;
      font-size: .32rem;
      color: #ff1515;
      font-weight: 700;
    }
  }
}

</style>
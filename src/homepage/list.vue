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
        <div class="menuinner">

        </div>
      </div>
    </div>
    <div class="rightlist"> <!-- 右边带图的那几个 -->

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      objs:[],
      innerobjs:[],
      showclass:0,
      showkind:0,
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
    this.ajax.post('xinda-api/product/package/grid').then(function(data){
      var rData=data.data.data
      console.log(rData)
    })
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
  height: 470px;
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
    
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


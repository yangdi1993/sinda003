<template>
  <div class="listhead">
    <!-- 靠上的部分 -->
    <div class="firstleft">
      <div class="firstnav">
        <p  :class="{firbg:index==firshow}" v-for="(data,id,index)  in rdata" :key="data.id" @click="firstclick(index,id)">{{data.name}}</p>
      </div>
    </div>

    
    <div class="typeclass">
      <div class="secondstl" :class="{bluebg:index==showclass}" v-for="(obj,index) in objs" :key="obj.id">
        <p>{{obj.name}}</p>
        <div class="typekind" :class="{bluebg:index==showkind}" v-for="(innerobj,key,index) in obj.itemList" :key="innerobj.id" @click="typekinds(index,key)">
          <p>{{innerobj.name}}<span>></span></p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import getData from "../../homepage/public";
import { mapActions } from "vuex";
export default {
  data () {
    return {
      rdata:[],
      objs:[],
      innerobjs:[],
      nowindex:1,
      firshow:0,
      showclass:0,
      showkind:-1,
      listobjs:[],
      listobjsA:{page:''},
    }
  },
  created(){
    this.setTitle('产品分类')

    this.ajax.post("/xinda-api/cart/list").then(function(data) {
      var alldata = data.data.data;
      // console.log(3, data.data.data);
    });
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
      that.rdata=rData
      var n = oneobj[that.nowindex].itemList; // console.log(n)
      that.objs = n;
      console.log(oneobj)   //此时为{1：{}，2：{}，3：{}，4：{}}，已经排序
      //n为此时应显示的二级内容

      // for (var j in n) {
      //   objs[x] = n[j];
      //   x++;
      // }
      // // console.log(n)
      // console.log(objs)
      // that.innerobjs = objs[0].itemList;
      // console.log(n)
    })
  },
  methods:{
    ...mapActions(['setTitle']),
    typekinds(index,key){
      this.$router.push({path:'/weChatdog/Wlist', query: { id: key }})
      console.log(key)
    },
    firstclick(index){
      this.nowindex=index+1
      this.firshow=index
      this.ajax.post("/xinda-api/cart/list").then(function(data) {
      var alldata = data.data.data;
      });
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
        that.rdata=rData
        var n = oneobj[that.nowindex].itemList; // console.log(n)
        that.objs = n;
      })
    }
  }
}
</script>


<style lang="less">
.listhead{
  font-size: .2rem;
  width: 100%;
  height: 100%;
  background: #f3f4f5;
  display: flex;
  
}
.firstleft{
  width: 2.22rem;
  height: 100%;
  position: relative;
}
.firstnav{
  width: 2.22rem;
  background: #fff;
  position: fixed;
  left: 0;
  top: 1rem;
  .firbg{
    background: #f3f4f5;
  }
  p{
    width: 1.92rem;
    height: .94rem;
    line-height: .94rem;
    text-align: left;
    padding-left: .3rem;
  }
}

.typeclass{
  color: rgb(224, 41, 41);
  margin-left: .21rem;
  margin-top: 1rem;
  .secondstl{
    margin-bottom: .12rem;
    width: 100%;
    text-align: left;
    >p{
    height: .77rem;
    color: #686565;
    font-size: .29rem;
    line-height: .77rem;
    border-bottom: 1px solid #cbcbcb;
    }
  }
}
.typekind{
  width: 4.3rem;
  height: .77rem;
  line-height: .87rem;
  font-size: .23rem;
  color: #5b5956;
  border-bottom: 1px solid #cbcbcb;
  margin-left: .72rem;
  p{
    height: 100%;
    width: 4.3rem;
  }
  span{
    position: absolute;
    right: .3rem;
  }
}
</style>
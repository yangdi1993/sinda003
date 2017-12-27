<template>
  <div class="storelist">
    <div class="listhead">
      <p @click="zonghe" :class="{bluebg:1==autopaixu}">默认排序</p>
      <p @click="upprice" :class="{bluebg:2==autopaixu}">销量</p>
    </div>
    <div class='back' v-for='product in products' :key="product.data">
      <router-link :to="{path:'/weChat/storehome',query:{id:product.id}}" @click='ccc'>
      <div class='content'>
        <div class='pic'>
          <div class='imgs'>
            <img :src="('http://115.182.107.203:8088/xinda/pic'+product.providerImg)" alt="">
          </div>
          <div class='deta'>
            <p>{{product.providerName}}</p><br>
            <span class='area'>{{product.regionName}}</span><br>
            <div class="num">累计服务客户数量 : <span>{{product.orderNum}}  </span> 好评率 : <span>100%</span></div>
          </div>
        </div>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
   data() {
    return {
      products: [],
      index: 0,
      number: 1,
      sort: 1,
      num: 0,
      autopaixu:1,
    };
  },
  methods: {
    ...mapActions(['setTitle']),
    ccc:function(){
      this.$router.query.id;
    },
    zonghe() {
      //综合排序
      this.paixu = 2;
      this.autopaixu = 1;
      this.sort=1;
      var that = this;
      this.ajax.post( "xinda-api/provider/grid").then(function(data) {
        that.products = data.data.data;});
    },
    upprice() {
      //升价排序
      this.paixu = 3;
      this.autopaixu = 2;
      this.sort=2;
      var that = this;
      this.ajax.post( "xinda-api/provider/grid").then(function(data) {
        that.products = data.data.data;});
    },
  },
  created() {
    this.setTitle('店铺列表');
    var that = this;
    this.ajax.post( "xinda-api/provider/grid").then(function(data) {
      that.products = data.data.data;});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.storelist  {
  margin-bottom: 0.9rem;
  margin-top: 1rem;
}
.listhead{
  width:3.6rem;
  height:0.63rem;
  border:1px solid #2693d4;
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;
  margin: 0.4rem auto;
  border-radius: 0.04rem;
  p{
    width: 50%;
    font-size:0.26rem;
    line-height: 0.63rem;
  }
}
.back{
  a{
    text-decoration: none;
  }
}
.bluebg{
  background-color:  #2693d4;
  color:#fff;
  border-right:1px solid #2693d4;
}
// .listhead p:hover{
//   background-color: #2693d4;
//   color:#fff;
// }

.listbox{
  width:100%;
  height: 2.15rem;
  border-bottom: 0.01rem solid #cfcfcf;
  margin-top: 0.25rem;
  .login{
    width:1.7rem;
    height:1.6rem;
    border:0.01rem solid #cfcfcf;
    margin-left: 0.15rem;                                                                                                                                                       
  }
}
button {
  width: 50%;
  height: 100%;
  font-size: 0.3rem;
}
.content {
  width: 90%;
  height: 2.1rem;
  position: relative;
  margin: 0 auto;
  border-bottom: 1px solid #cfcfcf;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pic {
  display: flex;
  width: 100%;
  height: 1.7rem;
  align-items: center;
}
.imgs {
  width: 1.7rem;
  height: 1.6rem;
  margin-left: 0.17rem;
  border:0.03rem solid #e3e3e3;
  img {
    width: 1.2rem;
  }
}
.deta {
  width: 5rem;
  height: 1.7rem;
  font-size:0.25rem;
  color:#000;
  margin-left: 0.24rem;
  text-align: left;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  p {
    width: 5rem;
  }
  span{
    width: 5rem;
    font-size:0.23rem;
    color:#000;
  }
  .num{
    margin-top:0.3rem;
    font-size:0.23rem;
    span{
      color:red;
      padding-right: 0.3rem;
    }
  }
  .doller {
    margin-left: 2.8rem;
    font-size: 0.3rem;
    color: red;
    position: absolute;
  
  }
}

</style>

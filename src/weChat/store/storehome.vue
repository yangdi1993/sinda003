<template>
  <div class="hello">
    <div class="storehome">
      <img src="../images/store/logo.gif" alt=""><br>
      <b>信达北京服务中心</b>
      <p>为给客户提供更加标准化的体验，信达北京服务中心采用自营模式，打造一站式企业服务平台，帮助企业快速解决发展遇到的问题，提供工商注册，财税服务，知识产权，人事外包，证件办理等全方位企业解决方案，为你的企业发展保驾护航。</p>
      <div class="ownservice">
        <p>所有服务</p>
        <span></span>
        <div class="heng"></div>
      </div>
      <div class='back' v-for='product in products' :key="product.data">
        <router-link :to="{path:'/m.sinda/details',query:{id:product.id}}" >
        <div class='content'>
          <div class='img'>
            <div class='imgs'>
              <img :src="('http://115.182.107.203:8088/xinda/pic'+product.productImg)" alt="">
            </div>
            <div class='deta'>
              <p>{{product.serviceName}}</p><br>
              <div  class="operation">{{product.serviceInfo}}。</div><br>
              <div class="area">{{product.regionName}}<div class="marketPrice"><b>￥ {{product.marketPrice}}  </b>元</div></div>
            </div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created(){
    var that = this;
    var str = {};
    this.ajax
      .post( "/xinda-api/product/package/grid",
        this.qs.stringify({
        start: 0,
        limit: 20,
        productTypeCode: "1",
        }))
      .then(data => {
        var data = data.data.data;
        console.log(data);
        that.products = data;
        sessionStorage.setItem(this.index, JSON.stringify(str));
    });
  },
  data () {
    return {
      products: [],
      index: 0,
      sort: "",
      num: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.storehome{
  margin-bottom: 0.9rem;
  b{
    margin-top: 0.2rem;
    font-size:0.35rem;
  }
 p{
    margin-top: 0.7rem;
    font-size:0.28rem;
    float: left;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
 }
  .ownservice{
    float: left;
    width: 100%;
    border-bottom: 0.02rem solid #2693d4;
    span{
      margin-left: -7.5rem;
      border-bottom: 0.05rem solid #2693d4;
      border-left: 0.05rem solid transparent;
      border-top: 0.05rem solid transparent;
      border-right: 0.05rem solid transparent;
    }
  }
}
.serviceName{
  width:1.7rem;
  height:1.7rem;
  border:0.01rem solid #cfcfcf;
  margin-left: 0.15rem;         
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
.img {
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
    width: 100%;
    height: 100%;
  }
}
.back{
  a{
    text-decoration: none;
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
  // overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  p {
    width: 5rem;
    margin: 0;
    white-space: nowrap;
  }
  .operation{
    width: 5rem;
    height: 0.7em;
    line-height: 0.4rem;
    font-size:0.23rem;
    color:#000;
  }
  .area{
    font-size:0.17rem;
    position: relative;
    margin-top: 0.5rem;
    .marketPrice{
      position: absolute;
      margin-top: -0.4rem;
      margin-left: 2.6rem;
      b{
        color:red;
      }
    }
  }
}


</style>

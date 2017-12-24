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
      <!-- <div class="box" v-for="list in lists.page" :key="list.id">
        <div class="serviceName">
          <img src="" alt="">
        </div>
      </div>  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created(){
    
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    
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
  margin: 0 auto;
  
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


</style>

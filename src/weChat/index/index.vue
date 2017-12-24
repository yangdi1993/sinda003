<template>
  <div class="index">
    <div class="top">
      <div class="toplogo">
        <img src="../../images/homepage/errorimg.png" alt="">
        <p>信达</p>
      </div>
    </div>
    <mt-swipe :auto="2000" class="swipe">
      <mt-swipe-item><img src="../../images/homepage/1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/homepage/2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/homepage/3.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="cellchoose">
      <div >
        <div><img src="" alt=""></div>
      </div>
    </div>

    <!-- <button @click="test">click</button> -->

  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  created(){
    
  }, 
  data () {
    return {
      
    }
  },
  methods:{
    test(){
       MessageBox.alert('nihao', 'hello');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.toplogo{
  height: .72rem;
  width: 100%;
  font-size: 28px;
  color: #373737;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    margin-right: 10px;
  }
}
.swipe{
  width: 100%;
  height: 2.54rem;
  img{
    width: 100%;
    height: 2.54rem;
  }
}
.cellchoose{
  width: 6.9px;
  height: 3.4rem;
  margin: .36rem auto 0;
  >div{
    
  }
}
</style>

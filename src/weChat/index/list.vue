<template>
<div id="app">
    <div class="swipe-wrapper">
        <!-- <mt-swipe :auto="0" ref="swipeWrapper">
            <mt-swipe-item class="swip-item-1 item">1</mt-swipe-item>
            <mt-swipe-item class="swip-item-2 item">2</mt-swipe-item>
            <mt-swipe-item class="swip-item-3 item">3</mt-swipe-item>
        </mt-swipe> -->

    </div>

    <div class="button-wrapper">
        <button class="prev-button flex-item" @click="prev">prev</button>
        <button class="next-button flex-item" @click="next">next</button>
    </div>
</div>
</template>

<script>
export default {
  created(){
    
  }, 
  data () {
    return {
      
    }
  },
  methods:{
    prev: function () {
       
        this.$refs.swipeWrapper.prev();
    },
    next: function () {
        this.$refs.swipeWrapper.next();
    }
  }
}
</script>


<style>
    html,body{
        width: 100%;
        height: 100%;
        margin: 0;
    }
    #app{
        width: 100%;
        height: 100%;
    }
    .swipe-wrapper{
        width: 100%;
        height: 300px;
    }
    .swip-item-1{
        background: red;
    }
    .swip-item-2{
        background: blue;
    }
    .swip-item-3{
        background: green;
    }
    .item{
        text-align: center;
        font-size: 40px;
        color: white;
    }

    .button-wrapper{
        display: flex;
        height: 100px;
    }
    .flex-item{
        flex: 1;
        display: inline-block;
        text-align: center;
        height: 100%;
        line-height: 100%;
        font-size: 40px;
    }
    .prev-button{
        background: darkorange;
    }
    .next-button{
        background: green;
    }

</style>
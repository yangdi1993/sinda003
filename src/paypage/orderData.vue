<template>
  <div class="orderdata">
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted(){
    var orderdata=document.querySelector('.orderdata')
    var usedata=sessionStorage.getItem('orderdata')
    orderdata.innerHTML=usedata.substring(
      usedata.indexOf('<form'),
      usedata.indexOf('/form>')+6
    )
    var getId=document.querySelector('#pay_form')
    getId.submit()
  }
};
</script>

<style scoped lang="less">



</style>
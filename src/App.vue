<template>
  <div id="app">
     <!--<img src="./assets/logo.png"> -->
    <!-- <top></top> -->
    <router-view/>
    <!-- <bottom/> -->
  </div>
</template>


<script>
// import top from "./components/top";
// import bottom from "./components/bottom";
export default {
  name: "app",
  created() {
    // if(false){
    //   this.$router.push('/weChat');
    // }else{
    //   this.$router.push('/');
    // }
    //判断移动端还是pc端
   
    if(this.$route.path=='/inner/homepage'){
      if(this.browserRedirect()){
      this.$router.push('/weChat');
      }else{
        this.$router.push('/');
      }
    }
    
  },
  methods:{
    browserRedirect() {
      var sUserAgent = navigator.userAgent.toLowerCase();
      var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
      var bIsMidp = sUserAgent.match(/midp/i) == "midp";
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
      var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
      var bIsAndroid = sUserAgent.match(/android/i) == "android";
      var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
      var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
      if (
        bIsIpad ||bIsIphoneOs ||bIsMidp ||bIsUc7 ||bIsUc ||bIsAndroid ||bIsCE ||bIsWM) {

        return true;
        // document.writeln("p");
      } else {
        // that.$router.push("/");
        document.writeln("pc");
      }
    }
  }

  // components: { top, bottom }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

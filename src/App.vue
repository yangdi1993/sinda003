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
    var that = this;
    function browserRedirect() {
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
        // !(function (doc, win) {  //js控制自适应
        //   var docEle = doc.documentElement,
        //     evt = "onorientationchange" in window ? "orientationchange" : "resize",
        //     fn = function () {
        //       var width = docEle.clientWidth;
        //       width && (docEle.style.fontSize = 100 * (width / 768) + "px");
        //     };

        //   win.addEventListener(evt, fn, false);
        //   doc.addEventListener("DOMContentLoaded", fn, false);

        // }(document, window));
        that.$router.push("/weChat");
        document.writeln("p");
      } else {
        //that.$router.push("/");
        document.writeln("pc");
      }
    }

    browserRedirect();
  },
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


import store from './store'
import qs from 'qs'
//三级联动插件
import dist from './images/districts'
//轮播部分插件引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)


//输入验证插件
import Validator from 'vue-validator'
Vue.use(Validator)
// ElementUI组件
import ElementUI from 'element-ui'
Vue.use(ElementUI);


//mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { MessageBox } from 'mint-ui';
//延迟加载
  import { Lazyload } from 'mint-ui';
  Vue.use(Lazyload);
// import { Button, Cell } from 'mint-ui'
// // Vue.component(Button.name, Button)
// Vue.use(Button)
import { Swipe, SwipeItem } from 'mint-ui';
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//elementui
// import Elementui from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(Elementui)

Vue.prototype.ajax = axios
Vue.prototype.qs = qs
Vue.config.productionTip = false
Vue.config.dectools = false
/* eslint-disable no-new */


export default function getrem(){
  var screenWidth=window.screen.width
  var rem=screenWidth/750
  return rem
}


//未登录状态禁止部分界面访问
const blackList = ['/inner/cart','/inner/payFalse','/inner/payTrue','/inner/Alipay','/inner/paypage','/inner/myOrder', '/inner/userUnEvalu', '/inner/goEvalu', '/inner/userHavaEvalu', '/inner/accountSetting', '/inner/changePw']
router.beforeEach((to, from, next) => {
  for (var i = 0; i < blackList.length; i++) {
    if (to.path == blackList[i]) { //检测需要登录地址
      //判断当前有没有登录
      //如果没有登录则跳转到登录页
      axios.post('/xinda-api/sso/login-info').then(data=>{
        if (data.data.status == 0) { //没有登录
          next('/outter/login');
        }else{
          next();
        }
      })
      break;
    }
    next();
  }
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },

});





//判断移动端还是pc端
// function browserRedirect() {
//   var sUserAgent = navigator.userAgent.toLowerCase();
//   var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
//   var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
//   var bIsMidp = sUserAgent.match(/midp/i) == "midp";
//   var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
//   var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
//   var bIsAndroid = sUserAgent.match(/android/i) == "android";
//   var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
//   var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
//   if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
//     // !(function (doc, win) {  //js控制自适应
//     //   var docEle = doc.documentElement,
//     //     evt = "onorientationchange" in window ? "orientationchange" : "resize",
//     //     fn = function () {
//     //       var width = docEle.clientWidth;
//     //       width && (docEle.style.fontSize = 100 * (width / 768) + "px");
//     //     };

//     //   win.addEventListener(evt, fn, false);
//     //   doc.addEventListener("DOMContentLoaded", fn, false);

//     // }(document, window));
//     document.writeln("p");
//   } else {
//     document.writeln("pc");
//   }
// }

// browserRedirect();


// var UA = navigator.userAgent;  
// var ipad = !!(UA.match(/(iPad).*OS\s([\d_]+)/)),  
//     isIphone = !!(!ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/)),  
//     isAndroid = !!(UA.match(/(Android)\s+([\d.]+)/)),  
//     isMobile = !!(isIphone || isAndroid);  
// var CLICK = isMobile ? "tap" : 'click';    // 移动端触摸、PC单击 事件  
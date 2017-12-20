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


//elementui
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Elementui)

Vue.prototype.ajax = axios
Vue.prototype.qs = qs
Vue.config.productionTip = false
Vue.config.dectools = false
/* eslint-disable no-new */


//未登录状态禁止部分界面访问
const blackList = ['/inner/cart','/inner/payFalse','/inner/payTrue','/inner/Alipay','/inner/paypage','/inner/myOrder', '/inner/userUnEvalu', '/inner/goEvalu', '/inner/userHavaEvalu', '/inner/accountSetting', '/inner/changePw']
// const blackList = ['/inner/cart','/inner/myOrder', '/inner/accountSetting', '/inner/changePw']
router.beforeEach((to, from, next) => {
  for (var i = 0; i < blackList.length; i++) {
    if (to.path == blackList[i]) { //检测需要登录地址
      //判断当前有没有登录
      //如果没有登录则跳转到登录页
      axios.post('/xinda-api/sso/login-info').then(data=>{
        if (data.data.status == 0) { //没有登录
          next('/outter/login');
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

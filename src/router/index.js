import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import server from '@/components/server'
import outter from '@/components/outter'
import inner from '@/components/inner'
import login from '@/views/login'
import register from '@/views/register'
import homepage from '@/homepage/homepage'
//<<<<<<< HEAD
//import shop from '@/shop/shop'
//支付页面
import paypage from '@/paypage/paypage'
//支付失败
import payFalse from '@/paypage/payFalse'
//支付成功
import payTrue from '@/paypage/payTrue'
//支付宝支付页面
import Alipay from '@/paypage/Alipay'
//购物车页面
import cart from '@/paypage/cart'
//商品详情页面
import Detail from '@/paypage/Detail'
//=======
// 会员中心-我的订单
import myOrder from '@/memberCenter/myOrder'
// 会员中心-用户评价-未评价
import userUnEvalu from '@/memberCenter/userUnEvalu'
// 会员中心-用户评价-已评价
import userHavaEvalu from '@/memberCenter/userHavaEvalu'
//店铺列表
import shoplist from '@/shop/shoplist'
//加盟我们
import join from '@/shop/join'
// 会员中心-用户评价-去评价
import goEvalu from '@/memberCenter/goEvalu'

//>>>>>>> 1c25a8c87826b54abfbbdc3741338030efe740e2
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/inner',
      name: 'inner',
      component: inner,
      children:[
        {
          path: 'homepage',
          name: 'homepage',
          component: homepage
        },
        // 会员中心-我的订单
        {
          path:'/myOrder',
          name:'myOrder',
          component:myOrder,
        },
        // 会员中心-用户评价-未评价
        {
          path:'/userUnEvalu',
          name:'userUnEvalu',
          component:userUnEvalu,
        },
        // 会员中心-用户评价-已评价
        {
          path:'/userHavaEvalu',
          name:'userHavaEvalu',
          component:userHavaEvalu,
        },
        //店铺列表
        {
          path: 'shoplist',
          name: 'shoplist',
          component: shoplist
        },
        //加盟我们
        {
          path: 'join',
          name: 'join',
          component: join
        },
        // 会员中心-用户评价-去评价
        {
          path:'/goEvalu',
          name:'goEvalu',
          component:goEvalu,
        },
        //支付页面
        {
          path:'paypage',
          name:'paypage',
          component:paypage
        },
        //支付错误页面
        {
          path:'payFalse',
          name:'payFalse',
          component:payFalse
        },
        //支付成功页面
        {
          path:'payTrue',
          name:'payTrue',
          component:payTrue
        },
        //支付宝支付页面
        {
          path:'Alipay',
          name:'Alipay',
          component:Alipay
        },
        //购物车
        {
          path:'cart',
          name:'cart',
          component:cart
        },
        //商品详情
        {
          path:'Detail',
          name:'Detail',
          component:Detail
        },
      ]
    },
    {
      path:'/outter',
      name:'outter',
      component:outter,
      children:[
        {
          path:'login',
          name:'login',
          component:login,
        },
        {
          path:'register',
          name:'register',
          component:register,
        }
      ]
    },
    {
      path:'/server',
      name:'server',
      component:server,
    },
    
  ]
})

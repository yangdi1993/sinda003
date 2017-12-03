import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import server from '@/components/server'
import outter from '@/components/outter'
import inner from '@/components/inner'
import login from '@/views/login'
import register from '@/views/register'
import homepage from '@/homepage/homepage'
import shop from '@/shop/shop'
import paypage from '@/paypage/paypage'
import payFalse from '@/paypage/payFalse'
import payTrue from '@/paypage/payTrue'
import Alipay from '@/paypage/Alipay'
import cart from '@/paypage/cart'
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
        {
          path: 'shop',
          name: 'shop',
          component: shop
        },
        {
          path:'paypage',
          name:'paypage',
          component:paypage
        },
        {
          path:'payFalse',
          name:'payFalse',
          component:payFalse
        },
        {
          path:'payTrue',
          name:'payTrue',
          component:payTrue
        },
        {
          path:'Alipay',
          name:'Alipay',
          component:Alipay
        },
        {
          path:'cart',
          name:'cart',
          component:cart
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
    }
  ]
})

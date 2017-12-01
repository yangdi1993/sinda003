import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import server from '@/components/server'
import outter from '@/components/outter'
import inner from '@/components/inner'
import login from '@/views/login'
import register from '@/views/register'
import homepage from '@/homepage/homepage'
<<<<<<< HEAD
// 会员中心-我的订单
import myOrder from '@/memberCenter/myOrder'
// 会员中心-用户评价-未评价
import userUnEvalu from '@/memberCenter/userUnEvalu'
// 会员中心-用户评价-已评价
import userHavaEvalu from '@/memberCenter/userHavaEvalu'
=======
import shop from '@/shop/shop'
import join from '@/shop/join'
>>>>>>> 3ece6afe38d9247f0bc19211d64ee77a58f32256

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
<<<<<<< HEAD
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
        }
=======
        {
          path: 'shop',
          name: 'shop',
          component: shop
        },
        {
          path: 'join',
          name: 'join',
          component: join
        },
>>>>>>> 3ece6afe38d9247f0bc19211d64ee77a58f32256
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

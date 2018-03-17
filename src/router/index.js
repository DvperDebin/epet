import Vue from 'vue'
import VueRouter from 'vue-router'

import Classify from '../pages/Classify/Classify'
import HomePage from '../pages/HomePage/HomePage'
import ShopCart from '../pages/ShopCart/ShopCart'
import MyEpet from '../pages/MyEpet/MyEpet'

import Types from '../pages/Classify/Types/Types'
import Brand from '../pages/Classify/Brand/Brand'
import NormalLogin from '../pages/MyEpet/NormalLogin/NormalLogin'
import PhoneLogin from '../pages/MyEpet/PhoneLogin/PhoneLogin'

import AllBrand from '../pages/AllBrand/AllBrand'

Vue.use(VueRouter)

export default new VueRouter({

  routes:[
    {
      path:'/allBrand',
      component:AllBrand
    },
    {
      path:'/classify',
      component:Classify,
      children:[
        {
          path:'/classify/types',
          component:Types,
          meta:{
            isShow:true
          }
        },
        {
          path:'/classify/brand',
          component:Brand,
          meta:{
            isShow:true
          },
        },
        {
          path:'',
          redirect:'/classify/types',
        }
      ],
      meta:{
        isShow:true
      }
    },
    {
      path:'/homepage',
      component:HomePage,
      meta:{
        isShow:true
      }
    },
    {
      path:'/shopcart',
      component:ShopCart
    },
    {
      path:'/myepet',
      component:MyEpet,
      children:[
        {
          path:'/myepet/normalLogin',
          component:NormalLogin
        },
        {
          path:'/myepet/phoneLogin',
          component:PhoneLogin
        },
        {
          path:'',
          redirect:'/myepet/normalLogin'
        },
      ]
    },
    {
      path:'/',
      redirect:'/homepage'
    }
  ]
})

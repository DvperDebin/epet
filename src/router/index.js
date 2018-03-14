import Vue from 'vue'
import VueRouter from 'vue-router'

import Classify from '../pages/Classify'
import HomePage from '../pages/HomePage'
import ShopCart from '../pages/ShopCart'
import MyEpet from '../pages/MyEpet'

Vue.use(VueRouter)

export default new VueRouter({

  routes:[
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/homepage',
      component:HomePage
    },
    {
      path:'/shopcart',
      component:ShopCart
    },
    {
      path:'/myepet',
      component:MyEpet
    },
    {
      path:'/',
      redirect:'/homepage'
    }
  ]
})

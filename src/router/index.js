import { createRouter, createWebHistory } from 'vue-router'

import product from "../views/productView.vue"
import shoppingCart from "../views/shoppingCart.vue"

const routes = [

  {
        path:'/',
        name:'product',
        component:product
  },
  {
        path:'/shop',
        name:'shop',
        component:shoppingCart
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

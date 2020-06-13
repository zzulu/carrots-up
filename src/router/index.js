import Vue from 'vue'
import VueRouter from 'vue-router'
import Enter from '@/pages/Enter'
import Farm from '@/pages/Farm'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'enter',
      component: Enter,
    },
    {
      path: '/:farmId',
      name: 'farm',
      component: Farm,
    },
  ],
})

export default router

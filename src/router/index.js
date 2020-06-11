import Vue from 'vue'
import VueRouter from 'vue-router'
import Farm from '@/pages/Farm'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: () => {
        return {
          name: 'farm',
          params: {
            farmId: Math.random().toString(36).substring(2, 7),
          },
        }
      }
    },
    {
      path: '/:farmId',
      name: 'farm',
      component: Farm,
    },
  ],
})

export default router

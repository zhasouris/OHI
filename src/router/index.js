import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test-catering-form',
    name: 'Test Catering Form',
    component: () => import(/* webpackChunkName: "my-app-ex-model-by-global-process" */ '@/views/catering-form.vue'),
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router

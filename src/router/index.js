import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    meta: { title: 'first'},
    component: resolve => require(['@/pages/index'], resolve),
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router

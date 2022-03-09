import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from '../components/HomeCom.vue'
import Demo01 from '../components/Demo01.vue'
import Demo02 from '../components/Demo02.vue'


const routes = [
  {
    path: '/',
    redirect: '/HomePage'
  },
  {
    path: '/HomePage', name: 'HomePage', component: HomePage
  },
  {
    path: '/Demo01', name: 'Demo01', component: Demo01,
  },
  {
    path: '/Demo02', name: 'Demo02', component: Demo02
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/vision',
    name: 'vision&promise',
    component: () => import(/* webpackChunkName: "vision" */ '../views/VisionView.vue')
  },
  {
    path: '/thesightfullway',
    name: 'thesightfullway',
    component: () => import(/* webpackChunkName: "thesightfullway" */ '../views/SightfullWay.vue')
  },
  {
    path: '/payrollservices',
    name: 'payrollservices',
    component: () => import(/* webpackChunkName: "payrollservices" */ '../views/PayrollServices.vue')
  },
  {
    path: '/hrservices',
    name: 'hrservices',
    component: () => import(/* webpackChunkName: "hrservices" */ '../views/HrServices.vue')
  },
  {
    path: '/clientlogin',
    name: 'clientlogin',
    component: () => import(/* webpackChunkName: "hrservices" */ '../views/ClientLoginView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
})

export default router

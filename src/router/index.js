import Vue from 'vue'
import VueRouter from 'vue-router'

import Frame from '../views/Frame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Frame,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/home/index.vue')
      },
      {
        path: '/pollution',
        component: Frame,
        name: 'pollution',
        redirect: '/pollution/companyInfo',
        children: [
          {
            path: 'companyInfo',
            name: 'companyInfo',
            component: () => import(/* webpackChunkName: "index" */ '../views/pollution/company-info/index.vue')
          }
        ]
      },
      {
        path: '/electricity',
        component: Frame,
        name: 'electricity',
        redirect: '/electricity/electriAnalysis',
        children: [
          {
            path: 'electriAnalysis',
            name: 'electriAnalysis',
            component: () => import(/* webpackChunkName: "index" */ '../views/electricity/electri-analysis/index.vue')
          }
        ]
      },
      {
        path: '/governanceMonitor',
        component: Frame,
        name: 'governanceMonitor',
        redirect: 'governanceMonitor/abnormalCompany',
        children: [
          {
            path: 'abnormalCompany',
            name: 'abnormalCompany',
            component: () => import(/* webpackChunkName: "index" */ '../views/governance-monitor/abnormal-company/index.vue')
          }
        ]
      },
      {
        path: '/system',
        component: Frame,
        name: 'system',
        redirect: 'system/loginLog',
        children: [
          {
            path: 'loginLog',
            name: 'loginLog',
            component: () => import(/* webpackChunkName: "index" */ '../views/system/login-log/index.vue')
          },
          {
            path: 'opertaionLog',
            name: 'opertaionLog',
            component: () => import(/* webpackChunkName: "index" */ '../views/system/opertaion-log/index.vue')
          }
        ]
      },
      {
        path: '/review',
        name: 'Review',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "review" */ '../views/review')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue')
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

export default router

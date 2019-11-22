import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import BlogIndex from '@/components/BlogIndex'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',

  base: process.env.NODE_ENV === 'production'
    ? '/blog/'
    : '/',

  routes: [
    {
      path: '/',
      component: BlogIndex,
    },
    {
      path: '/hello',
      component: HelloWorld,
    },
  ]
});

export default router

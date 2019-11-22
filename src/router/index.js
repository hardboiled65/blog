import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import BlogIndex from '@/components/BlogIndex'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',

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

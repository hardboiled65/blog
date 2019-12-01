import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import BlogIndex from '@/components/BlogIndex'
import BlogPost from '@/components/BlogPost'
import BlogPostNew from '@/components/BlogPostNew'

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
    {
      path: '/posts/new',
      component: BlogPostNew,
    },
    {
      path: '/posts/:id',
      component: BlogPost,
    },
  ]
});

export default router

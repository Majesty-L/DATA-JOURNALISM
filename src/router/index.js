import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  root: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HelloWorld'),
    },
    {
      path: '/page_1',
      name: 'page_1',
      component: () => import('@/pages/page_1'),
    },
    {
      path: '/page_2',
      name: 'page_2',
      component: () => import('@/pages/page_2'),
    },
    {
      path: '/page_3',
      name: 'page_3',
      component: () => import('@/pages/page_3'),
    },
    {
      path: '/page_4',
      name: 'page_4',
      component: () => import('@/pages/page_4'),
    },
  ],
});

export default router;
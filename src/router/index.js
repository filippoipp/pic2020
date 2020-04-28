import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/components/Dashboard/Dashboard.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/components/Dashboard/Dashboard.vue'),
    },
  ],
});

export default router;

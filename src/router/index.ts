import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { name: 'index', path: '/', component: () => import('../pages/index/index.vue') },
  { name: 'login', path: '/login', component: () => import('../pages/auth/login.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0, left: 0, behavior: 'smooth' }),
});

router.beforeEach((to, from, next) => {
  console.log('路由 beforeEach', from.path, to.path);
  next();
});

export default router;

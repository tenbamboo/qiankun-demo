import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'selectFood',
    component: () => import(/* webpackChunkName: "Foods" */ '../views/Foods.vue'),
  },
  {
    path: '/addFood',
    name: 'addFood',
    component: () => import(/* webpackChunkName: "AddFood" */ '../views/AddFood.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue'),
  },
];

const router = new VueRouter({
  routes,
  // eslint-disable-next-line no-underscore-dangle
  base: window.__POWERED_BY_QIANKUN__ ? '/project2/' : '/subApp/project2/',
  mode: 'history',
});

export default router;

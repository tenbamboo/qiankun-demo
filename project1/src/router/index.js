/* eslint-disable no-underscore-dangle */
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
console.log('window.__POWERED_BY_QIANKUN__ ', window.__POWERED_BY_QIANKUN__);
const router = new VueRouter({
  // eslint-disable-next-line no-underscore-dangle
  base: window.__POWERED_BY_QIANKUN__ ? '/project1/' : '/subApp/project1/',
  // base: '/subApp/project1/',
  // base: '/project1/',
  mode: 'history',
  routes,
});

export default router;

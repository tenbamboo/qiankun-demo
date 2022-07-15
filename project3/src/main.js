import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');
let instance = null;
function render(props = {}) {
  const { container } = props;
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
  //   mode: 'history',
  //   routes,
  // });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#sub-app') : '#sub-app');
}

// 独立运行时
// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}

/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
if (window.__POWERED_BY_QIANKUN__) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line camelcase
    __webpack_public_path__ = '//localhost:5000/subApp/project3/';
  } else {
  // eslint-disable-next-line camelcase
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
}

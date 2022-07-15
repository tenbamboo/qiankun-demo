import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    foods: [],
  },
  mutations: {
    ADD_CART_FOOD(state, food) {
      const findObj = state.cart.find((item) => item.id === food.id);
      if (!findObj) {
        state.cart.push(food);
      }
    },
    ADD_FOOD(state, food) {
      state.foods.push(food);
    },
    SET_FOOD(state, foods) {
      state.foods = foods;
    },
  },
  actions: {
    getFoods() {
      return new Promise((resolve) => {
        // TODO 请求接口
        // TODO 处理数据
        // 返回数据
        resolve([
          {
            id: '1',
            label: '🍚',
            price: 1000,
          },
          {
            id: '2',
            label: '🍝',
            price: 2000,
          },
          {
            id: '3',
            label: '🍲',
            price: 3000,
          },
          {
            id: '4',
            label: '🍔',
            price: 5000,
          },
          {
            id: '5',
            label: '🍖',
            price: 8000,
          },
          {
            id: '6',
            label: '🧀',
            price: 10000,
          },

        ]);
      });
    },
  },
});

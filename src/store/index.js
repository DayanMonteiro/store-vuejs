import products from "./products/index";
import cart from "./cart/index";
import { createStore } from "vuex";

export default createStore({
  modules: {
    products,
    cart,
  },

  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

import { dataApi } from "../../services/dataApi";

export default {
  namespaced: true,
  state() {
    return {
      productsList: [],
      filteredProductsList: [],
    };
  },
  mutations: {
    SET_PRODUCTS(state, list) {
      state.productsList = list;
    },
    SET_FILTERED_PRODUCTS(state, list) {
      state.filteredProductsList = list;
    },
  },
  actions: {
    getProducts: async ({ commit }) => {
      try {
        const response = await dataApi.get(
          "https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json"
        );
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    setFilteredProductsList: ({ commit }, products) => {
      commit("SET_FILTERED_PRODUCTS", products);
    },
  },
};

export default {
  namespaced: true,
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    UPDATE_CART(state, newCart) {
      state.cart = newCart;
      localStorage.setItem("cart", JSON.stringify(newCart));
    },

    SET_CART(state, newCart) {
      state.cart = newCart;
    },
  },
  actions: {
    addProductToCart({ commit, state }, product) {
      const newCart = state.cart;
      const index = state.cart.findIndex((p) => p.id === product.id);

      if (index === -1) {
        newCart.push({ ...product, quantity: 1 });
      } else {
        newCart[index].quantity += 1;
      }

      commit("UPDATE_CART", newCart);
    },

    removeFromCart({ commit, state }, { product, type }) {
      let newCart = [];

      if (type === "qty") {
        if (product.quantity === 1) {
          return false;
        }
        newCart = state.cart.map((p) => {
          if (p.id === product.id) {
            p.quantity = p.quantity - 1;
          }

          return p;
        });
      }

      if (type === "product") {
        newCart = state.cart.filter((p) => p.id !== product.id);
      }

      commit("UPDATE_CART", newCart);
    },

    clearCart({ commit }) {
      commit("UPDATE_CART", []);
    },

    getCart({ commit }) {
      const newCart = JSON.parse(localStorage.getItem("cart"));

      commit("SET_CART", newCart || []);
    },
  },
};

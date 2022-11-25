import { createApp } from "vue";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import IndexPage from "./pages/index.vue";
import shoppingCart from "./pages/shoppingCart.vue";
import checkout from "./pages/checkout.vue";
import store from "./store/index";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: IndexPage,
    },
    {
      path: "/shoppingCart",
      component: shoppingCart,
    },
    {
      path: "/checkout",
      component: checkout,
    },
  ],
});

createApp(App).use(router).use(store).mount("#app");

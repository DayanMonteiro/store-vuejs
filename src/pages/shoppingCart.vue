<template>
  <div>
    <Header />
    <div>
      <div class="containerTable">
        <Table :cartProducts="cartProducts" />
      </div>
      <div class="footerShoppingCartPage">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header/index.vue";
import Table from "../components/Table/index.vue";
import Footer from "../components/Footer/index.vue";
import { mapState } from "vuex";

export default {
  name: "shoppingCart",

  components: {
    Header,
    Table,
    Footer,
  },

  computed: {
    ...mapState({
      cartProducts: (state) => state.cart.cart,
    }),
  },
};
</script>

<style lang="scss" scoped>
.containerTable {
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  position: relative;
}

.footerShoppingCartPage {
  position: absolute;
  width: 99%;
  bottom: 0;
}
</style>

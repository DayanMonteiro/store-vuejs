<template>
  <div class="containerIndexPage">
    <div class="container">  
    <SearchProduct @filter="handleFilter"  />
      <div class="cardsContainer" v-if="filteredProductsList?.length !== 0">
        <Card
          v-for="product in filteredProductsList"
          :key="product.id"
          :product="product"
          @addProduct="addProductToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchProduct from "../SearchProduct/index.vue";
import Card from "./Card/index.vue";
import { mapState, mapActions } from "vuex";
import { filter } from "../../utils";

export default {
  name: "ProductList",

  components: {
    Card,
    SearchProduct,
  },

  watch: {},

  computed: {
    ...mapState({
      productsList: (state) => state.products.productsList,
      filteredProductsList: (state) => state.products.filteredProductsList,
    }),
  },

  methods: {
    ...mapActions("products", ["getProducts", "setFilteredProductsList"]),
    ...mapActions("cart", ["addProductToCart"]),

    handleFilter(search) {
      if (!search) {
        this.setFilteredProductsList(this.productsList);
      }

      const result = filter(this.productsList, { search });

      this.setFilteredProductsList(result);
    },
  },

  watch: {
    productsList(value) {
      if (value.length > 0) {
        this.setFilteredProductsList(value);
      }
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>

.containerIndexPage{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cardsContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (min-width: 360px) {
    justify-content: center;
  }

  @media only screen and (min-width: 640px) {
    width: 50%;
  }

  @media only screen and (min-width: 910px) {
    width: 69%;
  }

  @media only screen and (min-width: 1080px) {
    width: 64%;
  }

  @media only screen and (min-width: 1360px) {
    justify-content: space-between;
    width: 60%;
  }

  @media only screen and (min-width: 1640px) {
    justify-content: space-between;
    width: 63%;
  }

}
</style>

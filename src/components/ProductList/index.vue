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
import { dataApi } from "../../services/dataApi";
import { mapState, mapActions } from "vuex";
import { filter } from "../../utils";

export default {
  name: "ProductList",

  components: {
    Card,
    SearchProduct,
  },

  watch: {
    // cart: {
    //   handler(newValue) {
    //     localStorage.setItem("cart", JSON.stringify(newValue));
    //   },
    //   deep: true,
    // },
    // totalQuantity: (value) => {
    //   localStorage.setItem("cartItemsQty", value);
    // },
  },

  computed: {
    ...mapState({
      productsList: (state) => state.products.productsList,
      filteredProductsList: (state) => state.products.filteredProductsList,
    }),

    // totalQuantity() {
    //   return this.cart.reduce((total, product) => total + 1, 0);
    // },
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
 // width: 100%;
  /* background-color: pink; */
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* margin-top: 2rem;
  margin-bottom: 5rem; */

 // background-color: red;

  /* display: flex;
  align-items: center;
  justify-content: center; */

  /* @media only screen and (min-width: 360px) {
    width: 100%;
  }

  @media only screen and (min-width: 640px) {
    width: 69%;
  }

  @media only screen and (min-width: 910px) {
    width: 65%;
  }

  @media only screen and (min-width: 1080px) {
    width: 68%;
  }

  @media only screen and (min-width: 1360px) {
    width: 62%;
  }

  @media only screen and (min-width: 1780px) {
    width: 60%;
  } */
}



.cardsContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* background-color: red; */

  @media only screen and (min-width: 360px) {
    justify-content: center;
  }

  @media only screen and (min-width: 640px) {
    /* justify-content: center; */
    /* background-color: greenyellow; */
    width: 50%;
  }

  @media only screen and (min-width: 910px) {
    /* justify-content: center; */
    /* background-color: beige; */
    width: 69%;
  }

  @media only screen and (min-width: 1080px) {
    /* justify-content: center; */
    /* background-color: grey; */
    width: 64%;
  }

  @media only screen and (min-width: 1360px) {
    justify-content: space-between;
    /* background-color: grey; */
    width: 60%;
  }

  @media only screen and (min-width: 1640px) {
    justify-content: space-between;
    /* background-color: grey; */
    width: 63%;
  }

  /* @media only screen and (min-width: 1360px) {
    width: 31rem;
  }

  @media only screen and (min-width: 1640px) {
    width: 44rem;
  }

  @media only screen and (min-width: 1780px) {
    width: 46rem;
  } */
}
</style>

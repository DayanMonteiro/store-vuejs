<template>
  <div class="containerHeader">
    <div class="logo">
      <router-link to="/" class="textLogo">
        <h1 class="logoFirstname">Mkt</h1>
        <h1 class="logoSecondName">Place</h1>
      </router-link>
    </div>
    <router-link to="/shoppingCart" class="products">
      <p class="paragraph">Produtos</p>
      <img class="cart" src="../../resources/icons/shopping-cart.svg" />
      <div class="amount">
        <p class="amountProducts">{{ totalQuantity }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",

  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
    totalQuantity() {
      return this.cart.reduce((total, p) => total + 1, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "SoucerSansPro-Black";
  src: url("../../resources/fonts/SourceSansPro-Black.ttf") format("truetype");

  font-family: "SoucerSansPro-Bold";
  src: url("../../resources/fonts/SourceSansPro-Bold.ttf") format("truetype");

  font-family: "SoucerSansPro-Regular";
  src: url("../../resources/fonts/SourceSansPro-Regular.ttf") format("truetype");
}

.containerHeader {
  height: 6rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0;
  padding: 0;
}

.logo {
  display: flex;
  flex-direction: row;

  .logoFirstname {
    color: #909090;
    font-family: "SoucerSansPro-Black";
  }

  .logoSecondName {
    color: #8e36b7;
    font-family: "SoucerSansPro-Black";
  }
}

.textLogo {
  text-decoration: none;
  display: flex;
}

.products {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  .paragraph {
    color: #909090;
    margin-right: 1.5rem;
    font-family: "SoucerSansPro-Regular";
  }

  .cart {
    color: #8a2be2;
  }

  .amount {
    background-color: #ed1c24;
    border-radius: 50%;
    margin-top: 1.2rem;
    height: 1rem;
    width: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .amountProducts {
    color: #fffff0;
    font-size: 0.7rem;
    font-weight: bold;
  }
}
</style>

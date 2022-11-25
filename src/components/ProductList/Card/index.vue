<template>
  <div class="productContainer">
    <div class="contentImage">
      <img :src="product.imageUrl" alt="" />
    </div>
    <div class="productInfo">
      <span>{{ product.category }}</span>

      <h3>{{ product.name }}</h3>

      <p class="description">{{ product.description }}</p>

      <h1>
        {{ formatMoney(product.price) }}
      </h1>
    </div>
    <button @click.prevent="$emit('addProduct', product)">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  name: "Card",
  props: ["product", "cartData"],
  directives: { mask },

  methods: {
    formatMoney(value) {
      return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },

    saveCart(product) {
      this.cartData.push(product);
    },
  },
};
</script>

<style lang="scss" scoped>

@font-face {
  font-family: 'SoucerSansPro-Black';
  src: url('../../../resources/fonts/SourceSansPro-Black.ttf') format('truetype');

  font-family: 'SoucerSansPro-Bold';
  src: url('../../../resources/fonts/SourceSansPro-Bold.ttf') format('truetype');

  font-family: 'SoucerSansPro-Regular';
  src: url('../../../resources/fonts/SourceSansPro-Regular.ttf') format('truetype');
}
.productContainer {
  background-color: #909090;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 1rem;
  width: 19rem;
}


.contentImage {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 10rem;
  height: 10rem;
}

.productInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  height: 15rem;
  padding: 1rem;

  span {
    color: #8a2be2;
    font-weight: bold;
    font-family: 'SoucerSansPro-Bold';
  }

  h3 {
    color: #434343;
    margin-top: 1rem;
    font-family: 'SoucerSansPro-Bold';
  }

  p {
    color: #909090;
    margin-top: 1rem;
    font-family: 'SoucerSansPro-Regular';
  }

  h1 {
    color: #434343;
    margin-top: 1rem;
    font-size: 1.5rem;
    font-family: 'SoucerSansPro-Bold';
  }
}

button {
  font-family: 'SoucerSansPro-Bold';
  font-weight: bold;
  background-color: #fff;
  color: #8a2be2;
  width: 100%;
  height: 4rem;
  text-transform: uppercase;
  margin-top: 0.1rem;
  border: none;
}

button:hover {
  background-color: #8a2be2;
  color: #fff;
}

.description {
  max-height: 10rem;
  overflow: auto;
}

</style>

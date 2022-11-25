<template>
  <div class="container" v-if="cartProducts.length > 0">
    <div class="contenteTable">
      <table>
        <thead class="contentSection">
          <tr class="bottomLine">
            <th class="smallColumn"></th>
            <th class="bigColumn">Produtos</th>
            <th class="bigColumn">Quantidade</th>
            <th class="bigColumn">Valor Unitário</th>
            <th class="mediumColumn">Total</th>
          </tr>
        </thead>
        <tbody class="contentSection">
          <tr
            class="bottomLine"
            v-for="product in cartProducts"
            :key="product.id"
          >
            <td
              class="smallColumn"
              @click="removeFromCart({ product, type: 'product' })"
            >
              <img class="iconSmall" src="../../resources/icons/garbage.svg" />
            </td>
            <td class="bigColumn">
              <span>{{ product.category }}</span>
              <p class="nameTable">{{ product.name }}</p>
            </td>
            <td class="bigColumn">
              <div class="quantityCounter">
                <button
                  class="subtraction"
                  @click="removeFromCart({ product, type: 'qty' })"
                >
                  -
                </button>
                <p class="quantity">{{ product.quantity }}</p>
                <button
                  class="multiplication"
                  @click="addProductToCart(product)"
                >
                  +
                </button>
              </div>
            </td>
            <td class="bigColumn">
              <div class="price">
                <b> {{ formatMoney(product.price) }}</b> à vista <br />
                ou 10x {{ formatMoney(product.price / 10) }}
              </div>
            </td>
            <td class="mediumColumn">
              <div class="price">
                <b> {{ formatMoney(product.price * product.quantity) }}</b> à
                vista <br />
                ou 10x
                {{ formatMoney((product.price * product.quantity) / 10) }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="finalPrice bottomLine">
      <div class="cashPayment">
        <p>Total à Vista</p>
        <span>
          {{
            formatMoney(
              cartProducts?.reduce(
                (total, current) => total + current.price * current.quantity,
                0
              )
            )
          }}
        </span>
        <br />
      </div>
      <div class="paymentInstallments">
        <p>Total Parcelado</p>
        <span
          >em até
          <b
            >10 x
            {{
              formatMoney(
                cartProducts?.reduce(
                  (total, current) => total + current.price * current.quantity,
                  0
                ) / 10
              )
            }}</b
          >
          <br />(Total
          {{
            formatMoney(
              cartProducts?.reduce((total, current) => total + current.price, 0)
            )
          }})</span
        >
      </div>
    </div>

    <div class="finalConfirmation">
      <button class="cleanCart" @click="clearCart">
        <img src="../../resources/icons/garbage.svg" />
        <p>Limpar carrinho</p>
      </button>
      <div class="containerButton">
        <button class="continueShopping">Continuar Comprando</button>
        <router-link to="/checkout">
          <button class="purchase">Concluir Compra</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Table",

  props: {
    cartProducts: [],
  },

  methods: {
    ...mapActions("cart", ["removeFromCart", "clearCart", "addProductToCart"]),

    formatMoney(value) {
      return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
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

.container {
  padding: 0;
  margin: 0;

  @media only screen and (min-width: 910px) {
    width: 95%;
  }

  @media only screen and (min-width: 1080px) {
    width: 78%;
  }

  @media only screen and (min-width: 1360px) {
    width: 61%;
  }

  @media only screen and (min-width: 1780px) {
    width: 58%;
  }
}

.contenteTable {
  overflow-x: auto;
}

.contentSection {
  height: 3rem;
}

.iconSmall {
  width: 1rem;
  margin-top: 1.5rem;
}

.smallColumn {
  width: 2rem;
}

.mediumColumn {
  width: 18.5rem;
  padding-left: 0;
}

.bigColumn {
  width: 35rem;
}

th {
  text-transform: uppercase;
  color: #474747;
  text-align: left;
  padding-left: 1rem;
  font-family: "SoucerSansPro-Black";
}

td {
  color: #434343;
  padding-left: 1rem;
  height: 6.2rem;

  span {
    color: #8d36b8;
    font-weight: bold;
    font-family: "SoucerSansPro-Regular";
    font-size: 0.8rem;
  }

  p {
    width: 10rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
}

.quantityCounter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  margin-top: 1.5rem;
}

.subtraction {
  border: 1px solid #868686;
  width: 4rem;
  height: 1.7rem;
}

.multiplication {
  border: 1px solid #868686;
  width: 4rem;
  height: 1.7rem;
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #868686;
  border-bottom: 1px solid #868686;
  height: 1.6rem;
  margin-bottom: 0.5rem;
}

.bottomLine {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px 0px;
}

.price {
  font-family: "SoucerSansPro-Regular";
  margin-top: 1.5rem;
}
.finalPrice {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 10rem;
}

.cashPayment {
  width: 21rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;

  p {
    text-transform: uppercase;
    font-weight: bold;
    color: #474747;
    font-family: "SoucerSansPro-Bold";
  }

  span {
    color: #8d36b8;
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 3.5rem;
    font-family: "SoucerSansPro-Bold";
  }
}

.paymentInstallments {
  width: 21rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 2rem;

  p {
    text-transform: uppercase;
    font-weight: bold;
    color: #474747;
    font-family: "SoucerSansPro-Bold";
  }

  span {
    color: #474747;
    margin-left: 1rem;
    font-family: "SoucerSansPro-Regular";
  }
}

.finalConfirmation {
  display: flex;
  margin-top: 3rem;

  @media only screen and (min-width: 360px) {
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (min-width: 910px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
.containerButton {
  display: flex;
  font-family: "SoucerSansPro-Regular";

  @media only screen and (min-width: 360px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 910px) {
    flex-direction: row;
    justify-content: space-between;
    width: 31rem;
  }
}

.continueShopping {
  background-color: #cfcfcf;
  color: #434343;
  width: 15rem;
  height: 3rem;
  font-weight: bold;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  border: none;
}

.continueShopping:hover {
  background-color: #8d36b8;
  color: #fff;
}

.purchase {
  background-color: #8d36b8;
  color: #fff;
  width: 15rem;
  height: 3rem;
  font-weight: bold;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  border: none;
}

.purchase:hover {
  background-color: #fff;
  color: #8a2be2;
}

.cleanCart {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;

  p {
    color: #626262;
    font-family: "SoucerSansPro-Regular";
  }

  @media only screen and (min-width: 360px) {
    justify-content: center;
  }

  @media only screen and (min-width: 910px) {
    justify-content: flex-start;
  }
}

img {
  width: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
}
</style>

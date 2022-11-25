<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("cart", ["getCart"]),
  },

  mounted() {
    this.getCart();
  },
};
</script>

<style scoped></style>

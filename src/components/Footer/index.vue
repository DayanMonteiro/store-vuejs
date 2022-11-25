<template>
  <div class="containerFooter">
    <h1>MktPlace</h1>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "SoucerSansPro-Black";
  src: url("../../resources/fonts/SourceSansPro-Black.ttf") format("truetype");
}

.containerFooter {
  background-color: #bbbbbb;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  h1 {
    color: #666666;
    font-family: "SoucerSansPro-Black";
  }
}
</style>

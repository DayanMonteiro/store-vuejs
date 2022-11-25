<template>
  <div class="containerSearch">
    <h2>Encontre seu produto</h2>

    <div id="search">
      <input
        type="text"
        id="txtSearch"
        placeholder="Pesquisar..."
        v-model="search"
      />
      <button>
        <img
          src="../../resources/icons/magnifying-glass.svg"
          id="btnBusca"
          alt="Buscar"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchProduct",

  data() {
    return {
      search: "",
    };
  },

  watch: {
    search(value) {
      this.$emit("filter", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "SoucerSansPro-Bold";
  src: url("../../resources/fonts/SourceSansPro-Bold.ttf") format("truetype");

  font-family: "SoucerSansPro-Regular";
  src: url("../../resources/fonts/SourceSansPro-Regular.ttf") format("truetype");
}

.containerSearch {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 5.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media only screen and (min-width: 360px) {
    width: 95%;
  }

  @media only screen and (min-width: 640px) {
    width: 69%;
  }

  @media only screen and (min-width: 910px) {
    width: 69%;
  }

  @media only screen and (min-width: 1080px) {
    width: 63%;
  }

  @media only screen and (min-width: 1360px) {
    width: 58%;
  }

  @media only screen and (min-width: 1640px) {
    width: 62%;
  }
}

h2 {
  color: #909090;
  font-family: "SoucerSansPro-Bold";

  @media only screen and (min-width: 360px) {
    margin-left: 0.3rem;
    font-size: 1rem;
    width: 5.5rem;
  }

  @media only screen and (min-width: 640px) {
    width: 10rem;
  }

  @media only screen and (min-width: 910px) {
    font-size: 1.1rem;
    width: 11rem;
  }
}

#search {
  display: flex;
  align-items: center;

  margin-left: 1rem;

  @media only screen and (min-width: 360px) {
    margin-left: 0.5rem;
  }

  @media only screen and (min-width: 640px) {
    margin-left: 1rem;
  }
}

#txtSearch {
  float: left;
  padding-left: 1rem;
  font-family: "SoucerSansPro-Regular";
  border: none;
  height: 2.8rem;
  border: 1px solid gray;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  @media only screen and (min-width: 360px) {
    font-size: 0.9rem;
    width: 11.5rem;
  }

  @media only screen and (min-width: 640px) {
    font-size: 1rem;
    width: 13rem;
  }

  @media only screen and (min-width: 910px) {
    width: 20rem;
  }

  @media only screen and (min-width: 1080px) {
    width: 25rem;
  }

  @media only screen and (min-width: 1360px) {
    width: 31rem;
  }

  @media only screen and (min-width: 1640px) {
    width: 44rem;
  }

  @media only screen and (min-width: 1780px) {
    width: 52rem;
  }
}

button {
  background-color: #8e36b7;
  width: 3rem;
  height: 3rem;
  border: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: -2rem;
}

img {
  width: 1.3rem;
}
</style>

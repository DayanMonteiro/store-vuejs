<template>
  <carousel :items-to-show="1">
    <slide v-for="item in items" :key="item.id">
      <div :class="item.class">
        <div :class="item.txtClass">
          <div class="textContent">
              <h1 class="txtTitle">{{ item.src }}</h1>
              <p class="txtSubTitle">As melhores ofertas</p>
          </div>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "CarouselComponent",

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      items: [
        {
          id: 1,
          src: "Notebooks",
          class: "carousel1",
          txtClass: "txtcarousel1",
        },
        {
          id: 2,
          src: "Geladeiras",
          class: "carousel2",
          txtClass: "txtcarousel2",
        },
      ],
    };
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

.carousel1 {
  background-image: linear-gradient(to right, #8a2be2, #e6bafa);
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
}

.carousel2 {
  background-image: linear-gradient(to right, #8a2be2, #e6bafa);
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.textContent {
  @media only screen and (min-width: 360px) {
    margin-right: 3rem;
  }

  @media only screen and (min-width: 640px) {
    margin-right: 6rem;
  }

  @media only screen and (min-width: 910px) {
    margin-right: 10rem;
  }

  @media only screen and (min-width: 1080px) {
    margin-right: 12rem;
  }

  @media only screen and (min-width: 1360px) {
    margin-right: 16rem;
  }

  @media only screen and (min-width: 1780px) {
    margin-right: 22rem;
  }
}

.txtTitle {
  color: #fff;
  font-family: "SoucerSansPro-Black";
  font-size: 2.5rem;
}

.txtSubTitle {
  color: #fff;
  font-family: "SoucerSansPro-Black";
  font-size: 1.1rem;
  margin-top: -2.5rem;
}
</style>

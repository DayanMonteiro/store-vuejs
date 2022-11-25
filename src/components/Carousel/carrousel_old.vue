<template>
  <v-carousel :show-arrows="false" >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :class="item.class"
      reverse-transition="fade-transition"
      transition="fade-transition"
    > 
    <div  :class="item.txtClass">
      <div class="textContent">
        <h1 class="txtTitle" >
          {{item.src}}
        </h1 >
        <p class="txtSubTitle">As melhores ofertas</p>
      </div>
    </div>
     
  </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Carousel',

    data () {
      return {
        items: [
          {
            src: 'Notebooks',
            class: "carousel1",
            txtClass: "txtcarousel1"
          },
          {
            src: 'Geladeiras',
            class: "carousel2",
            txtClass: "txtcarousel2"

          },

        ],
      }
    },
  }
</script>

<style lang="scss"scoped >

@font-face {
  font-family: 'SoucerSansPro-Black';
  src: url('../../resources/fonts/SourceSansPro-Black.ttf') format('truetype');

  font-family: 'SoucerSansPro-Bold';
  src: url('../../resources/fonts/SourceSansPro-Bold.ttf') format('truetype');

  font-family: 'SoucerSansPro-Regular';
  src: url('../../resources/fonts/SourceSansPro-Regular.ttf') format('truetype');
}
  
.carousel1{
  background-image: linear-gradient( to right, #8A2BE2, #E6BAFA);
}

.carousel2{
  background-image: linear-gradient( to right, #8A2BE2, #E6BAFA);
}

.textContent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 12rem;

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
.txtTitle{
  color: #fff;
  font-family: 'SoucerSansPro-Black';
 
  @media only screen and (min-width: 360px) {
    font-size: 2rem;  
  }

  @media only screen and (min-width: 640px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 910px) {
    font-size: 4rem;
  }

}

.txtSubTitle{
  color: #fff;
  font-family: 'SoucerSansPro-Black';

  @media only screen and (min-width: 360px) {
    font-size: 1rem; 
  }

  @media only screen and (min-width: 640px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 910px) {
    font-size: 2rem;
  }

}
</style>
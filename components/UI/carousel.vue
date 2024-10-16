<!-- components/ImageCarousel.vue -->
<template>
    <carousel :autoplay="true" :loop="true">
      <slide v-for="(image, index) in images" :key="index">
        <img :src="image" class="w-3/4 mx-auto" alt="Carrossel de Imagens" />
      </slide>
    </carousel>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue-carousel';
  
  export default {
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        images: [
          require('~/assets/images/sobre1.jpg'),
          require('~/assets/images/sobre2.jpg'),
          require('~/assets/images/sobre3.jpg'),
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  
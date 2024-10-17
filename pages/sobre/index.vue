<template>
    <div class="relative"> <!-- Adicione esta classe para o posicionamento relativo -->
        <UIHeader></UIHeader>
        <div class="flex items-center justify-center min-h-screen">
            <div class="flex w-4/5 mx-aut">
                <div class="w-1/2 pr-8">
                    <h2 class="text-justify">
                        Olá! Meu nome é Kaliandra de Freitas, e sou apaixonada pela vida através da lente da minha
                        câmera. Para mim, a fotografia é uma forma de eternizar momentos que, mesmo que se desvanecem em
                        nossas memórias, permanecem vivos nas imagens que capturamos. As fotos nunca deixam de
                        transmitir sentimentos profundos e experiências significativas.
                    </h2>
                    <h2 class="mt-5">
                        Dentro dessa arte, exploro diversos temas, incluindo retratos, paisagens, fotografia de eventos
                        e ensaios fotográficos. Meu objetivo é eternizar os melhores momentos da vida das pessoas,
                        sempre com uma abordagem detalhista. Procuro enxergar além do que muitos veem, focando nas
                        pequenas coisas que muitas vezes passam despercebidas, mas que são verdadeiramente especiais.
                        Acredito que a beleza reside nos detalhes.
                    </h2>
                    <h2 class="mt-5">
                        Viver é uma arte, e as lentes da câmera são apenas ferramentas que utilizo para lembrar e
                        mostrar aos outros o que pode ser perdido se não olharmos com calma. Capturo a natureza, os
                        laços afetivos, as celebrações e cada passo significativo da jornada. Espero tocar os corações
                        através do meu olhar, pois as imagens que crio são uma forma de expressar a beleza e a emoção
                        que vejo ao meu redor. Os sorrisos, a animação e as palavras de agradecimento que recebo são,
                        para mim, a maior recompensa.
                    </h2>
                    <h2 class="mt-5">
                        Se você está buscando alguém para eternizar momentos especiais em sua vida, adoraria conversar e
                        criar algo memorável juntos
                    </h2>
                </div>
                <div class="w-1/2 flex justify-center">
                    <carousel :autoplay="true" :loop="true" :autoplayTimeout="3000" :wrapAround="true"
                        :transition="2500" :perPage="1" :navigationEnabled="true" :paginationEnabled="true"
                        :pause-autoplay-on-hover="true" class="carousel-container w-2/5">
                        <slide v-for="(image, index) in images" :key="index">
                            <img :src="image" class="carousel-image" alt="Carrossel de Imagens" />
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';


export default {
    name: 'Sobre',
    components: {
        Carousel,
        Slide,
    },
    setup() {
        const images = ref([
            '/images/sobre.jpg',
            '/images/sobre2.jpg',
            '/images/sobre3.jpg',
        ]);

        return {
            images,
        };
    },
};
</script>

<style scoped>
.carousel-container {
    width: 100%;
    max-width: 50%;
}

.carousel-image {
    width: 100%;
    height: 100%;
}

.camera-image {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 500px;
    z-index: 0;
    opacity: 0.4;
}
</style>
<template>
    <div class="relative"> <!-- Adicione esta classe para o posicionamento relativo -->
        <UIHeader></UIHeader>
        <div class="flex items-center justify-center min-h-screen">
            <div class="flex w-4/5 mx-aut">
                <div class="w-1/2 pr-8">
                    <h2 class="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has sido
                        o texto padrão
                        da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e
                        misturou para
                        fazer um livro de amostras. Ele sobreviveu não apenas cinco séculos, mas também a transição para
                        a composição
                        eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o
                        lançamento de
                        folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com softwares de
                        editoração
                        eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.
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
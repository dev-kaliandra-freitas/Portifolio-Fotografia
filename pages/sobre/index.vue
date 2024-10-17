<template>
    <div class="relative"> <!-- Classe de posicionamento relativo -->
        <UIHeader v-if="!isMobile"></UIHeader>
        <UISidebar v-if="isMobile"></UISidebar>
        <div class="centered-container">
            <div class="flex-container">
                <div class="apresentacao">
                    <UIApresentacao></UIApresentacao>
                </div>
                <div class="carousel-container">
                    <carousel :autoplay="true" :loop="true" :autoplayTimeout="3000" :wrapAround="true"
                        :transition="2500" :perPage="1" :navigationEnabled="true" :paginationEnabled="true"
                        :pause-autoplay-on-hover="true" class="carousel-container">
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

        const isMobile = ref(false);

        const checkIfMobile = () => {
            isMobile.value = window.matchMedia("(max-width: 768px)").matches;
        };

        onMounted(() => {
            checkIfMobile();
            window.addEventListener('resize', checkIfMobile);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize', checkIfMobile);
        });

        return {
            images,
            isMobile,
        };
    },
};
</script>

<style scoped>
.relative {
    position: relative;
}

.centered-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    /* ou 100% da altura da viewport */
}

.flex-container {
    display: flex;
    width: 80%;
    margin: 0 auto;
}

.carousel-container {
    display: flex;
    justify-content: center;
    width: 50%;
}

.carousel-image {
    width: 100%;
    height: auto;
}

.apresentacao {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    padding-right: 0;
    padding-bottom: 2rem;
}

@media (max-width: 768px) {
    .flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .carousel-container {
        max-width: 90%;
    }

    .centered-container {
        margin-top: 14%;
    }

    .apresentacao {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>

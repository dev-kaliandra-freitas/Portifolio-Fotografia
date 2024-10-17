<template>
    <div class="home">
        <div>
            <UIHeader v-if="!isMobile"></UIHeader>
        </div>
        <UISidebar v-if="isMobile"></UISidebar>
        <div class="principal-container">
            <Principal class="principal">
            </Principal>
        </div>
        <div>
            <UIFooter></UIFooter>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        const windowWidth = ref(0); // Inicializando o width como 0

        const isMobile = computed(() => {
            return windowWidth.value <= 760;
        });

        const handleResize = () => {
            windowWidth.value = window.innerWidth; // Atualiza a largura da janela
        };

        onMounted(() => {
            handleResize();
            window.addEventListener('resize', handleResize);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize', handleResize);
        });

        return {
            isMobile,
        };
    },
};
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url('/static/background1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


.principal-container {
    margin-top: 8%;
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

@media (max-width: 760px) {
    .home {
        background-image: url('/images/fundoMobile.jpg');
        background-size: cover;
        background-position: center;
    }

    .principal-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

}
</style>
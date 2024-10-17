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

export default {
    data() {
        return {
            windowWidth: window.innerWidth
        };
    },
    computed: {
        isMobile() {
            return this.windowWidth <= 760;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    }
}

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
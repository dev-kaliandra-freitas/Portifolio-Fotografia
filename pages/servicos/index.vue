<template>
    <div>
        <UIHeader v-if="!isMobile"></UIHeader>
        <UISidebar v-if="isMobile"></UISidebar>
        <div class="flex flex-col items-center justify-center min-h-screen md:mt-40 mt-10">
            <NuxtLink to="/casamentos" class="contents">
                <UICards title="Casamentos" :image="casamentos" :isLeft="true" />
            </NuxtLink>

            <NuxtLink to="/chaDeBebe" class="contents">
                <UICards title="Eventos" :image="chaDeBebe" :isLeft="false" />
            </NuxtLink>

            <NuxtLink to="/esportes" class="contents">
                <UICards title="Esportes" :image="esportes" :isLeft="true" />
            </NuxtLink>

            <NuxtLink to="/vida" class="contents">
                <UICards title="Vida" :image="vida" :isLeft="false" />
            </NuxtLink>
<!-- 
            <NuxtLink to="" class="contents">
                <UICards title="Aniversários" :image="aniversarios" :isLeft="true" />
            </NuxtLink> -->

        </div>
    </div>
</template>


<script>
const aniversarios = "/images/aniversarios.jpg";
const casamentos = "/images/casamento.jpg";
const chaDeBebe = "/images/eventos.jpg";
const esportes = "/images/esportes.jpg";
const ensaios = "/images/ensaios.jpg";
const vida = "/images/natureza9.jpg";

export default {
    setup() {

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
            aniversarios,
            casamentos,
            chaDeBebe,
            esportes,
            ensaios,
            vida,
            isMobile,
        }
    }
}
</script>

<style scoped>
</style>
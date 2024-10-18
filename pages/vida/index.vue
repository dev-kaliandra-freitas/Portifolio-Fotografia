<template>
    <div>
        <UIHeader v-if="!isMobile"></UIHeader>
        <UISidebar v-if="isMobile"></UISidebar>
        <UIGrid :collectionName="collectionName"></UIGrid>
    </div>
</template>

<script>
import { ref } from 'vue';
const collectionName = ref('vida');
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
            collectionName,
            isMobile
        }
    }
}
</script>
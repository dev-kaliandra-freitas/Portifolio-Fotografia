<template>
  <div>
    <UIHeader v-if="!isMobile"></UIHeader>
    <UISidebar></UISidebar>
    <UIGrid :collectionName="collectionName"></UIGrid>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
const collectionName = ref('imagens');
const windowWidth = ref(0);

const isMobile = computed(() => {
  return windowWidth.value <= 760;
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};


onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped></style>
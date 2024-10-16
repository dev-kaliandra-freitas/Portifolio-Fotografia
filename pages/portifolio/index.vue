<template>
  <div>
    <UIHeader></UIHeader>
    <UIGrid :collectionName="collectionName"></UIGrid>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const collectionName = ref('imagens');
</script>

<style scoped></style>
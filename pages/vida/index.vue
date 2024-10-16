<template>
    <div>
        <UIHeader></UIHeader>
        <UIGrid :collectionName="collectionName"></UIGrid>
    </div>
</template>

<script>
import { ref } from 'vue';
const collectionName = ref('vida');
export default {
    setup() {
        return {
            collectionName
        }
    }
}
</script>
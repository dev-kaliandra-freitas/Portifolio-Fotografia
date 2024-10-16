<template>
    <div class="bg-gray w-4/5 flex items-center h-60 mb-4 justify-between rounded-md card-hover">
        <div v-if="isLeft" class="ml-6 flex justify-start"> <!-- Alinhado à esquerda -->
            <img :src="image" class="square-image text-8xl" :alt="title" />
        </div>
        <h1 class="text-6xl" :class="isLeft ? 'pr-64' : 'pl-64'">{{ title }}</h1>
        <div v-if="!isLeft" class="mr-6 flex justify-end"> <!-- Alinhado à direita -->
            <img :src="image" class="square-image" :alt="title" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        isLeft: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
.square-image {
    width: 200px;
    height: 200px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 4px
}


.card-hover {
    transition: transform 0.3s, box-shadow 0.3s;
}

.card-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
</style>

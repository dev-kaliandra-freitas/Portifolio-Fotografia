
<template>
    <div class="bg-gray w-4/5 flex items-center md:h-60 h-30 mb-4 justify-between rounded-md card-hover"> 
        <div v-if="isLeft" class="md:ml-6 m-2 flex justify-start">
            <img :src="image" class="md:w-[200px] md:h-[200px]  w-[80px] h-[80px] object-cover rounded-md" :alt="title" />
        </div>
        <h1 class="md:text-6xl text-2xl" :class="isLeft ? 'pr-10' : 'pl-10'">{{ title }}</h1>
        <div v-if="!isLeft" class="md:mr-6 m-2 flex justify-end">
            <img :src="image" class="md:w-[200px] md:h-[200px] w-[80px] h-[80px] object-cover rounded-md" :alt="title" />
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

.card-hover {
    transition: transform 0.3s, box-shadow 0.3s;
}

.card-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

</style>

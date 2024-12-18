<template>
    <div class="flex items-center justify-center min-h-screen relative mt-20">

        <div v-if="loading" class="loader absolute inset-0 flex flex-col justify-center items-center z-20">
            <div class="spinner flex text-sans"></div>
            <p>Carregando...</p>
        </div>

        <div class="overlay text-center z-10">
            <h1 class="title font-serif text-8xl">Gallery</h1>
        </div>

        <div class="w-11/12 md:w-3/4 lg:w-2/3 flex flex-col items-center md:mt-20 ">
            <div class="masonry-grid">
                <div v-for="(image, index) in images" :key="index" class="masonry-item" :style="getStyle(image)">
                    <img class="h-auto max-w-full rounded-lg" :src="image.url" alt="Imagem" @load="onImageLoad" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';

const images = ref([]);
const loading = ref(true);
let imagesLoaded = 0;

const props = defineProps({
    collectionName: {
        type: String,
        required: true
    }
});

const fetchImages = async () => {
    const db = useNuxtApp().$db;
    const imagesCollection = collection(db, props.collectionName);

    try {
        const querySnapshot = await getDocs(imagesCollection);
        images.value = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                url: data.url,
                orientation: data.orientation,
                colSpan: data.colSpan || 1,
                rowSpan: data.rowSpan || 1
            };
        });
    } catch (error) {
        console.error("Erro ao buscar imagens:", error);
    }
}

const onImageLoad = () => {

    imagesLoaded += 1;

    if (imagesLoaded === images.value.length) {
        loading.value = false;
    }
}

const getStyle = (image) => {
    const rowSpan = image.rowSpan === 0.5 ? '1/2' : image.rowSpan;
    return {
        gridColumn: `span ${image.colSpan}`,
        gridRow: `span ${rowSpan}`,
    };
}

onMounted(fetchImages);
</script>

<style scoped>
.masonry-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 160px;
    gap: 10px;
}

.masonry-item {
    break-inside: avoid;
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}


.overlay {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 10;
    margin-top: 4%;
}

.spinner {
    border: 6px solid rgba(0, 0, 0, 0.1);
    border-left-color: #333;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.masonry-item img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.masonry-item:hover img {
    transform: scale(1.05);
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);
}

@media (max-width: 760px) {
    .title {
        font-size: 1.3cm;
    }

    .overlay {
        margin-top: 10%;
    }

    .masonry-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .overlay {
        z-index: 2;
        margin-top: 0;
    }

}
</style>

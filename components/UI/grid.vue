<template>
    <div class="flex items-center justify-center min-h-screen relative mt-20">
        <!-- Exibe o loader enquanto as imagens estão carregando -->
        <div v-if="loading" class="loader absolute inset-0 flex flex-col justify-center items-center z-20">
            <div class="spinner flex text-sans"></div>
            <p>Carregando...</p>
        </div>

        <div v-else class="overlay text-center z-10">
            <h1 class="title font-serif text-8xl">Gallery</h1>
        </div>
        
        <div class="w-11/12 md:w-3/4 lg:w-2/3 flex flex-col items-center mt-20">
            <div class="masonry-grid">
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="masonry-item"
                    :style="getStyle(image)"
                >
                    <!-- Adicione o evento `load` para cada imagem -->
                    <img 
                        class="h-auto max-w-full rounded-lg" 
                        :src="image.url" 
                        alt="Imagem" 
                        @load="onImageLoad"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';

const images = ref([]);
const loading = ref(true); // Estado para controlar o carregamento
let imagesLoaded = 0;      // Contador de imagens carregadas

const fetchImages = async () => {
    const db = useNuxtApp().$db;
    const imagesCollection = collection(db, 'imagens');

    try {
        const querySnapshot = await getDocs(imagesCollection);
        images.value = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                url: data.url, // A URL da imagem
                orientation: data.orientation, // A orientação da imagem
                colSpan: data.colSpan || 1, // Número de colunas que a imagem deve ocupar
                rowSpan: data.rowSpan || 1  // Número de linhas que a imagem deve ocupar
            };
        });
    } catch (error) {
        console.error("Erro ao buscar imagens:", error);
    }
}

const onImageLoad = () => {
    // Incrementa o contador de imagens carregadas
    imagesLoaded += 1;
    // Verifica se todas as imagens foram carregadas
    if (imagesLoaded === images.value.length) {
        loading.value = false; // Quando todas estiverem carregadas, esconda o loader
    }
}

const getStyle = (image) => {
    const rowSpan = image.rowSpan === 0.5 ? '1/2' : image.rowSpan;
    return {
        gridColumn: `span ${image.colSpan}`, // Definindo colSpan
        gridRow: `span ${rowSpan}`,          // Definindo rowSpan, converte 0.5 para '1/2'
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
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>

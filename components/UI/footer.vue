<template>
    <div id="barra-inferior">
        <ul class="lista" v-if="!isMobile"> <!-- Renderiza a lista apenas em telas maiores -->
            <li>
                <NuxtLink class="custom-link" to="/">Política de privacidade</NuxtLink>
            </li>
            <li>
                <NuxtLink class="custom-link" to="/">Política de Cookies</NuxtLink>
            </li>
        </ul>
        <ul class="copyright" :class="{ 'centralizado': isMobile }">
            <!-- Adiciona a classe 'centralizado' se for mobile -->
            <li>
                <NuxtLink class="custom-link" to="/">&copy; 2024 Kaliandra Freitas Developer</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
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

<style scoped>
#barra-inferior {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: transparent;
    padding: 10px 40px;
}

.lista {
    display: flex;
    color: var(--color-text-light);
    padding: 0;
    margin: 0;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin: 0 40px;
}

.custom-link {
    font-size: small;
    /* Tamanho da fonte */
    text-decoration: none;
    /* Remove o sublinhado do link */
    color: inherit;
    /* Herda a cor do elemento pai */
    opacity: 0.4;
}

.copyright {
    display: flex;
    color: var(--color-text-light);
    padding: 0;
    margin-left: auto;
}

.copyright li {
    margin-left: 40px;
}


.centralizado {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
}

@media (max-width: 760px) {
    .custom-link {
        white-space: nowrap;
        /* Evita quebra de linha no texto em telas menores */
    }

    #barra-inferior {
        flex-direction: column;
        align-items: center;
    }
}
</style>

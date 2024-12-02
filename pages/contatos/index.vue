<template>
    <div>
        <UIHeader v-if="!isMobile"></UIHeader>
        <UISidebar v-if="isMobile"></UISidebar>
        <div class="flex flex-col items-center justify-center min-h-screen mt-40 mb-20">
            <h1 class="flex items-center text-gray md:text-8xl text-5xl">CONTATOS</h1>
            <div class="bg-gray w-4/5 flex md:flex-row flex-col items-center justify-center min-h-screen font-sans">
                <div class="md:w-1/3 w-full md:pl-20 px-4 md:text-4xl text-xl leading-relaxed text-center md:text-left">
                    <p class=" md:whitespace-normal">
                        Entre em contato para orçamentos <span class="block md:inline-flex">e maiores detalhes:</span>
                    </p>
                </div>
                <div class="md:w-9/12 w-4/5 flex flex-col items-center font-sans">
                    <div class="md:mt-0 mt-20 items-start flex flex-col w-4/5">
                        <div class="flex flex-row md:pl-40">
                            <font-awesome-icon :icon="['fab', 'whatsapp']" size="" />
                            <div class="md:ml-5 ml-2 md:text-2xl text-s text-wrap">(67) 98220-2031</div>
                        </div>
                        <div class="flex md:pl-40">
                            <font-awesome-icon :icon="['far', 'envelope']" size="md" />
                            <div class="md:ml-5 ml-2 w-4/5">
                                <a href="mailto:kaliandrafreitasfotografia@gmail.com"
                                    class="text-gray-800  md:text-2xl text-sm w-full">
                                    kaliandrafotografia@gmail.com
                                </a>
                            </div>
                        </div>
                        <div class="flex md:pl-40">
                            <font-awesome-icon :icon="['fab', 'instagram']" size="md" />
                            <div class="md:ml-5 ml-2">
                                <a href="https://www.instagram.com/Throughkaliseyes" target="_blank"
                                    class="text-gray-800 no-underline md:text-2xl text-wrap">
                                    Throughkaliseyes
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
const windowWidth = ref(window.innerWidth);

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
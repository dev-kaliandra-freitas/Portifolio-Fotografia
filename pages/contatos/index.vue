<template>
    <div>
        <UIHeader></UIHeader>
        <div class="flex flex-col items-center justify-center min-h-screen mt-40 mb-20">
            <h1 class="flex items-center text-gray text-8xl">CONTATOS</h1>
            <div class="bg-gray w-4/5 flex flex-row items-center justify-center min-h-screen font-sans">
                <div class="w-1/3 pl-20 text-4xl">Entre em contato para orçamentos e maiores detalhes:</div>
                <div class="w-9/12 flex flex-col items-center font-sans">
                    <div class="items-start">
                        <div class="flex flex-row pl-40">
                            <font-awesome-icon :icon="['fab', 'whatsapp']" size="lg"/>
                            <div class="ml-5 text-2xl">Telefone: (67) 00000-0000</div>
                        </div>
                        <div class="flex flex-row pl-40">
                            <font-awesome-icon :icon="['far', 'envelope']" size="lg"/>
                            <div class="ml-5">
                                <a href="mailto:kaliandrafreitasfotografia@gmail.com"
                                    class="text-gray-800 no-underline text-2xl">
                                    kaliandrafreitasfotografia@gmail.com
                                </a>
                            </div>
                        </div>
                        <div class="flex pl-40">
                            <font-awesome-icon :icon="['fab', 'instagram']" size="lg"/>
                            <div class="ml-5">
                                <a href="https://www.instagram.com/Throughkaliseyes" target="_blank"
                                    class="text-gray-800 no-underline text-2xl">
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
</script>

<style scoped></style>
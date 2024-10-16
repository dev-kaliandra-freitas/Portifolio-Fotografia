<template>
    <div>
        <UIHeader></UIHeader>
        <div class="flex flex-col items-center justify-center min-h-screen mt-40">
            <NuxtLink to="/casamentos" class="contents">
                <UICards title="Casamentos" :image="casamentos" :isLeft="true" />
            </NuxtLink>

            <NuxtLink to="/chaDeBebe" class="contents">
                <UICards title="Chá de Bebê" :image="chaDeBebe" :isLeft="false" />
            </NuxtLink>

            <NuxtLink to="/esportes" class="contents">
                <UICards title="Esportes" :image="esportes" :isLeft="true" />
            </NuxtLink>

            <NuxtLink to="/vida" class="contents">
                <UICards title="Vida" :image="vida" :isLeft="false" />
            </NuxtLink>

            <NuxtLink to="" class="contents">
                <UICards title="Aniversários" :image="aniversarios" :isLeft="true" />
            </NuxtLink>

        </div>
    </div>
</template>


<script>
const aniversarios = "/images/aniversarios.jpg";
const casamentos = "/images/casamentos.jpg";
const chaDeBebe = "/images/chaDeBebe.jpg";
const esportes = "/images/esportes.jpg";
const ensaios = "/images/ensaios.jpg";
const vida = "/images/natureza9.jpg";

export default {
    setup() {
        return {
            aniversarios,
            casamentos,
            chaDeBebe,
            esportes,
            ensaios,
            vida
        }
    }
}
</script>

<style scoped>
/* .card-hover {
    transition: transform 0.3s, box-shadow 0.3s;
}

.card-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
} */
</style>
<template>

    <div id="barra-superior">
        <NuxtLink to="/" class="icon-link">
            <img class="icon" src="/public/images/logo.png" alt="next icon">
        </NuxtLink>
        <ul class="lista">
            <li>
                <NuxtLink class="custom-link font-sans" to="/portifolio">Portifólio</NuxtLink>
            </li>
            <li>
                <NuxtLink class="custom-link font-sans" to="/sobre">Sobre mim</NuxtLink>
            </li>
            <li>
                <NuxtLink class="custom-link font-sans" to="/servicos">Serviços</NuxtLink>
            </li>
            <li>
                <NuxtLink class="custom-link font-sans" to="/contatos">Contato</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>
#barra-superior {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: transparent;
    padding: 10px 20px;
}

.lista {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin-left: auto;
}

.icon {
    height: 70px;
    width: 70px;
    margin-right: 10px;
}

#titulo-barra {
    color: var(--color-text-light);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin: 0 15px;
}

.custom-link {
    text-decoration: none;
    color: inherit;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>
<template>
    <div id="barra-superior">
        <img class="icon" src="/public/favicon.ico" alt="next icon">
        <h1 id="titulo-barra">KF</h1>
        <ul class="lista">
            <li>
                <NuxtLink class="custom-link" to="/portifolio">Portifólio</NuxtLink>
            </li>
            <li>
                <NuxtLink class="custom-link" to="/sobre">Sobre mim</NuxtLink>
            </li>
            <li>
                <NuxtLink class="custom-link" to="/servicos">Serviços</NuxtLink>
            </li>
            <li>
                <NuxtLink class="custom-link" to="/contatos">Contato</NuxtLink>
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
    /* Itens na barra superior em linha */
    align-items: center;
    /* Centraliza verticalmente os itens */
    width: 100%;
    /* Largura total da barra */
    background-color: transparent;
    /* Cor de fundo da barra */
    padding: 10px 20px;
    /* Espaçamento interno da barra */
}

.lista {
    display: flex;
    flex-direction: row;
    /* Itens da lista em linha */
    color: var(--color-text-light);
    /* Cor do texto */
    padding: 0;
    /* Remove padding do ul */
    margin-left: auto;
    /* Move a lista para a direita */
}

.icon {
    height: 50px;
    width: 50px;
    margin-right: 10px;
    /* Espaço entre o ícone e o título */
}

#titulo-barra {
    color: var(--color-text-light);
    /* Cor do título */
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    /* Fonte do título */
    margin: 0;
    /* Remove margem do título */
}

ul {
    list-style: none;
    /* Remove a bolinha da lista */
    padding: 0;
    /* Remove padding da lista */
}

ul li {
    margin: 0 15px;
    /* Espaçamento horizontal entre os itens da lista */
}

.custom-link {
    text-decoration: none;
    /* Remove o sublinhado do link */
    color: inherit;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    /* Herda a cor do elemento pai */
}
</style>
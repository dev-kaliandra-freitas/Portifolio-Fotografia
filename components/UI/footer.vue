<template>
    <div id="barra-inferior">
        <ul class="lista">
            <li>
                <NuxtLink class="custom-link" to="/">Política de privacidade</NuxtLink>
            </li>
            <li>
                <NuxtLink class="custom-link" to="/">Política de Cookies</NuxtLink>
            </li>
        </ul>
        <ul class="copyright">
            <li>
                <NuxtLink class="custom-link" to="/">&copy; 2024 Kaliandra Freitas Developer</NuxtLink>
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
    font-size: small; /* Tamanho da fonte */
    text-decoration: none; /* Remove o sublinhado do link */
    color: inherit; /* Herda a cor do elemento pai */
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
</style>

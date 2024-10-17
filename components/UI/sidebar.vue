<template>
    <div>
        <div class="flex justify-between">
            <NuxtLink to="/" class="icon-link">
                <img class="icon" src="/public/images/logo.png" alt="next icon">
            </NuxtLink>
            <button class="toggle-button" @click="toggleMenu">
                &#9776;
            </button>
        </div>
        <div id="sidebar" :class="{ 'active': isActive }">
            <ul class="menu-list">
                <li>
                    <NuxtLink class="custom-link font-sans" to="/portifolio">Portifólio</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="menu-item" to="/sobre">Sobre</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="menu-item" to="/servicos">Serviços</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="menu-item" to="/contatos">Contato</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isActive = !this.isActive;
        },
    },
}
</script>

<style scoped>
.toggle-button {
    background-color: transparent;
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    z-index: 1001;
}

.icon {
    height: 70px;
    width: 70px;
    margin-right: 10px;
}

#sidebar {
    position: fixed;
    top: 0;
    right: -250px;
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    transition: right 0.3s ease;
    padding: 20px;
    z-index: 1000;
}

#sidebar.active {
    right: 0;
}

.menu-list {
    list-style: none;
    padding: 0;
}

.menu-item {
    color: white;
    text-decoration: none;
    display: block;
    padding: 10px 0;
}

@media (max-width: 760px) {
    #sidebar {
        right: -100%;
    }

    #sidebar.active {
        right: 0;
    }

    .icon {
    height: 50px;
    width: 50px;
    margin-right: 10px;
}
}
</style>
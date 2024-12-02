<template>
    <div class="search-area">
        <h1 class="title">Kaliandra Freitas</h1>
        <p>FOTOGRAFIA</p>
    </div>
</template>

<script>

</script>

<style scoped>
.search-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
}


.title {
    margin-top: 30%;
    margin-bottom: 10px;
    font-family: 'Cinzel Decorative', serif;
}

h1 {
    color: aliceblue;
    font-size: xx-large;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

p {
    font-size: large;
    color: aliceblue;
    font-family: 'Julius Sans One', sans-serif;
}

@media (max-width: 760px) {
    .search-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
    }

    .title {
        margin-top: 50%;
        font-family: 'Cinzel Decorative', serif;
    }

    h1 {
        color: aliceblue;
        font-size: x-large;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        white-space: nowrap; /* Impede quebras de linha */
        overflow: hidden; 
    }

    p {
        font-size: large;
        color: aliceblue;
        font-family: 'Julius Sans One', sans-serif;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .search-area {
        width: 100%; 
    }

    .title {
        margin-top: 5%; 
        font-size: xx-large;
    }

    h1 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1.2rem;
    }
}
</style>
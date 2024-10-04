<template>
    <div class="home">
        <div>
            <UIHeader></UIHeader>
        </div>
        <div class="principal-container">
            <Principal class="principal">
                <template>
                </template>
            </Principal>
        </div>
        <div>
            <UIFooter></UIFooter>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url('/static/background1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
}


.principal-container {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}
</style>
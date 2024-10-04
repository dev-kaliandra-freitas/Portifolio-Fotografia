<template>
    <div>
        <fieldset class="field">
            <label for="pesquisa"></label>
            <input type="text">
        </fieldset>
    </div>
</template>

<script setup>

</script>

<style scoped>
.field {
    border: none;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid #ccc;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: border-color 0.3s ease-in-out;
}

input:focus {
    border-color: var(--color-midle-green) 
}
</style>
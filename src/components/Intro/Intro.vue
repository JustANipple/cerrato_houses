<script setup></script>

<template>
    <header class="header">
        <div class="intro">
            <h1>Homes That Match.</h1>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
        <button>Book now</button>
        <div class="isometric">
            <img src="/isometric_room.png" alt="isometric room" />
        </div>
    </header>
</template>

<style scoped>
.header {
    padding-top: 0.5rem;
    padding-inline: var(--mobile-padding-inline);
    background-color: var(--secondary-color);
    display: grid;
    row-gap: 1rem;
}

.intro {
    display: grid;
    row-gap: 0.5rem;
    color: var(--tertiary-color);
}

h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 100%;
}

p {
    font-size: 16px;
    font-weight: 500;
}

button {
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    color: var(--primary-color);
    max-width: fit-content;
    padding-block: 0.25rem;
    padding-inline: 1rem;
}

.isometric {
    margin-top: 1rem;
    height: 232px;
}
</style>

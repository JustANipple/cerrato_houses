<script setup>
import Features from './Features.vue'
import House from './House.vue'
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
</script>

<template>
    <header class="header">
        <NavBar />
        <div class="intro">
            <h1>Homes That Match.</h1>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
        <button>Book now</button>
        <div class="isometric">
            <img src="/isometric_room.png" alt="isometric room" />
        </div>
    </header>
    <section class="discover">
        <h2>Discover our houses</h2>
        <div class="houses">
            <House
                :image="'/living_room.JPG'"
                :price="'211'"
                :title="'Casa di Guarene'"
                :address="'Guarene, 12050, CN, Italy'"
                :beds="'1'"
                :baths="'1'"
                :sqft="'60'"
            />
            <House
                :image="'/window_view.JPG'"
                :price="'211'"
                :title="'Casa di Guarene'"
                :address="'Guarene, 12050, CN, Italy'"
                :beds="'1'"
                :baths="'1'"
                :sqft="'60'"
            />
        </div>
    </section>
    <Features />
    <Footer />
</template>

<style scoped>
.header {
    padding-top: 1rem;
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
    height: 220px;
}

.discover {
    padding-top: 8rem;
    padding-bottom: 3rem;
    background-color: var(--tertiary-color);
    display: grid;
    row-gap: 2rem;
}

h2 {
    font-size: 20px;
    font-weight: 600px;
    text-align: center;
    color: var(--secondary-color);
}

.houses {
    display: grid;
    row-gap: 1rem;
}
</style>

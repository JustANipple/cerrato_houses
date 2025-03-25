<script setup>
import House from './House.vue'
</script>

<template>
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
</template>

<style scoped>
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
    padding-inline: var(--mobile-padding-inline);
    display: grid;
    row-gap: 1rem;
}

@media screen and (min-width: 1024px) {
    .discover {
        padding-inline: var(--desktop-padding-inline);
        place-content: center;
        padding-bottom: 8rem;
    }

    h2 {
        font-size: 30px;
        font-weight: 600;
        text-align: left;
    }

    .houses {
        padding-inline: unset;
        display: flex;
        gap: 3rem;
        align-items: center;
    }
}
</style>

<script setup>
import House from './House.vue'
</script>

<template>
    <section class="discover">
        <div class="discoverContainer">
            <Transition appear name="title">
                <h2>Discover our house</h2>
            </Transition>
            <Transition appear name="house">
                <div class="houses">
                    <House
                        :image="'/living_room.JPG'"
                        :price="'140'"
                        :title="'Vista Langhe'"
                        :address="'Guarene, 12050, CN, Italy'"
                        :beds="'1'"
                        :baths="'1'"
                        :sqft="'60'"
                        :pool="'1'"
                    />
                </div>
            </Transition>
        </div>
    </section>
</template>

<style scoped>
.discover {
    padding-top: 8rem;
    padding-bottom: 3rem;
    background-color: var(--tertiary-color);
}

.discoverContainer {
    display: grid;
    row-gap: 3rem;
}

h2 {
    font-size: var(--fs-xl);
    text-align: center;
    color: var(--secondary-color);
}

.houses {
    padding-inline: var(--mobile-padding-inline);
    display: grid;
    place-content: center;
    row-gap: 1rem;
}

@media screen and (min-width: 1024px) {
    .discover {
        padding-inline: var(--desktop-padding-inline);
        padding-bottom: 8rem;
        display: flex;
        justify-content: center;
    }

    .discoverContainer {
        width: 100%;
        max-width: var(--max-w);
    }

    h2 {
        text-align: left;
    }

    .houses {
        padding-inline: unset;
        display: flex;
        gap: 3rem;
        justify-content: flex-start;
        align-items: center;
    }

    /* Animation */
    .title-enter-from {
        transform: translateY(-100%);
        opacity: 0;
    }

    .title-enter-active {
        transition:
            transform 1s ease-out,
            opacity 1s ease-out;
    }

    .title-enter-to {
        transform: translateY(0);
        opacity: 1;
    }

    .house-enter-from {
        transform: translateX(100%);
        opacity: 0;
    }

    .house-enter-active {
        transition:
            transform 1s ease-out,
            opacity 1s ease-out;
    }

    .house-enter-to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>

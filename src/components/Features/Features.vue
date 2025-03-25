<script setup>
import { FaBicycle } from 'vue-icons-plus/fa'
import Feature from './Feature.vue'
</script>

<template>
    <section class="featureSection">
        <h2 class="title">How we can help you</h2>
        <div class="features">
            <Feature
                :icon="FaBicycle"
                :title="'Find out how much you can afford'"
                :description="'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'"
                :link="'/placeholder'"
            />
            <hr class="divider" />
            <Feature
                :icon="FaBicycle"
                :title="'Find out how much you can afford'"
                :description="'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'"
                :link="'/placeholder'"
            />
            <hr class="divider" />
            <Feature
                :icon="FaBicycle"
                :title="'Find out how much you can afford'"
                :description="'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'"
                :link="'/placeholder'"
            />
        </div>
    </section>
</template>

<style scoped>
.featureSection {
    background-color: var(--secondary-color);
    padding-block: 2rem;
    padding-inline: var(--mobile-padding-inline);
    display: grid;
    row-gap: 2rem;
}

.title {
    color: var(--tertiary-color);
    text-align: center;
}

.features {
    display: grid;
    row-gap: 2rem;
}

.divider {
    border-top: 1px solid var(--primary-color);
    border-bottom: unset;
}

@media screen and (min-width: 1024px) {
    .featureSection {
        padding-block: 5rem;
        padding-inline: var(--desktop-padding-inline);
        place-content: center;
    }

    .title {
        font-size: 30px;
        font-weight: 600;
        text-align: left;
    }

    .features {
        display: flex;
        gap: 2rem;
    }

    .divider {
        border-color: var(--primary-color);
        border-right: unset;
    }
}
</style>

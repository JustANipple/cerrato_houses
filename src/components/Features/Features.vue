<script setup>
import { FaBicycle, FaWineGlass, FaCarSide } from 'vue-icons-plus/fa'
import Feature from './Feature.vue'
</script>

<template>
    <section class="featureSection">
        <div class="featureSectionContainer">
            <h2 class="title">Your next adventure starts here</h2>
            <div class="features">
                <Feature
                    :icon="FaBicycle"
                    :title="'Get your bike now'"
                    :description="'Explore winding country roads, charming villages, and panoramic views of Langhe and Roero'"
                    :link="'/bikes'"
                />
                <hr class="divider" />
                <Feature
                    :icon="FaWineGlass"
                    :title="'Truffle Hunts & Fine Wines Await'"
                    :description="'Uncover the secrets of truffle hunting, guided tours of historic cellars & wine tastings'"
                    :link="'/faqs'"
                />
                <hr class="divider" />
                <Feature
                    :icon="FaCarSide"
                    :title="'Private Transfers on Demand'"
                    :description="'Travel with our NCC service, available for private transfers, events and more'"
                    :link="'/faqs'"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.featureSection {
    background-color: var(--secondary-color);
    padding-block: 2rem;
    padding-inline: var(--mobile-padding-inline);
    display: flex;
    justify-content: center;
}

.featureSectionContainer {
    display: grid;
    place-content: center;
    row-gap: 3rem;
    width: 100%;
    max-width: var(--max-w);
}

.title {
    color: var(--tertiary-color);
    text-align: center;
    font-size: var(--fs-xl);
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

    .featureSectionContainer {
        place-content: unset;
    }

    .title {
        text-align: left;
    }

    .features {
        display: flex;
        align-items: center;
        max-width: var(--max-w);
        width: 100%;
        gap: 1rem;
    }

    .divider {
        border-color: var(--primary-color);
        border-right: unset;
        border-top: unset;
        flex: 0.125;
        height: 100%;
    }
}
</style>

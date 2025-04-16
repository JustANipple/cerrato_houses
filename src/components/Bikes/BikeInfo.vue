<script setup>
import Faq from '../Faqs/Faq.vue'
</script>

<template>
    <section class="bikeInfo">
        <div class="bikeInfoContainer">
            <div class="header">
                <div class="text">
                    <h2 class="title">
                        Straightforwards steps to get your dream car
                    </h2>
                    <p class="subtitle">
                        In Warsaw, our luxury bike fleet boasts all major
                        brands. with FREE delivery
                    </p>
                </div>
                <img
                    src="/bike_horizontal.png"
                    alt="bike horizontal"
                    class="bikeImg"
                />
            </div>
            <div class="body">
                <Faq
                    :number="'01'"
                    :title="'Individual Bike rent'"
                    :description="'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '"
                />
                <div class="divider"></div>
                <Faq
                    :number="'02'"
                    :title="'Individual Bike rent'"
                    :description="'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '"
                />
                <div class="divider"></div>
                <Faq
                    :number="'03'"
                    :title="'Individual Bike rent'"
                    :description="'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '"
                />
                <div class="divider"></div>
                <Faq
                    :number="'04'"
                    :title="'Individual Bike rent'"
                    :description="'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '"
                />
                <div class="divider"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bikeInfo {
    padding-block: 3rem;
    padding-inline: var(--mobile-padding-inline);
    background-color: var(--secondary-color);
    color: var(--tertiary-color);
}

.bikeInfoContainer {
    display: grid;
    row-gap: 3rem;
}

.header {
    display: grid;
    row-gap: 2rem;
}

.text {
    text-align: center;
    display: grid;
    row-gap: 0.5rem;
}

.title {
    line-height: 130%;
}

.divider {
    width: 100%;
    border-top: unset;
    border-bottom: 1px solid var(--primary-color);
}

.body {
    display: grid;
    row-gap: 1.5rem;
}

@media screen and (min-width: 768px) {
    .bikeInfo {
        padding-block: 5rem;
        display: flex;
        justify-content: center;
    }

    .bikeInfoContainer {
        display: flex;
        align-items: flex-start;
        gap: 3rem;
        width: 100%;
        max-width: var(--max-w);
    }

    .header {
        flex: 1;
        place-items: center;
        max-height: fit-content;
    }

    .text {
        place-items: center;
    }

    .subtitle {
        max-width: 20rem;
    }

    .body {
        flex: 1;
    }

    .bikeImg {
        max-width: 20rem;
    }
}
</style>

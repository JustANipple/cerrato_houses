<script setup>
import Faq from '../Faqs/Faq.vue'
</script>

<template>
    <section class="bikeInfo">
        <div class="bikeInfoContainer">
            <Transition appear name="header">
                <div class="header">
                    <div class="text">
                        <h2 class="title">Discover your journey</h2>
                        <p class="subtitle">
                            Dive into the world of e-bikes and discover the
                            possibilities of an electric vehicle
                        </p>
                    </div>
                    <img
                        src="/bike_horizontal.png"
                        alt="bike horizontal"
                        class="bikeImg"
                    />
                </div>
            </Transition>
            <div class="body">
                <Transition appear name="faqOne">
                    <Faq
                        :number="'01'"
                        :title="'Guided adventure'"
                        :description="' Our e-bike tours are designed around your wishes! Whether it\'s a half-day or a full-day ride, we craft the perfect route for your group. We require a minimum number of riders, and we can transport up to 8 bikes to kickstart your journey!'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqTwo">
                    <Faq
                        :number="'02'"
                        :title="'E-bike equipment'"
                        :description="'Integrated Bosch display computer, Bosch charger (available for rentals longer than one day), Attached backpack for your essentials, Complete tire repair kit, Serialized battery key (for rentals longer than one day), Seat adjustment key, High-quality helmet for safe riding'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqThree">
                    <Faq
                        :number="'03'"
                        :title="'Custom Tour'"
                        :description="'Creating your own custom tour is easy! During a guided ride, you can visit scenic viewpoints, stop at local wineries, explore historic villages, tour ancient buildings, ride through beautiful vineyards, and much more. Just give us a call — your adventure starts here!'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqFour">
                    <Faq
                        :number="'04'"
                        :title="'E-Bike Model'"
                        :description="'We proudly rent CUBE e-bikes — engineered in Germany for performance and reliability. Every bike features a 625Wh battery for long-lasting rides, a Shimano 9-speed drivetrain for smooth gear changes, and digital display to easily select your riding mode for any terrain. Reserve yours today and experience the difference!'"
                    />
                </Transition>
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

    /* Animations */
    .header-enter-from {
        transform: translateY(-100px);
        opacity: 0;
    }

    .header-enter-active {
        transition:
            transform 1s ease-in-out,
            opacity 1s ease-in-out;
    }

    .header-enter-to {
        transform: translateY(0px);
        opacity: 1;
    }

    .faqOne-enter-from,
    .faqTwo-enter-from,
    .faqThree-enter-from,
    .faqFour-enter-from {
        transform: translateX(100%);
        opacity: 0;
    }

    .faqOne-enter-active,
    .faqTwo-enter-active,
    .faqThree-enter-active,
    .faqFour-enter-active {
        transition:
            transform 1s ease-in-out,
            opacity 1s ease-in-out;
    }

    .faqOne-enter-to,
    .faqTwo-enter-to,
    .faqThree-enter-to,
    .faqFour-enter-to {
        transform: translateX(0);
        opacity: 1;
    }

    .faqOne-enter-active {
        transition-delay: 0.125s;
    }

    .faqTwo-enter-active {
        transition-delay: 0.25s;
    }

    .faqThree-enter-active {
        transition-delay: 0.375s;
    }

    .faqFour-enter-active {
        transition-delay: 0.5s;
    }
}
</style>

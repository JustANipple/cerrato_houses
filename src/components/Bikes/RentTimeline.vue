<script setup>
import TimelineStep from './timelineStep.vue'
import { FaBicycle, FaPhone, FaMapPin, FaCube } from 'vue-icons-plus/fa'
</script>

<template>
    <section class="rentTimeline">
        <div class="rentTimelineContainer">
            <Transition appear name="intro">
                <div class="intro">
                    <h2 class="title">
                        Straightforward steps to get your dream bike
                    </h2>
                    <p>
                        Discover Langhe and Roero in the best way: explore
                        on your own or join our guided tours
                    </p>
                </div>
            </Transition>
            <div class="timeline">
                <Transition appear name="stepOne">
                    <TimelineStep
                        :number="1"
                        :icon="FaPhone"
                        :title="'Book Your Bike'"
                        :description="'Write an email or call us to reserve your bike'"
                        :isOdd="false"
                    />
                </Transition>
                <Transition appear name="stepTwo">
                    <TimelineStep
                        :number="2"
                        :icon="FaBicycle"
                        :title="'Pick Up Your Bike'"
                        :description="'We deliver your bike to your doorstep'"
                        :isOdd="true"
                    />
                </Transition>
                <Transition appear name="stepThree">
                    <TimelineStep
                        :number="3"
                        :icon="FaMapPin"
                        :title="'Choose your journey'"
                        :description="'Make your trip unforgettable by riding through Langhe'"
                        :isOdd="false"
                    />
                </Transition>
                <Transition appear name="stepFour">
                    <TimelineStep
                        :number="4"
                        :icon="FaCube"
                        :title="'Get Your Bike Back'"
                        :description="'We deliver your bike back to our warehouse'"
                        :isOdd="true"
                    />
                </Transition>
            </div>
        </div>
    </section>
</template>

<style scoped>
.rentTimeline {
    background-color: var(--tertiary-color);
    padding-block: 2rem;
    padding-inline: var(--mobile-padding-inline);
}

.rentTimelineContainer {
    display: grid;
    row-gap: 3rem;
}

.intro {
    display: grid;
    row-gap: 0.5rem;
    text-align: center;
}

.title {
    line-height: 130%;
}

.timeline {
    display: grid;
    row-gap: 2rem;
}

@media screen and (min-width: 650px) {
    .rentTimelineContainer {
        place-items: center;
    }
    .timeline {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 3rem;
        max-width: fit-content;
    }
}

@media screen and (min-width: 1240px) {
    .rentTimeline {
        padding-block: 4rem;
    }
    .timeline {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: unset;
    }
}

/* Animations */
.intro-enter-from {
    transform: translateY(100%);
    opacity: 0;
}
.intro-enter-active {
    transition:
        transform 1s ease-out,
        opacity 1s ease-out;
}
.intro-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.stepOne-enter-from,
.stepThree-enter-from {
    transform: translateX(100%);
    opacity: 0;
}
.stepOne-enter-active,
.stepThree-enter-active {
    transition:
        transform 1s ease-out,
        opacity 1s ease-out;
}
.stepOne-enter-to,
.stepThree-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.stepTwo-enter-from,
.stepFour-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}
.stepTwo-enter-active,
.stepFour-enter-active {
    transition:
        transform 1s ease-out,
        opacity 1s ease-out;
}
.stepTwo-enter-to,
.stepFour-enter-to {
    transform: translateX(0);
    opacity: 1;
}
</style>

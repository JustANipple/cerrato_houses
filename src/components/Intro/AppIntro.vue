<script setup>
import { FaAirbnb } from 'vue-icons-plus/fa'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <header class="header">
        <div class="headerContainer">
            <Transition appear name="introText">
                <div class="intro">
                    <h1>{{ props.title }}</h1>
                    <small>{{ props.description }}</small>
                    <div class="externalLinks">
                        <a
                            href="https://www.airbnb.com/rooms/988230275664339719"
                            target="_blank"
                            class="externalLinkOne"
                            ><FaAirbnb /> Book</a
                        >
                        <a
                            href="https://www.booking.com/hotel/it/vista-langhe-cerratohouses.it.html"
                            target="_blank"
                            class="externalLinkTwo"
                        >
                            <img
                                src="/booking_icon.svg"
                                alt="booking icon"
                                class="bookingIcon"
                            />
                            Book</a
                        >
                    </div>
                </div>
            </Transition>
            <Transition appear name="introImage">
                <div class="isometric">
                    <img :src="props.imageUrl" alt="isometric room" />
                </div>
            </Transition>
        </div>
    </header>
</template>

<style scoped>
.header {
    padding-top: 0.5rem;
    padding-inline: var(--mobile-padding-inline);
    background-color: var(--secondary-color);
}

.headerContainer {
    display: grid;
    justify-items: center;
    row-gap: 1rem;
}

.intro {
    display: grid;
    place-content: center;
    row-gap: 1rem;
    color: var(--tertiary-color);
    width: 100%;
}

.externalLinks {
    display: flex;
    gap: 1rem;
}

.externalLinkOne,
.externalLinkTwo {
    padding: 0.5rem 1.5rem;
    background-color: var(--primary-color);
    color: var(--tertiary-color);
    max-width: fit-content;
    text-decoration: none;
    border-radius: 0.5rem;
    margin-top: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.externalLinkTwo {
    background-color: transparent;
    border: 2px solid var(--tertiary-color);
}

.bookingIcon {
    width: 20px;
    height: 20px;
}

h1 {
    font-size: var(--fs-xxl);
    line-height: 120%;
    max-width: 525px;
}

small {
    font-size: var(--fs-md);
    max-width: 15rem;
}

.button {
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    color: var(--primary-color);
    max-width: fit-content;
    padding-block: 0.25rem;
    padding-inline: 1rem;
    margin-top: 1rem;
    margin-right: auto;
    font-size: var(--fs-md);
    text-decoration: none;
}

.isometric {
    margin-top: 1rem;
    height: 226px;
    width: 311px;
}

@media screen and (min-width: 1024px) {
    .header {
        padding-block: 5rem;
        padding-inline: var(--desktop-padding-inline);
        display: flex;
        justify-content: center;
    }

    .headerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        width: 100%;
        max-width: var(--max-w);
    }

    .intro {
        flex: 1;
        place-content: start;
    }

    small {
        max-width: 20rem;
    }

    button {
        padding-block: 0.5rem;
    }

    .isometric {
        flex: 1;
    }

    .isometric img {
        max-width: 550px;
        margin-top: -5.75rem;
        position: relative;
        left: 7rem;
    }

    .externalLinkOne,
    .externalLinkTwo {
        transition: transform 0.25s ease-out;
    }

    .externalLinkOne:hover,
    .externalLinkTwo:hover {
        transform: scale(1.05);
    }
}

@media screen and (min-width: 1300px) {
    .header {
        padding-block: 6rem;
    }

    .isometric {
        max-width: 600px;
        margin-bottom: -0.85rem;
    }

    .isometric img {
        left: unset;
        margin-left: auto;
    }
}

/* Animations */
.introText-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.introText-enter-active {
    transition:
        transform 1s ease-out,
        opacity 1s ease-out;
}

.introText-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.introImage-enter-from {
    transform: scale(0);
    opacity: 0;
}

.introImage-enter-active {
    transition:
        transform 1s ease-out,
        opacity 1s ease-out;
}

.introImage-enter-to {
    transform: scale(1);
    opacity: 1;
}
</style>

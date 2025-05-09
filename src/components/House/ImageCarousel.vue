<script setup>
import { computed, ref } from 'vue'
import { FaCircle, FaAngleLeft, FaAngleRight } from 'vue-icons-plus/fa'

const props = defineProps({
    images: {
        type: Array,
        required: true,
    },
})

const currentImage = ref(0)

function changeImage(direction) {
    currentImage.value += direction
    if (currentImage.value < 0) {
        currentImage.value = props.images.length - 1
    } else if (currentImage.value >= props.images.length) {
        currentImage.value = 0
    }
}

const currentPosition = computed(() => {
    return `translateX(calc(${Math.floor(props.images.length / 2)} * 100% + ${currentImage.value * -100}%))`
})

const previewShown = ref(false)

function showPreview(value) {
    if (previewShown.value) {
        previewShown.value = false
        document.querySelector('body').style.overflow = 'auto'
    } else {
        currentImage.value = value
        previewShown.value = true
        document.querySelector('body').style.overflow = 'hidden'
    }
}
</script>

<template>
    <div class="carousel">
        <div class="carouselContainer">
            <Transition appear name="images">
                <ul class="images">
                    <li
                        class="image"
                        v-for="(image, index) in props.images"
                        :key="image"
                        :style="{
                            transform: currentPosition,
                        }"
                        @click="showPreview(index)"
                    >
                        <img :src="image" />
                    </li>
                </ul>
            </Transition>
            <button class="left" @click="changeImage(-1)">
                <FaAngleLeft />
            </button>
            <button class="right" @click="changeImage(1)">
                <FaAngleRight />
            </button>
            <ul class="dots">
                <li
                    v-for="(_, index) in props.images"
                    :key="index"
                    class="dot"
                    :class="{ active: currentImage === index }"
                    @click="currentImage = index"
                >
                    <FaCircle />
                </li>
            </ul>
        </div>
    </div>
    <div class="preview" v-show="previewShown">
        <button class="previewLeft" @click="showPreview">
            <FaAngleLeft />
        </button>
        <img :src="props.images[currentImage]" />
    </div>
</template>

<style scoped>
.carousel {
    position: relative;
}

ul {
    list-style: none;
    padding: unset;
}

/* Images */
.images {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 350px;
}

.image {
    flex-shrink: 0;
    width: 100%;
    transition: transform 0.5s ease-in-out;
    height: inherit;
    cursor: pointer;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Arrows */
.left,
.right {
    background-color: unset;
    border: unset;
    padding: unset;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
}

.left {
    left: 0;
}

.right {
    right: 0;
}

.left svg,
.right svg {
    --size: 40px;
    height: var(--size);
    width: var(--size);
    color: var(--tertiary-color);
}

/* Dots */
.dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-inline: auto;
    padding-block: 1rem;
}

.dot {
    --size: 12px;
    cursor: pointer;
    height: var(--size);
    width: var(--size);
    color: var(--tertiary-color);
    transition: all 0.5s ease-in-out;
}

.dot.active {
    color: var(--primary-color);
}

.preview {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: black;
    display: flex;
    align-items: center;
}

.previewLeft {
    background-color: unset;
    padding: unset;
    border: unset;
    position: absolute;
    color: var(--tertiary-color);
    top: 1rem;
    left: 1rem;
    cursor: pointer;
}

.preview img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding-block: 5rem;
}

@media screen and (min-width: 744px) {
    .carousel {
        padding-block: 3rem;
        padding-inline: 2rem;
        display: flex;
        justify-content: center;
    }

    .carouselContainer {
        width: 100%;
        max-width: var(--max-w);
        border-radius: 1rem;
        overflow: hidden;
    }

    .images {
        height: unset;
        display: grid;
        gap: 0.5rem;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .image {
        transform: unset !important;
        height: unset;
        aspect-ratio: 1 / 1;
    }

    .image:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .image:nth-child(2) {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .image:nth-child(3) {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .image:nth-child(4) {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .image:nth-child(5) {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .left,
    .right {
        display: none;
    }

    .dots {
        display: none;
    }

    /* Animations */
    .images-enter-from {
        transform-origin: center;
        transform: translateY(100%);
        opacity: 0;
    }

    .images-enter-active {
        transition:
            transform 0.5s ease-in-out,
            opacity 0.5s ease-in-out;
    }

    .images-enter-to {
        transform-origin: center;
        transform: translateY(0%);
        opacity: 1;
    }

    .image {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .image img {
        transition: all 0.5s ease-in-out;
        display: block;
    }

    .image::after {
        content: '';
        position: absolute;
        top: 0;
        left: -75%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
        );
        transform: skewX(-25deg);
    }

    .image:hover::after {
        animation: shine 0.75s ease-in-out;
    }

    @keyframes shine {
        from {
            left: -75%;
        }
        to {
            left: 125%;
        }
    }
}
</style>

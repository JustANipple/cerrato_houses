<script setup>
import { ref } from 'vue'
import { FaPlus, FaMinus } from 'vue-icons-plus/fa'

const props = defineProps({
    number: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

const isOpen = ref(false)
</script>

<template>
    <div class="faq">
        <div class="header">
            <h3 class="title">
                {{ props.number ? props.number + '&nbsp;&nbsp;' : ''
                }}{{ props.title }}
            </h3>
            <button class="button" @click="isOpen = !isOpen">
                <FaPlus class="icon" v-if="!isOpen" />
                <FaMinus class="icon" v-else />
            </button>
        </div>
        <Transition>
            <p class="description" v-if="isOpen">
                {{ props.description }}
            </p>
        </Transition>
    </div>
</template>

<style scoped>
.faq {
    display: grid;
    row-gap: 1rem;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
}

.description {
    opacity: 60%;
    max-height: 10rem;
    overflow: hidden;
}

.button {
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    background-color: unset;
    border: unset;
}

.button svg {
    max-width: 20px;
}

.icon {
    aspect-ratio: 1/1;
    color: var(--primary-color);
}

.v-enter-active,
.v-leave-active {
    transition: all 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    max-height: 0;
    opacity: 0;
}

@media screen and (min-width: 1024px) {
    .description {
        padding-right: 4rem;
    }
}
</style>

<script setup>
import { ref } from 'vue'
import { FaPlus, FaMinus } from 'vue-icons-plus/fa'

const props = defineProps({
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
            <h3 class="title">{{ props.title }}</h3>
            <button class="button" @click="isOpen = !isOpen">
                <FaPlus size="32" class="icon" v-if="!isOpen" />
                <FaMinus size="32" class="icon" v-else />
            </button>
        </div>
        <p class="description" v-if="isOpen">{{ props.description }}</p>
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
}

.button {
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    background-color: unset;
    border: unset;
}

.icon {
    aspect-ratio: 1/1;
    color: var(--primary-color);
}
</style>

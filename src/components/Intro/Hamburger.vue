<script setup>
import { ref } from 'vue'

const open = ref(false)
const emits = defineEmits(['open'])

function switchOpen() {
    open.value = !open.value
    emits('open', open.value)
}
</script>

<template>
    <button class="button" @click="switchOpen()">
        <svg
            v-if="!open"
            class="icon"
            :class="{ open: open }"
            aria-hidden="true"
            viewBox="-51.2 -51.2 614.4 614.4"
        >
            <path
                d="M80 96h352v32H80zM80 240h352v32H80zM80 384h352v32H80z"
            ></path>
        </svg>
        <svg
            v-else
            class="icon"
            :class="{ open: open }"
            aria-hidden="true"
            viewBox="0 0 512 512"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 368L144 144M368 144L144 368"
            ></path>
        </svg>
    </button>
</template>

<style scoped>
.button {
    background-color: unset;
    border: none;
    padding: unset;
    z-index: 1;
}

.icon {
    width: 40px;
    height: 40px;
    fill: var(--primary-color);
    font-size: 2.88em;
}

.icon path {
    fill: var(--primary-color);
    stroke: var(--primary-color);
}

.open {
    filter: brightness(0) saturate(100%) invert(13%) sepia(1%)
        saturate(2660%) hue-rotate(295deg) brightness(99%) contrast(86%);
}

@media screen and (min-width: 1024px) {
    .button {
        display: none;
    }
}
</style>

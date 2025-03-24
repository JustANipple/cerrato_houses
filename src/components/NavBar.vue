<script setup>
import { ref } from 'vue'
import NavList from './NavList.vue'
import Hamburger from './Hamburger.vue'

const isOpen = ref(false)

function handleOpen(value) {
    isOpen.value = value
}
</script>

<template>
    <nav class="nav">
        <img
            src="/logo.svg"
            alt="cerrato houses logo"
            class="logo"
            :class="{ open: isOpen }"
        />
        <NavList v-show="isOpen" />
        <Hamburger @open="handleOpen" />
    </nav>
</template>

<style scoped>
.nav {
    padding-block: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    aspect-ratio: 9/10;
    width: 56px;
    z-index: 2;
}

.open {
    filter: brightness(0) saturate(100%) invert(13%) sepia(1%)
        saturate(2660%) hue-rotate(295deg) brightness(99%) contrast(86%);
}
</style>

<script setup>
import { ref } from 'vue'
import NavList from './NavList.vue'
import Hamburger from './Hamburger.vue'

const isOpen = ref(false)

function handleOpen(value) {
    isOpen.value = value
    if (isOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
}
</script>

<template>
    <nav class="nav">
        <img
            src="/logo.svg"
            alt="cerrato houses logo"
            class="logo"
            :class="{
                open: isOpen,
            }"
        />
        <NavList
            :class="{ navEnterActive: isOpen, navLeaveActive: !isOpen }"
        />
        <Hamburger @open="handleOpen" />
    </nav>
</template>

<style scoped>
.nav {
    padding-block: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary-color);
    padding-inline: var(--mobile-padding-inline);
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

.navEnterActive {
    animation: slide-down 0.5s forwards;
}

.navLeaveActive {
    animation: slide-up 0.5s forwards;
}

@keyframes slide-down {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-up {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
    }
}

@media screen and (min-width: 1024px) {
    .logo {
        height: 64px;
    }

    .navEnterActive {
        animation: unset;
    }

    .navLeaveActive {
        animation: unset;
    }
}
</style>

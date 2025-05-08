<script setup>
import { ref } from 'vue'
import NavList from './NavList.vue'

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
        <Transition appear name="nav">
            <div class="navContainer">
                <router-link to="/" class="logoContainer">
                    <img
                        src="/logo.svg"
                        alt="cerrato houses logo"
                        class="logo"
                        :class="{
                            open: isOpen,
                        }"
                    />
                </router-link>
                <NavList
                    :class="{
                        navEnterActive: isOpen,
                        navLeaveActive: !isOpen,
                    }"
                    @close="handleOpen"
                />
                <button class="button" @click="handleOpen(!isOpen)">
                    <svg
                        v-if="!isOpen"
                        class="icon"
                        :class="{ open: isOpen }"
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
                        :class="{ open: isOpen }"
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
            </div>
        </Transition>
    </nav>
</template>

<style scoped>
.nav {
    background-color: var(--secondary-color);
    padding-block: 1rem;
    padding-inline: var(--mobile-padding-inline);
}

.navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logoContainer {
    z-index: 2;
}

.logo {
    aspect-ratio: 9/10;
    width: 56px;
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
    .nav {
        padding-inline: var(--desktop-padding-inline);
        display: flex;
        justify-content: center;
    }

    .navContainer {
        display: flex;
        justify-content: space-between;
        max-width: var(--max-w);
        width: 100%;
    }

    .logo {
        height: 64px;
    }

    .navEnterActive {
        animation: unset;
    }

    .navLeaveActive {
        animation: unset;
    }

    .button {
        display: none;
    }

    /* Animations */
    .nav-enter-from {
        transform: translateY(-100%);
        opacity: 0;
    }

    .nav-enter-active {
        transition: all 1s ease-out;
    }

    .nav-enter-to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>

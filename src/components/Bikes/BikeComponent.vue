<script setup>
const props = defineProps({
    icon: {
        type: Object,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="component">
        <component :is="props.icon" class="icon" size="32" />
        <div class="text">
            <h2 class="name">{{ props.name }}</h2>
            <p class="model">{{ props.model }}</p>
        </div>
    </div>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
    .component {
        display: grid;
        place-items: center;
        max-width: 9rem;
        height: 7rem;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto auto;
        padding-block: 0.25rem;
    }

    .component:nth-child(1) {
        left: -40rem;
        bottom: 21rem;
    }

    .component:nth-child(2) {
        left: -50rem;
    }

    .component:nth-child(3) {
        left: -40rem;
        bottom: -21rem;
    }

    .component:nth-child(4) {
        left: 40rem;
        bottom: 21rem;
    }

    .component:nth-child(5) {
        left: 50rem;
    }

    .component:nth-child(6) {
        left: 40rem;
        bottom: -21rem;
    }

    .icon {
        animation: float 2s infinite ease-in-out;
        transform-origin: center;
        color: var(--tertiary-color);
    }

    .text {
        text-align: center;
        color: var(--tertiary-color);
    }

    .name {
        font-size: var(--fs-base);
        opacity: 50%;
    }

    .model {
        font-size: var(--fs-sm);
    }
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-4px);
    }
}
</style>

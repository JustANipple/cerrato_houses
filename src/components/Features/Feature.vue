<script setup>
const props = defineProps({
    icon: {
        type: Object,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="feature">
        <div class="iconContainer">
            <component :is="props.icon" size="32" class="icon" />
        </div>
        <div class="content">
            <h3 class="title">{{ props.title }}</h3>
            <p class="description">{{ props.description }}</p>
        </div>
        <router-link :to="props.link" class="link">See more</router-link>
    </div>
</template>

<style scoped>
.feature {
    color: var(--tertiary-color);
    display: grid;
    row-gap: 1rem;
}

.iconContainer {
    background-color: var(--tertiary-color);
    border-radius: 50%;
    aspect-ratio: 1/1;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    color: var(--primary-color);
}

.content {
    display: grid;
    row-gap: 0.25rem;
}

.title {
    font-size: 14px;
    font-weight: 600;
}

.description {
    font-size: 11px;
    font-weight: 400;
}

.link {
    padding: 0.25rem 1rem;
    border: 1px solid var(--primary-color);
    background-color: transparent;
    color: var(--primary-color);
    text-decoration: none;
    font-size: 11px;
    font-weight: 400;
    max-width: fit-content;
    border-radius: 5px;
}
</style>

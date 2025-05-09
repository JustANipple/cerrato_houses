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
            <small class="description">{{ props.description }}</small>
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
    padding: 0.125rem;
}

.content {
    display: grid;
    row-gap: 0.5rem;
}

.title {
    font-size: var(--fs-lg);
}

.description {
    font-size: var(--fs-base);
    max-width: 350px;
}

.link {
    padding: 0.25rem 1rem;
    border: 1px solid var(--primary-color);
    background-color: transparent;
    color: var(--primary-color);
    text-decoration: none;
    font-size: var(--fs-base);
    max-width: fit-content;
    border-radius: 5px;
    margin-top: auto;
}

@media screen and (min-width: 1024px) {
    .feature {
        row-gap: 2rem;
        flex: 1;
    }

    .link {
        transition: all 0.25s ease-in-out;
    }

    .link:hover {
        background-color: var(--tertiary-color);
        border-color: transparent;
        font-weight: 600;
    }
}
</style>

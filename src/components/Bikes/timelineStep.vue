<script setup>
const props = defineProps({
    number: {
        type: Number,
        required: true,
    },
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
    isOdd: {
        type: Boolean,
        required: true,
        default: false,
    },
})
</script>

<template>
    <div class="step" :class="{ odd: props.isOdd }">
        <span class="number">{{ props.number }}</span>
        <component :is="props.icon" class="icon" />
        <div class="body" :class="{ odd: props.isOdd }">
            <p class="title">{{ props.title }}</p>
            <p class="description">{{ props.description }}</p>
        </div>
    </div>
</template>

<style scoped>
.step {
    position: relative;
    padding-block: 1.25rem;
    padding-inline: 1rem;
    display: grid;
    place-items: center;
    row-gap: 1rem;
    background-color: white;
    max-width: fit-content;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    color: var(--secondary-color);
    margin-right: auto;
    min-width: 5rem;
}

.odd {
    background-color: var(--secondary-color);
    color: var(--tertiary-color);
    margin-right: unset;
    margin-left: auto;
}

.number {
    position: absolute;
    top: 0;
    left: 0;
    font-size: var(--fs-xl);
    font-weight: 700;
    transform: translate(-50%, -50%);
    color: var(--secondary-color);
}

.odd .number {
    color: var(--primary-color);
}

.icon {
    width: 36px;
    height: 36px;
    color: var(--primary-color);
}

.body {
    text-align: center;
    color: inherit;
}

.title {
    font-size: var(--fs-md);
    font-weight: 600;
}

.description {
    max-width: 15rem;
    font-size: var(--fs-base);
}

@media screen and (min-width: 650px) {
    .step {
        margin: unset;
        flex-basis: 45%;
    }

    .odd {
        margin: unset;
    }
}

@media screen and (min-width: 1240px) {
    .step.odd {
        margin-top: 13rem;
    }
}
</style>

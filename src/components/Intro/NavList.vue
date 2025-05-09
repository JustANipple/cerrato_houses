<script setup></script>

<template>
    <ul class="navList">
        <hr class="divider" />
        <RouterLink to="/house" class="item" @click="$emit('close')">
            <li>Vista Langhe Home</li>
        </RouterLink>
        <RouterLink to="/bikes" class="item" @click="$emit('close')">
            <li>Bikes</li>
        </RouterLink>
        <RouterLink to="/faqs" class="item" @click="$emit('close')">
            <li>Faqs</li>
        </RouterLink>
    </ul>
</template>

<style scoped>
.navList {
    padding: unset;
    text-decoration: unset;
    color: var(--secondary-color);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--tertiary-color);
    padding-block: 5.875rem;
    padding-inline: var(--mobile-padding-inline);
    z-index: 1;
}

.divider {
    border-color: var(--secondary-color);
    border-bottom: unset;
    margin-bottom: 2rem;
}

.item {
    list-style: none;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
}

.item li {
    padding-block: 0.5rem;
}

@media screen and (min-width: 1024px) {
    .navList {
        position: unset;
        background-color: unset;
        padding: unset;
        color: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }

    .divider {
        display: none;
    }

    .item {
        text-transform: capitalize;
        position: relative;
    }

    .item li {
        padding-block: 0.25rem;
    }

    .item::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 0;
        background-color: var(--primary-color);
        transition: width 0.3s ease;
    }

    .item:hover::after {
        width: 100%;
    }
}
</style>

<script setup></script>

<template>
    <ul class="navList">
        <hr class="divider" />
        <RouterLink to="/" class="item">
            <li>Home</li>
        </RouterLink>
        <RouterLink to="/bikes" class="item">
            <li>Bikes</li>
        </RouterLink>
        <RouterLink to="/faqs" class="item">
            <li>Faqs</li>
        </RouterLink>
        <RouterLink to="/contacts" class="item">
            <li>Contacts</li>
        </RouterLink>
        <RouterLink to="/privacy" class="item">
            <li>Privacy policy</li>
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
    background-color: rgb(204, 204, 183);
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
    font-size: 20px;
    font-weight: 600;
}

.item li {
    padding-block: 0.5rem;
}
</style>

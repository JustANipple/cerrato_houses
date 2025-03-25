<script setup></script>

<template>
    <ul class="navList">
        <hr class="divider" />
        <RouterLink to="/bikes" class="item">
            <li>Bikes</li>
        </RouterLink>
        <RouterLink to="/houseOne" class="item">
            <li>Casa di guarene 1</li>
        </RouterLink>
        <RouterLink to="/houseTwo" class="item">
            <li>Casa di guarene 2</li>
        </RouterLink>
        <RouterLink to="/contacts" class="item">
            <li>Contacts</li>
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
    font-size: 20px;
    font-weight: 600;
}

.item li {
    padding-block: 0.5rem;
}

@media screen and (min-width: 1024px) {
    .navList {
        position: unset;
        background-color: unset;
        padding: unset;
        margin-inline: auto;
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
        font-size: 16px;
        font-weight: 500;
    }
}
</style>

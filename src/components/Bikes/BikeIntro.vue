<script setup></script>

<template>
    <header class="header">
        <h1 class="title">
            Lorem Ipsum Lorem <br />
            Lorem Ipsum
        </h1>
        <div class="buttons">
            <button class="button">Subscribe</button>
            <button class="button">Pre-order</button>
        </div>
    </header>
</template>

<style scoped>
.header {
    background:
        linear-gradient(to bottom, transparent, rgba(49, 45, 46, 1) 350px),
        var(--secondary-color) url('/bike_diagonal.png') center/320px
            no-repeat;
    height: 400px;
    place-content: end center;
    padding-block: 2rem;
    padding-inline: var(--mobile-padding-inline);
    display: grid;
    row-gap: 1rem;
    text-align: center;
}

.title {
    color: var(--tertiary-color);
    line-height: 130%;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.button {
    background-color: unset;
    border: unset;
    padding-block: 0.5rem;
    padding-inline: 1.5rem;
    border-radius: 2rem;
    font-weight: 500;
    flex: 1;
}

.button:nth-child(1) {
    color: var(--tertiary-color);
    border: 1px solid var(--tertiary-color);
}

.button:nth-child(2) {
    color: var(--secondary-color);
    background-color: var(--tertiary-color);
}

@media screen and (min-width: 1024px) {
    .header {
        background:
            linear-gradient(
                to bottom,
                transparent,
                rgba(49, 45, 46, 1) 450px
            ),
            var(--secondary-color) url('/bike_diagonal.png') center/450px
                no-repeat;
        height: 550px;
        padding-block: 3rem;
    }

    .button {
        padding-inline: 2rem;
        font-size: var(--fs-md);
    }
}
</style>

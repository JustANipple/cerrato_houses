<script setup></script>

<template>
    <header class="header">
        <div class="intro">
            <h1>Homes That Match.</h1>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            <button>Book now</button>
        </div>
        <div class="isometric">
            <img src="/isometric_room.png" alt="isometric room" />
        </div>
    </header>
</template>

<style scoped>
.header {
    padding-top: 0.5rem;
    padding-inline: var(--mobile-padding-inline);
    background-color: var(--secondary-color);
    display: grid;
    justify-items: center;
    row-gap: 1rem;
}

.intro {
    display: grid;
    row-gap: 0.5rem;
    color: var(--tertiary-color);
    width: 100%;
}

h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 100%;
}

p {
    font-size: 16px;
    font-weight: 500;
}

button {
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    color: var(--primary-color);
    max-width: fit-content;
    padding-block: 0.25rem;
    padding-inline: 1rem;
    margin-top: 1rem;
    margin-right: auto;
}

.isometric {
    margin-top: 1rem;
    height: 226px;
    width: 311px;
}

@media screen and (min-width: 1024px) {
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-block: 6rem;
        padding-inline: var(--desktop-padding-inline);
    }

    .intro {
        max-width: 520px;
    }

    h1 {
        font-size: 52px;
        font-weight: 700;
    }

    p {
        font-size: 24px;
        font-weight: 500;
        max-width: 500px;
    }

    button {
        padding-block: 0.5rem;
        font-size: 20px;
        font-weight: 500;
    }

    .isometric {
        width: 290px;
    }

    .isometric img {
        width: 600px;
        height: auto;
        max-width: unset;
        object-fit: cover;
        margin-top: -6.75rem;
    }
}
</style>

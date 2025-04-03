<script setup></script>

<template>
    <header class="header">
        <div class="headerContainer">
            <div class="intro">
                <h1>The path to your perfect vacations</h1>
                <p>Support sustainable tourism in Langhe and Roero</p>
                <button>Book now</button>
            </div>
            <div class="isometric">
                <img src="/isometric_room.png" alt="isometric room" />
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    padding-top: 0.5rem;
    padding-inline: var(--mobile-padding-inline);
    background-color: var(--secondary-color);
}

.headerContainer {
    display: grid;
    justify-items: center;
    row-gap: 1rem;
}

.intro {
    display: grid;
    place-content: center;
    row-gap: 0.5rem;
    color: var(--tertiary-color);
    width: 100%;
}

h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 120%;
    max-width: 525px;
}

p {
    font-size: 16px;
    font-weight: 500;
    max-width: 500px;
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
        padding-block: 5rem;
        padding-inline: var(--desktop-padding-inline);
        display: flex;
        justify-content: center;
    }

    .headerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        width: 100%;
        max-width: var(--max-w);
    }

    .intro {
        flex: 1;
        place-content: start;
    }

    h1 {
        font-size: 38px;
        font-weight: 700;
    }

    p {
        font-size: 24px;
        font-weight: 500;
    }

    button {
        padding-block: 0.5rem;
        font-size: 20px;
        font-weight: 500;
    }

    .isometric {
        flex: 1;
    }

    .isometric img {
        max-width: 550px;
        margin-top: -5.875rem;
        position: relative;
        left: 10rem;
    }
}

@media screen and (min-width: 1300px) {
    .header {
        padding-block: 6rem;
    }

    .isometric {
        max-width: 600px;
        margin-bottom: -2rem;
    }

    .isometric img {
        left: unset;
        margin-left: auto;
    }
}
</style>

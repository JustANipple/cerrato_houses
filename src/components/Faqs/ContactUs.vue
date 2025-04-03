<script setup></script>

<template>
    <section class="contactUs">
        <div class="contactUsContainer">
            <div class="header">
                <h2 class="title">Contact us</h2>
                <p class="description">
                    lt is very important for us to keep touch with, so we
                    are always ready to answer any that interests you
                </p>
            </div>
            <form class="form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
.contactUs {
    padding-block: 4.5rem;
    padding-inline: var(--mobile-padding-inline);
    background-color: var(--secondary-color);
}

.contactUsContainer {
    display: grid;
    row-gap: 3rem;
}

.header {
    display: grid;
    row-gap: 0.5rem;
    color: var(--tertiary-color);
}

.description {
    opacity: 70%;
}

.form {
    display: grid;
    row-gap: 1rem;
}

.form input,
.form textarea {
    background-color: transparent;
    border: unset;
    border-bottom: 1px solid var(--primary-color);
    padding-bottom: 1rem;
    color: var(--tertiary-color);
}

.form input::placeholder,
.form textarea::placeholder {
    color: var(--tertiary-color);
    font-size: var(--fs-md);
    opacity: 70%;
    font-weight: medium;
}

.form textarea {
    resize: none;
}

button {
    max-width: fit-content;
    background-color: var(--primary-color);
    border: unset;
    text-transform: uppercase;
    color: var(--tertiary-color);
    padding: 12px 28px;
    border-radius: 2rem;
    font-size: var(--fs-md);
    font-weight: bold;
    margin-top: 1rem;
}
</style>

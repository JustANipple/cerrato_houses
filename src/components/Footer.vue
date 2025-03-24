<script setup>
import {
    FaInstagram,
    FaFacebook,
    FaAirbnb,
    FaTwitter,
} from 'vue-icons-plus/fa'
</script>

<template>
    <footer class="footer">
        <div class="logo">
            <img
                src="/logo.svg"
                alt="cerrato houses logo"
                class="logoImg"
            />
            <p>Cerrato Houses</p>
        </div>
        <div class="socials">
            <div class="social">
                <a href="https://www.google.com/">
                    <FaInstagram size="18" />
                </a>
            </div>
            <div class="social">
                <a href="https://www.google.com/">
                    <FaFacebook size="18" />
                </a>
            </div>
            <div class="social">
                <a href="https://www.google.com/">
                    <FaAirbnb size="18" />
                </a>
            </div>
            <div class="social">
                <a href="https://www.google.com/"
                    ><FaTwitter size="18"
                /></a>
            </div>
        </div>
        <div class="linksContainer">
            <h3 class="title">Useful Links</h3>
            <div class="links">
                <router-link to="/bikes">Bikes</router-link>
                <router-link to="/Faqs">Faqs</router-link>
                <router-link to="/contacts">Contacts</router-link>
                <router-link to="/privacy">Privacy</router-link>
            </div>
        </div>
        <p class="copyright">
            &copy;2025 | All rights reserved | Site by
            <a href="https://github.com/JustANipple"> Samuel Prandi</a>
        </p>
    </footer>
</template>

<style scoped>
.footer {
    background-origin: var(--tertiary-color);
    padding-top: 2rem;
    display: grid;
    row-gap: 1rem;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: var(--secondary-color);
}

.logoImg {
    height: 40px;
    filter: brightness(0) saturate(100%) invert(11%) sepia(4%)
        saturate(1197%) hue-rotate(295deg) brightness(97%) contrast(81%);
}

.logo p {
    font-size: 20px;
    font-weight: 400;
}

.socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-block: 2rem;
}

.social {
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    padding: 0.25rem;
}

.social a {
    color: inherit;
}

.linksContainer {
    display: grid;
    row-gap: 1rem;
    place-content: center;
    text-align: center;
}

.title {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
}

.links {
    display: grid;
    row-gap: 0.5rem;
}

.links a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    font-weight: 500;
}

.copyright {
    padding-top: 4rem;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
}
</style>

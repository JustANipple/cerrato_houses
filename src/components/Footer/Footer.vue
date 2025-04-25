<script setup>
import {
    FaInstagram,
    FaAirbnb,
    FaWhatsapp,
    FaBook,
} from 'vue-icons-plus/fa'
</script>

<template>
    <footer class="footer">
        <div class="footerContainer">
            <div class="header">
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
                        <a
                            href="https://www.instagram.com/cerratohouses/"
                            target="_blank"
                        >
                            <FaInstagram size="18" />
                        </a>
                    </div>
                    <div class="social">
                        <a
                            href="https://www.booking.com/hotel/it/vista-langhe-cerratohouses.it.html"
                            target="_blank"
                        >
                            <img
                                src="/booking_icon_black.svg"
                                alt=""
                                class="bookingIcon"
                            />
                        </a>
                    </div>
                    <div class="social">
                        <a
                            href="https://www.airbnb.com/rooms/988230275664339719"
                            target="_blank"
                        >
                            <FaAirbnb size="18" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="linksContainer">
                <h3 class="title">Useful Links</h3>
                <div class="links">
                    <router-link to="/">Home</router-link>
                    <router-link to="/house"
                        >Vista Langhe Home</router-link
                    >
                    <router-link to="/bikes">Bikes</router-link>
                    <router-link to="/faqs">Faqs</router-link>
                    <router-link to="#">Privacy Policy</router-link>
                </div>
            </div>
            <p class="copyright">
                &copy;{{ new Date().getFullYear() }} | All rights reserved
                | Site by
                <a href="https://github.com/JustANipple"> Samuel Prandi</a>
            </p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: var(--tertiary-color);
    padding-block: 2rem;
    display: flex;
    justify-content: center;
}

.footerContainer {
    display: grid;
    row-gap: 1rem;
    width: 100%;
    max-width: var(--max-w);
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
    font-size: var(--fs-xl);
}

.socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-block: 2rem;
}

.social {
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    padding: 0.5rem;
}

.social a {
    color: inherit;
}

.bookingIcon {
    width: 20px;
    height: 20px;
}

.linksContainer {
    display: grid;
    row-gap: 1rem;
    place-content: center;
    text-align: center;
}

.title {
    font-size: var(--fs-lg);
    text-transform: uppercase;
}

.links {
    display: grid;
    row-gap: 0.5rem;
}

.links a {
    text-decoration: none;
    color: inherit;
    font-size: var(--fs-base);
}

.copyright {
    padding-top: 2rem;
    font-size: var(--fs-sm);
    text-align: center;
}

@media screen and (min-width: 1024px) {
    .footer {
        padding-inline: var(--desktop-padding-inline);
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--secondary-color);
    }

    .linksContainer {
        place-content: flex-start;
        text-align: left;
    }

    .copyright {
        padding-top: 1rem;
    }
}
</style>

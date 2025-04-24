<script setup>
import ImageCarousel from '@/components/House/ImageCarousel.vue'
import { FaSwimmer, FaWifi } from 'vue-icons-plus/fa'
import HouseMap from '@/components/House/HouseMap.vue'

const imgs = [
    '/living_room.JPG',
    '/window_view.JPG',
    '/bedroom.jpg',
    '/kitchen.jpg',
    '/bathroom.jpg',
]
</script>

<template>
    <main class="main">
        <ImageCarousel :images="imgs" />
        <div class="header">
            <div class="headerContainer">
                <h2 class="title">
                    Aroma(s)tica Treehouse Monferrato 006154-BEB-00003
                </h2>
                <div class="subtitleContainer">
                    <h3 class="subtitle">
                        San Salvatore Monferrato, Italia. Stanza privata in
                        chalet
                    </h3>
                    <small
                        >2 ospiti - 1 camera da letto - 1 letto - 1 bagno
                        privato</small
                    >
                </div>
                <a href="www.google.com" class="externalLink">Prenota</a>
            </div>
        </div>
        <hr class="divider" />
        <div class="features">
            <div class="featuresContainer">
                <div class="feature">
                    <FaSwimmer />
                    <div class="content">
                        <p class="title">Tuffati</p>
                        <p class="subtitle">
                            Questo è uno dei pochi alloggi in zona dotati
                            di piscina
                        </p>
                    </div>
                </div>
                <div class="feature">
                    <FaSwimmer />
                    <div class="content">
                        <p class="title">Tuffati</p>
                        <p class="subtitle">
                            Questo è uno dei pochi alloggi in zona dotati
                            di piscina
                        </p>
                    </div>
                </div>
                <div class="feature">
                    <FaSwimmer />
                    <div class="content">
                        <p class="title">Tuffati</p>
                        <p class="subtitle">
                            Questo è uno dei pochi alloggi in zona dotati
                            di piscina
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="divider" />
        <div class="houseDescription">
            <div class="descriptionContainer">
                <h2 class="title">Troverai</h2>
                <p class="description">
                    Un incantevole nido sospeso, un punto di vista
                    privilegiato sulle colline, tra i profumi dei tigli e
                    delle essenze aromatiche. Giardino con solarium e
                    piscina (in stagione) circondata da un rigoglioso
                    giardino mediterraneo e possibilità di free wifi.
                    Arredamento shabby chic. Bagno privato con lavabo,
                    water e doccia. Parco di 18.000 mq con piante ad alto
                    fusto come maestosi cedri del libano o varietà pregiate
                    come magnolie, sofore, agrifogli e tamerici
                </p>
            </div>
        </div>
        <hr class="divider" />
        <div class="houseServices">
            <div class="servicesContainer">
                <h2>Cosa troverai</h2>
                <div class="services">
                    <div class="service">
                        <FaWifi />
                        <p>Wifi gratuito</p>
                    </div>
                    <div class="service">
                        <FaWifi />
                        <p>Wifi gratuito</p>
                    </div>
                    <div class="service">
                        <FaWifi />
                        <p>Wifi gratuito</p>
                    </div>
                    <div class="service">
                        <FaWifi />
                        <p>Wifi gratuito</p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="divider" />
        <div class="houseMap">
            <div class="mapContainer">
                <HouseMap />
            </div>
        </div>
    </main>
</template>

<style scoped>
.main {
    background-color: var(--tertiary-color);
    display: grid;
    row-gap: 2rem;
    color: var(--secondary-color);
    padding-bottom: 2rem;
}

.header {
    padding-inline: var(--mobile-padding-inline);
}

.headerContainer {
    display: grid;
    row-gap: 0.5rem;
}

.title {
    line-height: 130%;
}

.subtitleContainer {
    display: grid;
    row-gap: 0.25rem;
}

.subtitle {
    line-height: 120%;
}

.externalLink {
    padding: 0.5rem 2rem;
    background-color: var(--primary-color);
    color: var(--tertiary-color);
    max-width: fit-content;
    text-decoration: none;
    border-radius: 0.5rem;
    margin-top: 1rem;
    font-weight: 600;
}

.divider {
    border-top: 1px solid var(--primary-color);
    border-bottom: unset;
    margin-inline: var(--mobile-padding-inline);
}

.features {
    padding-inline: var(--mobile-padding-inline);
}

.featuresContainer {
    display: grid;
    row-gap: 1.5rem;
}

.feature {
    display: flex;
    gap: 1.5rem;
}

.feature svg {
    width: 40px;
    height: 40px;
    color: var(--primary-color);
}

.content {
    display: grid;
    row-gap: 0.25rem;
}

.content .title {
    font-size: var(--fs-md);
    font-weight: 500;
}

.houseDescription {
    padding-inline: var(--mobile-padding-inline);
}

.descriptionContainer {
    display: grid;
    row-gap: 1rem;
}

.houseServices {
    padding-inline: var(--mobile-padding-inline);
    display: grid;
    row-gap: 1rem;
}

.servicesContainer {
    display: grid;
    row-gap: 1rem;
}

.services {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.service {
    display: flex;
    flex-basis: calc(50% - 1rem);
    gap: 1rem;
}

.service svg {
    color: var(--primary-color);
}

@media screen and (min-width: 744px) {
    .main {
        --max-w-t: 1100px;
    }

    .header,
    .features,
    .houseDescription,
    .houseServices,
    .houseMap {
        display: flex;
        justify-content: center;
    }

    .headerContainer,
    .featuresContainer,
    .descriptionContainer,
    .servicesContainer,
    .mapContainer {
        display: grid;
        row-gap: 1rem;
        width: 100%;
        max-width: var(--max-w-t);
    }

    .featuresContainer {
        row-gap: 1.5rem;
    }

    .descriptionContainer .description {
        max-width: 50rem;
    }

    .services {
        gap: 2rem;
    }

    .service {
        flex-basis: unset;
    }

    .divider {
        margin-inline: var(--mobile-padding-inline);
    }
}

@media screen and (min-width: 1024px) {
    .divider {
        width: 100%;
        max-width: var(--max-w-t);
        margin-inline: auto;
    }
}
</style>

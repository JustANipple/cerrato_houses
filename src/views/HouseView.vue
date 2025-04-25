<script setup>
import ImageCarousel from '@/components/House/ImageCarousel.vue'
import {
    FaWifi,
    FaAirbnb,
    FaSwimmingPool,
    FaKey,
    FaHotTub,
} from 'vue-icons-plus/fa'
import { Fa6MountainSun } from 'vue-icons-plus/fa6'
import { BiSolidWine } from 'vue-icons-plus/bi'
import { TbToolsKitchen2 } from 'vue-icons-plus/tb'
import { AiFillCar } from 'vue-icons-plus/ai'
import { RiChargingPileFill } from 'vue-icons-plus/ri'

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
                <h2 class="title">Vista Langhe CerratoHouses</h2>
                <div class="subtitleContainer">
                    <h3 class="subtitle">
                        Via San Sebastiano, 10/A, 12050 Guarene, Italy.
                        Private home with Jacuzzi
                    </h3>
                    <small
                        >2 guests - 1 bedroom - 1 bed - 1 private
                        bathroom</small
                    >
                </div>
                <div class="externalLinks">
                    <a
                        href="https://www.airbnb.com/rooms/988230275664339719"
                        target="_blank"
                        class="externalLinkOne"
                        ><FaAirbnb /> Book</a
                    >
                    <a
                        href="https://www.booking.com/hotel/it/vista-langhe-cerratohouses.it.html"
                        target="_blank"
                        class="externalLinkTwo"
                    >
                        <img
                            src="/booking_icon.svg"
                            alt="booking icon"
                            class="bookingIcon"
                        />
                        Book</a
                    >
                </div>
            </div>
        </div>
        <hr class="divider" />
        <div class="features">
            <div class="featuresContainer">
                <div class="feature">
                    <FaSwimmingPool size="24" />
                    <div class="content">
                        <p class="title">Dive right in</p>
                        <p class="subtitle">
                            This is one of the few places in the area with
                            a pool.
                        </p>
                    </div>
                </div>
                <div class="feature">
                    <FaKey size="24" />
                    <div class="content">
                        <p class="title">
                            Exceptional check-in experience
                        </p>
                        <p class="subtitle">
                            Recent guests gave the check-in process a
                            5-star rating.
                        </p>
                    </div>
                </div>
                <div class="feature">
                    <Fa6MountainSun size="24" />
                    <div class="content">
                        <p class="title">Mountain and vineyard views</p>
                        <p class="subtitle">
                            Soak up the views during your stay.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="divider" />
        <div class="houseDescription">
            <div class="descriptionContainer">
                <h2 class="title">About this space</h2>
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
                <h2>What this place offers</h2>
                <div class="services">
                    <div class="service">
                        <Fa6MountainSun />
                        <p>Valley view</p>
                    </div>
                    <div class="service">
                        <BiSolidWine />
                        <p>Vineyard view</p>
                    </div>
                    <div class="service">
                        <TbToolsKitchen2 />
                        <p>Kitchen</p>
                    </div>
                    <div class="service">
                        <FaWifi />
                        <p>Wifi</p>
                    </div>
                    <div class="service">
                        <AiFillCar />
                        <p>Free parking on premises</p>
                    </div>
                    <div class="service">
                        <FaSwimmingPool />
                        <p>Pool</p>
                    </div>
                    <div class="service">
                        <FaHotTub />
                        <p>Hot tub</p>
                    </div>
                    <div class="service">
                        <RiChargingPileFill />
                        <p>EV charger</p>
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

.externalLinks {
    display: flex;
    gap: 1rem;
}

.externalLinkOne,
.externalLinkTwo {
    padding: 0.5rem 1.5rem;
    background-color: #ee2755;
    color: var(--tertiary-color);
    max-width: fit-content;
    text-decoration: none;
    border-radius: 0.5rem;
    margin-top: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.externalLinkTwo {
    background-color: #003b95;
}

.bookingIcon {
    width: 20px;
    height: 20px;
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
    color: var(--primary-color);
    min-width: 2rem;
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
    min-width: 1.5rem;
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
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        justify-items: start;
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

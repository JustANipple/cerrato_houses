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
import { ref } from 'vue'

const imgs = [
    '/living_room.JPG',
    '/window_view.JPG',
    '/bedroom.jpg',
    '/kitchen.jpg',
    '/bathroom.jpg',
]

const readMore = ref(false)
</script>
<template>
    <main class="main">
        <ImageCarousel :images="imgs" />
        <div class="header">
            <div class="headerContainer">
                <h2 class="title">Vista Langhe CerratoHouses</h2>
                <div class="subtitleContainer">
                    <h3 class="subtitle">
                        12050 Guarene, Italy Private home with Jacuzzi
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
                            src="/booking_icon_black.svg"
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
                        <p class="title">Jacuzzi relax</p>
                        <p class="subtitle">
                            THot tub pool with landscape view
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
                <h2 class="title">About this place</h2>
                <p
                    class="description"
                    :class="{ showLess: !readMore, showMore: readMore }"
                >
                    - Welcome to Guarene, in the heart of the Langhe &
                    Roero!
                    <br /><br />
                    Our property offers a unique and unforgettable
                    experience:
                    <br /><br />
                    Breathtaking Panorama: From our panoramic terrace, you
                    can admire the hills of the Langhe stretching to the
                    horizon, with golden vineyards and picturesque
                    villages. The sunsets here are an unforgettable
                    spectacle.
                    <br /><br />
                    Jacuzzi with hot water with panorama on the Langhe
                    <br /><br />
                    Garden and Relaxation: Our garden is an oasis of
                    tranquility with a view of the charming Castello di
                    Guarene and the Langhe. It's the perfect place to relax
                    on comfortable chairs, sip local wines, and enjoy the
                    beauty of the surrounding nature.
                    <br /><br />
                    Free parking inside the Property
                    <br /><br />
                    Unique and Creative Decor: Our furnishings are a
                    celebration of creativity. Many furnishings are works
                    of art created by the CerratoHouses staff, using
                    recycled materials and vintage pieces. The result is a
                    unique and fascinating design that makes your stay
                    truly special.
                    <br /><br />
                    Italian Contemporary Art: Each room is adorned with
                    works of art by contemporary Italian artists. These
                    works have been carefully selected to harmonize with
                    the surrounding environment, adding beauty and
                    inspiration to your stay. In addition to the art,
                    you'll find detailed descriptions of the artists for a
                    complete immersion in contemporary Italian art.
                    <br /><br />
                    Explore the Territory Through Local Wines: To fully
                    experience the Langhe region, there's no better way
                    than through its wines. Inside the accommodation,
                    you'll find a selection of the finest local wines, each
                    with a unique story to tell. We've also included
                    detailed descriptions to help you discover the charm of
                    each label and savor the authenticity of the Langhe.
                    <br /><br />
                    Your stay with us will be an immersive experience in
                    the beauty and culture of the Langhe. We look forward
                    to welcoming you and making your journey extraordinary.
                    Welcome to CerratoHouses! Book now and let yourself be
                    enchanted by the magic of the Langhe in this corner of
                    paradise!
                </p>
                <button class="readMore" @click="readMore = !readMore">
                    Read {{ readMore ? 'less' : 'more' }}
                </button>
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
    background-color: var(--primary-color);
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
    background-color: transparent;
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
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

.description.showLess {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
}

.readMore {
    background-color: unset;
    border: unset;
    padding: unset;
    cursor: pointer;
    max-width: fit-content;
    font-size: var(--fs-base);
    color: var(--primary-color);
    font-weight: 600;
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

    .externalLinkOne,
    .externalLinkTwo {
        transition: transform 0.25s ease-out;
    }

    .externalLinkOne:hover,
    .externalLinkTwo:hover {
        transform: scale(1.05);
    }
}
</style>

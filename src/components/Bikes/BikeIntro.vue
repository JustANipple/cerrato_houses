<script setup>
import BikeComponent from './BikeComponent.vue'
import { PiEngineFill } from 'vue-icons-plus/pi'
import { GrBike } from 'vue-icons-plus/gr'
import { BiSolidBattery } from 'vue-icons-plus/bi'
import { BsGearFill } from 'vue-icons-plus/bs'
import { MdSmartScreen, MdFiberSmartRecord } from 'vue-icons-plus/md'
</script>

<template>
    <header class="header">
        <h1 class="title">E-bike Express</h1>
        <p class="subtitle">Ride your adventure</p>
        <router-link to="/faqs" class="button">Book now</router-link>
        <div class="components">
            <BikeComponent
                :icon="PiEngineFill"
                :name="'Motor'"
                :model="'Bosh Performance 3'"
            />
            <BikeComponent
                :icon="GrBike"
                :name="'Chassis'"
                :model="'Alluminium Superlite 6061'"
            />
            <BikeComponent
                :icon="BiSolidBattery"
                :name="'Battery'"
                :model="'Bosch 625Wh'"
            />
            <BikeComponent
                :icon="MdSmartScreen"
                :name="'Display'"
                :model="'Bosch Purion 200 digital'"
            />
            <BikeComponent
                :icon="BsGearFill"
                :name="'Shifter'"
                :model="'Shimano'"
            />
            <BikeComponent
                :icon="MdFiberSmartRecord"
                :name="'Material'"
                :model="'Carbon fiber C:62'"
            />
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
    text-align: center;
}

.title {
    color: var(--tertiary-color);
    line-height: 130%;
}

.subtitle {
    color: var(--tertiary-color);
    font-size: var(--fs-md);
    opacity: 70%;
}

.button {
    background-color: unset;
    padding-block: 0.5rem;
    padding-inline: 2rem;
    border-radius: 2rem;
    font-weight: 500;
    flex: 1;
    color: var(--tertiary-color);
    border: 1px solid var(--tertiary-color);
    margin-top: 1rem;
    text-decoration: none;
    display: block;
    max-width: fit-content;
    margin-inline: auto;
}

.button:nth-child(1) {
    color: var(--tertiary-color);
    border: 1px solid var(--tertiary-color);
}

.button:nth-child(2) {
    color: var(--secondary-color);
    background-color: var(--tertiary-color);
}

.components {
    display: none;
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
        position: relative;
    }

    .button {
        padding-inline: 2rem;
        font-size: var(--fs-md);
    }

    .components {
        display: block;
    }
}
</style>

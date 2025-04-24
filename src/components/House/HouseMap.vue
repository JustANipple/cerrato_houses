<script setup>
import 'leaflet/dist/leaflet.css'
import { ref } from 'vue'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'

const zoom = ref(15)
</script>

<template>
    <div class="map">
        <l-map
            ref="map"
            v-model:zoom="zoom"
            :use-global-leaflet="false"
            :center="[44.73816, 8.0286]"
        >
            <l-tile-layer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                :attribution="attribution"
                layer-type="base"
                name="Stadia Alidade Smooth Dark"
            />
            <l-marker :lat-lng="[44.73816, 8.0286]" />
        </l-map>
    </div>
</template>

<style scoped>
.map {
    height: 400px;
    border-radius: 1rem;
    overflow: hidden;
    margin-inline: var(--mobile-padding-inline);
}

@media screen and (min-width: 1024px) {
    .map {
        margin-inline: unset;
    }
}
</style>

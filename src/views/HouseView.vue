<script setup>
import ImageCarousel from '@/components/House/ImageCarousel.vue'

const imgs = [
    '/living_room.JPG',
    '/window_view.JPG',
    '/bedroom.jpg',
    '/kitchen.jpg',
    '/bathroom.jpg',
]
</script>

<template>
    <ImageCarousel :images="imgs" />
</template>

<style scoped></style>

<script setup>
import Discover from '@/components/Discover/Discover.vue'
import Features from '@/components/Features/Features.vue'
import Intro from '@/components/Intro/AppIntro.vue'
</script>

<template>
    <Intro
        :title="'The path to your perfect vacations'"
        :description="'Support sustainable tourism in Langhe and Roero'"
        :imageUrl="'/isometric_room.png'"
    />
    <Discover />
    <Features />
</template>

<style scoped></style>

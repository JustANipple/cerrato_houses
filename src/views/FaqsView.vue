<script setup>
import ContactUs from '@/components/Faqs/ContactUs.vue'
import Faqs from '@/components/Faqs/Faqs.vue'
import Intro from '@/components/Intro/AppIntro.vue'
</script>

<template>
    <Intro
        :title="'The path to your perfect vacations'"
        :description="'Support sustainable tourism in Langhe and Roero'"
        :imageUrl="'/isometric_room_faq.png'"
    />
    <Faqs />
    <ContactUs />
</template>

<style scoped></style>

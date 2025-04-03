<script setup>
import { FaQuestion } from 'vue-icons-plus/fa'
import Faq from './Faq.vue'
</script>

<template>
    <section class="faqs">
        <div class="faqsContainer">
            <div class="header">
                <FaQuestion />
                <h2 class="title">FAQs</h2>
            </div>
            <div class="faqList">
                <Faq
                    :title="'What is frontendmentor and how will it help me?'"
                    :description="'Frontendmentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. Its suitable for all levels and ideal for portfolio building'"
                />
                <div class="divider"></div>
                <Faq
                    :title="'What is frontendmentor and how will it help me?'"
                    :description="'Frontendmentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. Its suitable for all levels and ideal for portfolio building'"
                />
                <div class="divider"></div>
                <Faq
                    :title="'What is frontendmentor and how will it help me?'"
                    :description="'Frontendmentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. Its suitable for all levels and ideal for portfolio building'"
                />
                <div class="divider"></div>
                <Faq
                    :title="'What is frontendmentor and how will it help me?'"
                    :description="'Frontendmentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. Its suitable for all levels and ideal for portfolio building'"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.faqs {
    padding-top: 8rem;
    padding-bottom: 3rem;
    padding-inline: var(--mobile-padding-inline);
    background-color: var(--tertiary-color);
}

.faqsContainer {
    display: grid;
    row-gap: 3rem;
}

.header {
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: var(--fs-xl);
}

.title {
    color: var(--secondary-color);
}

.faqList {
    display: grid;
    row-gap: 2rem;
}

.divider {
    width: 100%;
    border-top: unset;
    border-bottom: 1px solid var(--primary-color);
}
</style>

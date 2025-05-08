<script setup>
import { FaQuestion } from 'vue-icons-plus/fa'
import Faq from './Faq.vue'
</script>

<template>
    <section class="faqs">
        <div class="faqsContainer">
            <Transition appear name="header">
                <div class="header">
                    <FaQuestion />
                    <h2 class="title">FAQs</h2>
                </div>
            </Transition>
            <div class="faqList">
                <Transition appear name="faqOne">
                    <Faq
                        :title="'What is frontendmentor and how will it help me?'"
                        :description="'Frontendmentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. Its suitable for all levels and ideal for portfolio building'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqTwo">
                    <Faq
                        :title="'What is frontendmentor and how will it help me?'"
                        :description="'Frontendmentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. Its suitable for all levels and ideal for portfolio building'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqThree">
                    <Faq
                        :title="'What is frontendmentor and how will it help me?'"
                        :description="'Frontendmentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. Its suitable for all levels and ideal for portfolio building'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqFour">
                    <Faq
                        :title="'What is frontendmentor and how will it help me?'"
                        :description="'Frontendmentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. Its suitable for all levels and ideal for portfolio building'"
                    />
                </Transition>
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

@media screen and (min-width: 1024px) {
    .faqs {
        padding-block: 5rem;
        padding-inline: var(--desktop-padding-inline);
        display: flex;
        justify-content: center;
    }

    .faqsContainer {
        width: 100%;
        max-width: var(--max-w);
    }

    /* Animations */
    .header-enter-from {
        transform: translateY(-100%);
        opacity: 0;
    }

    .header-enter-active {
        transition:
            transform 1s ease-in-out,
            opacity 1s ease-in-out;
    }

    .header-enter-to {
        transform: translateY(0);
        opacity: 1;
    }

    .faqOne-enter-from,
    .faqTwo-enter-from,
    .faqThree-enter-from,
    .faqFour-enter-from {
        transform: translateX(100%);
        opacity: 0;
    }

    .faqOne-enter-active,
    .faqTwo-enter-active,
    .faqThree-enter-active,
    .faqFour-enter-active {
        transition:
            transform 1s ease-in-out,
            opacity 1s ease-in-out;
    }

    .faqOne-enter-to,
    .faqTwo-enter-to,
    .faqThree-enter-to,
    .faqFour-enter-to {
        transform: translateX(0);
        opacity: 1;
    }

    .faqOne-enter-active {
        transition-delay: 0.125s;
    }

    .faqTwo-enter-active {
        transition-delay: 0.25s;
    }

    .faqThree-enter-active {
        transition-delay: 0.5s;
    }

    .faqFour-enter-active {
        transition-delay: 0.75s;
    }
}
</style>

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
                        :title="'How Can I Book My Vacation Home?'"
                        :description="'Your dream getaway in the Langhe and Roero is just one click away! Book your vacation home easily via Booking or Airbnb — adventure, relaxation, and unforgettable memories await.'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqTwo">
                    <Faq
                        :title="'How Can I Book the Truffle Experience?'"
                        :description="'To book your exclusive Truffle Experience, simply reach out via email or phone. Together with an expert local hunter, we’ll craft a truly unique adventure searching for the renowned Alba truffle — complete with insights, emotions, and direct interaction with the truffle dogs. Please contact us at least one week in advance to ensure a personalized experience for couples or groups.'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqThree">
                    <Faq
                        :title="'How Are the Vacation Homes Equipped?'"
                        :description="'Our vacation homes come fully equipped for your comfort! Inside, you’ll find a Moka pot for Italian coffee, an American coffee machine, an electric bread grill, a selection of teas and herbal infusions, coffee, and a blender. Everything you need to feel right at home!'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqFour">
                    <Faq
                        :title="'How Committed Are We to Green Energy?'"
                        :description="'We are deeply committed to green energy! All our homes are equipped with solar panels and storage batteries, ensuring that 100% of the energy you use comes from renewable sources. Built with cutting-edge wooden construction technology and certified at the highest energy efficiency class, our homes guarantee an eco-friendly stay — without compromising on comfort.'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqFive">
                    <Faq
                        :title="'Are the Homes Soundproofed?'"
                        :description="'Absolutely! Our houses are built with innovative wooden structures and equipped with state-of-the-art German soundproof fixtures, offering you maximum quietness and privacy during your stay.'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqSix">
                    <Faq
                        :title="'What Is the Kitchen Equipped With?'"
                        :description="'Our kitchens are fully equipped with everything you need to cook and enjoy your meals. You’ll find plates, cookware, a modern induction cooktop, an oven, and a dishwasher — making it easy and comfortable to feel right at home.'"
                    />
                </Transition>
                <div class="divider"></div>
                <Transition appear name="faqSeven">
                    <Faq
                        :title="'How Can I Book an E-Bike Tour?'"
                        :description="'To book your e-bike tour, simply visit our \'Bikes\' page and contact us\. We organize tailor-made guided tours for couples, small groups, and large groups alike. Experience the beauty of the Langhe and Roero with a tour designed just for you — we can\'t wait to create your perfect cycling journey!'"
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
    .faqFour-enter-from,
    .faqFive-enter-from,
    .faqSix-enter-from,
    .faqSeven-enter-from {
        transform: translateX(100%);
        opacity: 0;
    }

    .faqOne-enter-active,
    .faqTwo-enter-active,
    .faqThree-enter-active,
    .faqFour-enter-active,
    .faqFive-enter-active,
    .faqSix-enter-active,
    .faqSeven-enter-active {
        transition:
            transform 1s ease-in-out,
            opacity 1s ease-in-out;
    }

    .faqOne-enter-to,
    .faqTwo-enter-to,
    .faqThree-enter-to,
    .faqFour-enter-to,
    .faqFive-enter-to,
    .faqSix-enter-to,
    .faqSeven-enter-to {
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

    .faqFive-enter-active {
        transition-delay: 1s;
    }

    .faqSix-enter-active {
        transition-delay: 1.25s;
    }

    .faqSeven-enter-active {
        transition-delay: 1.5s;
    }
}
</style>

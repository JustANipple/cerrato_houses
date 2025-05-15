<script setup>
import {
    FaBed,
    FaBath,
    FaExpandArrowsAlt,
    FaSwimmingPool,
} from 'vue-icons-plus/fa'

const props = defineProps({
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    beds: {
        type: String,
        required: true,
    },
    baths: {
        type: String,
        required: true,
    },
    sqft: {
        type: String,
        required: true,
    },
    pool: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <router-link to="/house" class="house">
        <div class="imageContainer">
            <img :src="image" alt="house" />
        </div>
        <div class="content">
            <small class="pricePar">
                From <span class="price">{{ price }}€</span> night
            </small>
            <div class="body">
                <h3 class="title">{{ title }}</h3>
                <p class="address">{{ address }}</p>
            </div>
            <hr class="divider" />
            <div class="info">
                <div class="beds">
                    <FaBed />
                    <p>{{ beds }} bedroom</p>
                </div>
                <div class="baths">
                    <FaBath />
                    <p>{{ baths }} bathroom</p>
                </div>
                <div class="sqft">
                    <FaExpandArrowsAlt />
                    <p>{{ sqft }} sqft</p>
                </div>
                <div class="pool">
                    <FaSwimmingPool />
                    <p>{{ pool }} Jacuzzi</p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
.house {
    display: grid;
    max-width: 450px;
    text-decoration: none;
}

.imageContainer {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.content {
    padding: 1.5rem 1rem;
    position: relative;
    z-index: 0;
    top: -1rem;
    background-color: white;
    border-radius: 5px;
    display: grid;
    row-gap: 0.5rem;
    color: var(--secondary-color);
}

.pricePar {
    font-size: var(--fs-base);
}

.body {
    display: grid;
    row-gap: 0.25rem;
}

.title {
    font-size: var(--fs-lg);
}

.address {
    font-size: var(--fs-base);
}

.divider {
    border-bottom: unset;
    border-color: rgba(0, 0, 0, 0.1);
    margin-block: 0.5rem;
}

.info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1rem;
}

.info div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-basis: 50%;
}

.info div svg {
    height: 16px;
    fill: var(--primary-color);
}

.info div p {
    font-size: var(--fs-sm);
}

@media screen and (min-width: 1024px) {
    .house {
        text-decoration: none;
    }
    .imageContainer {
        height: 250px;
    }

    .content {
        row-gap: 1rem;
    }

    .info {
        justify-content: space-between;
        gap: 0.5rem;
    }

    .info div {
        flex-basis: unset;
    }

    .content {
        transition:
            background-color 0.25s ease-in-out,
            color 0.25s ease-in-out,
            border-radius 0.25s ease-in-out;
    }

    .content:hover {
        background-color: var(--secondary-color);
        color: var(--tertiary-color);
    }
}
</style>

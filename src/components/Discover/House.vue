<script setup>
import { FaBed, FaBath, FaExpandArrowsAlt } from 'vue-icons-plus/fa'

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
})
</script>

<template>
    <div class="house">
        <div class="imageContainer">
            <img :src="image" alt="house" />
        </div>
        <div class="content">
            <p class="pricePar">
                From <span class="price">{{ price }}€</span> night
            </p>
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
            </div>
        </div>
    </div>
</template>

<style scoped>
.house {
    display: grid;
    max-width: 450px;
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
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: grid;
    row-gap: 0.5rem;
    color: var(--secondary-color);
}

.pricePar {
    font-size: var(--fs-base);
    font-weight: 400;
}

.price {
    font-weight: 500;
}

.body {
    display: grid;
    row-gap: 0.25rem;
}

.title {
    font-size: var(--fs-lg);
    font-weight: 700px;
}

.address {
    font-size: var(--fs-base);
    font-weight: 400;
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
}

.info div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.info div svg {
    height: 16px;
    fill: var(--primary-color);
}

.info div p {
    font-size: var(--fs-sm);
    font-weight: 400;
}

@media screen and (min-width: 1024px) {
    .imageContainer {
        height: 250px;
    }

    .content {
        row-gap: 1rem;
    }

    .pricePar {
        font-size: 16px;
        font-weight: 400;
    }

    .price {
        font-weight: 500;
    }

    .title {
        font-size: 22px;
        font-weight: 700px;
    }

    .address {
        font-size: 16px;
        font-weight: 400;
    }

    .info div p {
        font-size: 12px;
    }
}
</style>

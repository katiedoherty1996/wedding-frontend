<template>
    <div>
        <div class="row flex justify-center align-center">
            <div class="col-12 q-pa-md">
                <q-carousel
                    swipeable
                    animated
                    v-model="slide"
                    height=650px
                    control-text-color=white
                    arrows
                    infinite
                    style="width: 90%; max-width: 1300px; margin: 0 auto;" 
                    @transition="handleSlideChange"
                >
                    <q-carousel-slide v-for="(product, index) in products" :key="product.key" :name="index" :img-src="product.image" />
                </q-carousel>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ThumbnailCarousel
                    :imageKey = "imageKey"
                    :products = "products"
                    @imageKeyUpdated="handleImageKeyUpdate"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.slide {
  display: flex;
}
.centered-image {
  width: 400px;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire space while maintaining its aspect ratio */
}
</style>

<script>
import { ref } from 'vue'
import ThumbnailCarousel from 'components/ThumbnailCarousel.vue';

export default {
    components: {
        ThumbnailCarousel,
    },
    data(){
        return {
            imageKey: this.products[0].key,
        }
    },
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleSlideChange(newVal) {
            var productObject = this.products[newVal];
            this.imageKey = productObject.key;
        },
        handleImageKeyUpdate(key) {
            // Handling the data received from the child component
            this.imageKey = key;
            var productIndex = this.products.findIndex(product => product.key == this.imageKey);
            this.slide = ref(productIndex);
        }

    },
    watch: {
    },
    setup () {
        return {
            slide: ref(0)
        }
    }
}
</script>
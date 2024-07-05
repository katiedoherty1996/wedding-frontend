<template>
    <div>
        <div class="row flex justify-center align-center">
            <div class="col-12 col-sm-12 col-xs-12" :class="{ 'q-pa-md': isDesktop }">
                <q-carousel
                    swipeable
                    animated
                    v-model="slide"
                    control-text-color=white
                    :height = "carouselHeight"
                    :arrows="products.length > 1"
                    infinite
                    style="carouselWidth" 
                    @transition="handleSlideChange"
                >
                    <q-carousel-slide v-for="(product, index) in products" :key="product.key" :name="index" :img-src="product.image" />
                </q-carousel>
            </div>
        </div>
        <div class="row" v-if="!showSmallImages">
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
import { Platform } from 'quasar';

export default {
    components: {
        ThumbnailCarousel,
    },
    data(){
        return {
            imageKey: 'DWI1',
        }
    },
    props: {
        products: {
            type: Array,
            required: true
        },
        showSmallImages: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        carouselHeight() {
            return Platform.is.desktop ? "550px" : window.innerWidth < 600 ? "500px" : "650px";
        },
        carouselWidth() {
            return window.innerWidth < 600 ? "width:100%" : "width: 60%; max-width: 1300px; margin: 0 auto;" ;
        },
        isMobile() {
            return Platform.is.mobile;
        },
        isDesktop() {
            return Platform.is.desktop;
        },
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
        products: {
            immediate: true,
            handler(newProducts, oldProducts) {
                if (this.products.length > 0) {
                    this.imageKey = this.products[0].key;
                }
            }
        }
    },
    setup () {
        return {
            slide: ref(0)
        }
    }
}
</script>
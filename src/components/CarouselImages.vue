<template>
    <div>
        <div class="row flex justify-center align-center">
            <div class="col-12 q-pa-md">
                <q-carousel
                    swipeable
                    animated
                    v-model="slide"
                    height=750px
                    control-text-color=white
                    arrows
                    infinite
                >
                    <q-carousel-slide :name="1" img-src="/images/weddinginvite9.jpeg" />
                    <q-carousel-slide :name="2" img-src="/images/weddinginvite7.jpeg" />
                    <q-carousel-slide :name="3" img-src="/images/weddinginvite6.jpeg" />
                    <q-carousel-slide :name="4" img-src="/images/weddinginvite10.jpeg" />
                </q-carousel>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ThumbnailCarousel />
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
    setup () {
        return {
            slide: ref(1)
        }
    }
}
</script>
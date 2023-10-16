<template>
  <div class="q-pa-md q-pt-lg">
    <div class="row">
      <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          class="teal-custom-colour text-white shadow-1 rounded-borders"
          style="height: auto; max-height: 100%;"
      >
        <q-carousel-slide v-for="(review, index) in reviews" :key="index" :name="index" class="column no-wrap flex-center">
          <div class="text-center allura" style="font-size:60px;">Google Reviews</div>
          <div class="q-pt-sm">
              <q-icon name="star" size="35px" class="text-warning" />
              <q-icon name="star" size="35px" class="text-warning" />
              <q-icon name="star" size="35px" class="text-warning" />
              <q-icon name="star" size="35px" class="text-warning" />
              <q-icon name="star" size="35px" class="text-warning" />
          </div>
          <div class="q-mt-md text-center f-20 quattrocento" >
              {{ review.text }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(0),
    }
  },
  props: {
    reviews: Array,
  },
}
</script>

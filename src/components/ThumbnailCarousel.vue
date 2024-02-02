<template>
    <div>
        <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="black"
            padding
            arrows
            height="200px"
        >
            <q-carousel-slide :name="1" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="col-4 full-height" src="/images/weddinginvite6.jpeg" />
                    <q-img class="col-4 full-height" src="/images/weddinginvite5.jpeg" />
                    <q-img class="col-4 full-height" src="/images/weddinginvite8.jpeg" />
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="col-4 full-height" src="/images/weddinginvite10.jpeg" />
                    <q-img class="col-4 full-height" src="/images/weddinginvite9.jpeg" />
                    <q-img class="col-4 full-height" src="/images/weddinginvite8.jpeg" />
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>

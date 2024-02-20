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
                    <q-img 
                        v-for="product in products" 
                        :key="product.key" 
                        class="col-4 full-height" 
                        :src="product.image" 
                        :style="{ border: product.key === imageKey2 ? '5px solid #417759' : '' }" 
                        style="cursor:pointer;" 
                        @click="setImageKey(product.key)"
                    />
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
    },
    data() {
        return {
            imageKey2: this.products[0].key,
        }
    },
    props: {
        products: {
            type: Array,
            required: true
        },
        imageKey: {
            type: String,
            required: true
        },
    },
    watch: {
        imageKey() {
            this.imageKey2 = this.imageKey;
            // Handle imageKey change as needed
        }
    },
    methods: {
        setImageKey(key) {
            this.imageKey2 = key;
            this.$emit('imageKeyUpdated', this.imageKey2);
        },
    },
}
</script>

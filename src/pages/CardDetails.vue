<template>
    <MobileViewCardDetails v-if="$q.screen.lt.sm" :products = "products" />
    <IpadOrBigScreenCardDetails v-else :products = "products" />
</template>

<script>
import { ref } from 'vue';
import MobileViewCardDetails from 'components/MobileViewCardDetails.vue';
import IpadOrBigScreenCardDetails from 'components/IpadOrBigScreenCardDetails.vue';

export default {
    components: {
        MobileViewCardDetails,
        IpadOrBigScreenCardDetails
    },
    data(){
        return {
            products: [
                {
                    id: 1,
                    key: 'DWI1',
                    image : "images/weddinginvite10.jpeg",
                    name: 'Wedding Card 1',
                    description: 'Gold foil wedding invitation. Trifold and exquisite'
                },
                {
                    id: 4,
                    key: 'DWI2',
                    image : "/images/weddinginvite9.jpeg",
                    name: 'Wedding Card 2',
                    description: 'Gold foil wedding invitation. Trifold and exquisite'
                },
                {
                    id: 3,
                    key: 'DWI3',
                    image : "/images/weddinginvite7.jpeg",
                    name: 'Wedding Card 3',
                    description: 'Gold foil wedding invitation. Trifold and exquisite'
                },
            ]
        }
    },
    props: {
    },
    computed: {
    },
    methods: {
    },
    setup () {
        return {
        }
    }
}
</script>
<template>
    <q-page>
        <div>
            <div class="row">
                <div class="col-md-6 col-12 with-vertical-line">
                    <CarouselImages 
                        :products="products"
                    />
                </div>

                <!-- Vertical line -->
                <div class="vertical-line"></div>

                <!--Cards information-->
                <div class="col-md-6 col-12">
                    <q-card-section>
                        <div class="row no-wrap items-center">
                            <div class="col text-h2 ellipsis">
                                Wedding Card Name
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div class="f-40">
                            €3.50 each
                        </div>
                        <div class="text-caption">
                            This is the description for the wedding card that the user clicked on.
                        </div>
                    </q-card-section>

                    <q-separator />

                    <!--buttons-->
                    <q-card-actions class="q-pa-md">
                        <q-btn 
                            v-close-popup 
                            label="Contact Us About This Card" 
                            color="light-green-10" 
                            icon="check" 
                            class="q-btn-sm q-mb-sm white" 
                        />
                    </q-card-actions>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { ref } from 'vue';
import CarouselImages from 'components/CarouselImages.vue';

export default {
    components: {
        CarouselImages,
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
        dialogVisible: Boolean,
    },
    computed: {
        computedDialogVisible: {
            get() {
                return this.dialogVisible;
            },
            set(value) {
                // Emit an event to update the prop value when the dialog visibility changes
                this.$emit('update:dialogVisible', value);
            },
        },
    },
    methods: {
    },
    setup () {
        return {
            slide: ref(1),
            lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',

            stars: ref(3),

            slideVol: ref(39),
            slideAlarm: ref(56),
            slideVibration: ref(63)
        }
    }
}
</script>
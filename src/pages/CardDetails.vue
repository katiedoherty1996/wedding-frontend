<template>
    <q-page class="q-gutter-lg background-element ">
        <div class="row">
            <div class="col-md-6 col-12">
                <CarouselImages 
                    :products="products"
                />
            </div>

            <!--Cards information-->
            <div class="col-md-6 col-12 q-pl-lg">
                <q-card-section class="">
                    <div class="row no-wrap items-center">
                        <div class="col">
                            <div class="f-55 quattrocento teal-custom-colour-text">
                                <b>Elegant Wedding Card</b>
                            </div>
                            <div class=" grey-text-colour">
                                <span class="f-30 teal-custom-colour-text">€3.50 each</span>
                            </div>
                        </div>
                    </div>
                </q-card-section>

                <q-separator />

                <div class="row">
                    <div class="col-12">
                        <!--place an order for cards -->
                        <q-card-section>
                            <PlaceOrderForm />
                        </q-card-section>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <ExtraCardDetails />
        </div>
    </q-page>
</template>

<script>
import { ref } from 'vue';
import CarouselImages from 'components/CarouselImages.vue';
import PlaceOrderForm from 'components/PlaceOrderForm.vue';
import ExtraCardDetails from 'components/ExtraCardDetails.vue';

export default {
    components: {
        CarouselImages,
        PlaceOrderForm,
        ExtraCardDetails,
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
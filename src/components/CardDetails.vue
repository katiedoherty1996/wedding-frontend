<template>
    <q-page class="q-gutter-lg background-element">
        <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-12 col-12">
                <CarouselImages 
                    :products="products"
                    :showSmallImages="showSmallImages"
                />
            </div>

            <!--Cards information-->
            <div class="col-md-6 col-12 col-sm-12 col-lg-6 q-pl-lg">
                <q-card-section>
                    <div class="row no-wrap items-center">
                        <div class="col">
                            <div class="f-55 quattrocento teal-custom-colour-text">
                                <b>{{name}}</b>
                            </div>
                            <div class=" grey-text-colour">
                                <span class="f-30 teal-custom-colour-text">€{{price}} each</span>
                            </div>
                        </div>
                    </div>
                </q-card-section>

                <q-separator />

                <div class="row">
                    <div class="col-12">
                        <!--place an order for cards -->
                        <q-card-section>
                            <PlaceOrderForm
                                :priceHighGrade = "priceHighGrade" 
                                :priceLowGrade = "priceLowGrade"
                            />
                        </q-card-section>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { ref } from 'vue';
import CarouselImages from 'components/CarouselImages.vue';
import PlaceOrderForm from 'components/PlaceOrderForm.vue';

export default {
    components: {
        CarouselImages,
        PlaceOrderForm,
    },
    data(){
        return {
        }
    },
    props: {
        dialogVisible: Boolean,
        products: {
            type: Array,
            required: true
        },
        showSmallImages: {
            type: Boolean,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        priceHighGrade: {
            type: String,
            required: true
        },
        priceLowGrade: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required:true
        },
        name: {
            type: String,
            required: true
        }
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
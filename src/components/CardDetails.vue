<template>
    <!--back button-->
    <div v-if="userScrolled && !dismissGoBack" class="fixed q-header bg-white" style="width: 100%;">
        <div class="col-12 flex justify-between align-center">
            <q-btn 
                flat 
                icon="arrow_back" 
                class="teal-custom-colour-text q-ma-sm q-pa-sm" 
                label="Go Back To Gallery" 
                @click="goBack"
            />
            <q-btn 
                flat 
                icon="close" 
                class="teal-custom-colour-text float-right" 
                @click="dismiss"
            />
        </div>
    </div>
    <div class="q-h-100" :class="{ 'q-pa-md background-element': isDesktop }">
        <!--back button-->
        <div class="q-ma-sm q-pa-sm">
            <q-btn 
                flat 
                icon="arrow_back" 
                class="teal-custom-colour-text" 
                label="Go Back To Gallery" 
                @click="goBack"
            />
        </div>
        <q-scroll-observer @scroll="onScroll" />
        <div class="row" style="max-width: 1300px; margin:auto;">
            
            <div class="col-md-6 col-lg-6 col-sm-12 col-12">
                <CarouselImages 
                    :products="products"
                    :showSmallImages="showSmallImages"
                />
            </div>

            <!--Cards information-->
            <div class="col-md-6 col-12 col-sm-12 col-lg-6" :class="{ 'q-pl-lg': isDesktop }">
                <q-card-section>
                    <div class="row no-wrap items-center" :class="{'text-center' : isMobile}">
                        <div class="col-12">
                            <div class="allura teal-custom-colour-text" style="font-size:60px;">
                                <b>{{name}}</b>
                            </div>
                        </div>
                    </div>
                    <div class="row no-wrap items-center">
                        <div class="col-12">
                            <div class="quattrocento text-grey q-pl-xs" style="font-size:18px;" :class="{'text-center' : isMobile}">
                                <span v-if="priceHighGrade && priceLowGrade">
                                    Price For <b>Low Grade Paper</b>: <b>{{formatPrice(priceLowGrade)}}</b> each <br/>
                                    Price For <b>High Grade Paper</b>: <b>{{formatPrice(priceHighGrade)}}</b> each<br/>
                                </span>
                                <span v-else-if="price">
                                    Price: <b>{{formatPrice(price)}}</b> each
                                </span>
                                <span v-else>
                                    No Price Available
                                </span>
                                <span v-if="samplePrice">
                                    Price For Sample: <b>{{formatPrice(samplePrice)}}</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </q-card-section>

                <div class="row">
                    <div class="col-12">
                        <!--place an order for cards -->
                        <q-card-section>
                            <PlaceOrderForm
                                :cardPaperTypes = "cardPaperTypes" 
                            />
                        </q-card-section>
                    </div>
                </div>
            </div>
        </div>
        <!--expand information-->
        <div style="max-width: 1300px; margin:auto;">
            <ExpandInformation
                :description = "description"
            />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import CarouselImages from 'components/CarouselImages.vue';
import PlaceOrderForm from 'components/PlaceOrderForm.vue';
import ExpandInformation from 'components/ExpandInformation.vue';
import { usePriceFormatter } from '../hooks/usePriceFormatter';
import { Platform } from 'quasar';

export default {
    components: {
        CarouselImages,
        PlaceOrderForm,
        ExpandInformation,
    },
    data(){
        return {
            userScrolled:false,
            dismissGoBack: false,
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
            type: Number,
            required: false
        },
        priceLowGrade: {
            type: Number,
            required: false
        },
        priceHighGrade: {
            type: Number,
            required: false
        },
        samplePrice: {
            type: Number,
            required: false
        },
        cardPaperTypes: {
            type: Array,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        }
    },
    mounted() {
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
        isMobile() {
            return Platform.is.mobile;
        },
        isDesktop() {
            return Platform.is.desktop;
        }
    },
    methods: {
        goBack() {
            // Implement your go back logic here
            this.$router.go(-1);
        },
        onScroll(info){
            this.userScrolled = info.position.top > 0;
        },
        dismiss() {
            // Hide the div by setting userScrolled to false
            this.userScrolled = false;
            this.dismissGoBack = true;
        }
        
    },
    setup () {
        const { formatPrice } = usePriceFormatter();
        return {
            slide: ref(1),
            lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
            formatPrice,

            stars: ref(3),

            slideVol: ref(39),
            slideAlarm: ref(56),
            slideVibration: ref(63)
        }
    }
}
</script>
<template>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="computedDialogVisible" @click="closeDialog">
            <q-card class="my-card" style="width: 3000px; position: relative; max-width: 180vh;">
                <div class="absolute-top-right cursor q-card-close q-pr-md q-pt-sm" @click="closeDialog">X</div>
                <div class="q-mt-md row">
                    <div class="col-md-6 col-12">
                        <CarouselImages />
                    </div>

                    <!--Cards information-->
                    <div class="col-md-6 col-12">
                        <q-card-section>
                            <div class="row no-wrap items-center">
                                <div class="col text-h6 ellipsis">
                                    Wedding Card Name 
                                </div>
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <div class="text-subtitle1">
                                €3.50 each
                            </div>
                            <div class="text-caption">
                                This is the description for the wedding card that the user clicked on.
                            </div>
                        </q-card-section>

                        <q-separator />

                        <!--input for number of cards and the calculation for prices-->
                        <div class="row">
                            <div class="col-md-6">
                                <q-card-section class="q-pt-none q-mt-sm">
                                    <div class="text-subtitle1">
                                        Enter Number Of Cards
                                    </div>
                                    <div>
                                        <q-input
                                            label="Number of cards"
                                            type="number"
                                            filled
                                            style="max-width: 200px;"
                                        />
                                    </div>
                                </q-card-section>
                            </div>
                            <div class="col-md-6">
                                <q-card-section class="q-pt-none q-mt-sm hidden">
                                    <div class="text-subtitle1">
                                        Number Of Cards: 10
                                    </div>
                                    <div class="text-subtitle1">
                                        Total Price: €70
                                    </div>
                                    <div class="text-caption">
                                        €3.50 each
                                    </div>
                                </q-card-section>
                            </div>
                        </div>

                        <q-separator />

                        <!--buttons-->
                        <q-card-actions class="q-pa-md">
                            <q-btn v-close-popup color="primary" label="Calculate Price" icon="reply" class="q-btn-sm q-mb-sm" />
                            <q-btn v-close-popup color="primary" label="Add To Basket" icon="check" class="q-btn-sm q-mb-sm" />
                            <q-btn v-close-popup color="primary" label="Enquire" icon="reply" class="q-btn-sm q-mb-sm" />
                            <q-btn v-close-popup color="primary" label="Book An Appointment" icon="event" class="q-btn-sm q-mb-sm" />
                        </q-card-actions>
                    </div>
                </div>
            </q-card>
        </q-dialog>
    </div>
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
        closeDialog() {
            // Emit an event to inform the parent component that the modal should be closed
            this.$emit('close-dialog');
        },
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
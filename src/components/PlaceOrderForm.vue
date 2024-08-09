<template>
    <div class="backgroundWhite q-pa-md" style="max-width: 100%">
        <div class="allura teal-custom-colour-text q-pb-sm" style="font-size:40px;" :class="{'text-center' : isMobile}">
            Inquire About This Card
        </div>
        <q-form
            @submit.prevent="onSubmit"
            @reset="onReset"
        >
            <q-input
                filled
                class="q-mb-sm"
                v-model="name"
                label="Your name *"
                lazy-rules
                :error="!!errors.name"
                :error-message="errors.name"
            />

            <q-input
                filled
                class="q-mb-sm"
                v-model="email"
                label="Your email *"
                lazy-rules
                :error="!!errors.email"
                :error-message="errors.email"
            />

            <q-input
                filled
                class="q-mb-sm"
                v-model="mobile"
                label="Your mobile number *"
                type="number"
                lazy-rules
                :error="!!errors.mobile"
                :error-message="errors.mobile"
            />

            <div class="q-mb-sm">
                <q-select 
                    clearable 
                    filled 
                    color="light-green-10" 
                    v-model="selectedCardPaperTypeId" 
                    :options="cardPaperTypes" 
                    label="Card Paper Type" 
                    option-value="cardPaperId"
                    option-label="cardPaperName"
                    class="q-mb-sm"
                    :error="!!errors.cardPaper"
                    :error-message="errors.cardPaper"
                />
            </div>

            <q-input
                v-model="message"
                label="Enter Your Message"
                filled
                class="q-mb-sm"
                type="textarea"
                lazy-rules
                :error="!!errors.message"
                :error-message="errors.message"
            />

            <LottieLoader 
                :showAnimationLoader="showAnimationLoader"
                :animationData="animationData"
            />

            <div class="q-pt-md">
                <q-btn class="pine white" icon-right="mail" label="Submit" @click="onSubmit" />
                <QuasarDialog 
                    :success="success"
                    :message="successMessage"
                    v-model="isDialogOpen" 
                />
                <q-btn label="Reset" type="reset" flat class="q-ml-sm teal-custom-colour-text" @click="onReset" />
            </div>
        </q-form>
    </div>
</template>

<style>
/* Prevent spinners from appearing */
input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0; /* Remove default margin */
}
</style>

<script>
import { defineComponent } from 'vue'; 
import { api } from 'src/boot/axios';
import QuasarDialog from 'components/QuasarDialog.vue';
import { Platform } from 'quasar';
import LottieLoader from 'components/LottieLoader.vue';
import animationData from 'components/animations/SendingMailAnimation.json';

export default defineComponent({
    components: {
        QuasarDialog,
        LottieLoader
    },
    data(){
        return {
            email: '',
            subject: 'Subject: Card Number',
            mobile: '',
            name: '',
            message: '',
            errors: {},
            selectedCardPaperTypeId: null,
            isDialogOpen: false,
            success: false,
            successMessage: null,
            showAnimationLoader:false,
            animationData
        }
    },
    props: {
        cardPaperTypes: {
            type: Array,
            required: false
        },
    },
     mounted() {
    },
    computed: {
        isMobile() {
            return Platform.is.mobile;
        },
        isDesktop() {
            return Platform.is.desktop;
        }
    },
    methods: {
        validateForm() {
            this.errors = {};
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!this.name) {
                this.errors.name = 'Name is required';
            }

            if (!this.mobile) {
                this.errors.mobile = 'Phone number is required';
            } else if (!/^\d{10}$/.test(this.mobile)) {
                this.errors.mobile = 'Phone number must be 10 digits';
            }

            if (!this.email) {
                this.errors.email = 'Email is required';
            } else if (!emailRegex.test(this.email)) {
                this.errors.email = 'Invalid email format';
            }

            if (!this.selectedCardPaperTypeId) {
                this.errors.cardPaper = 'Card Paper Type is required';
            }

            if (!this.message) {
                this.errors.message = 'Message is required';
            }

            return Object.keys(this.errors).length === 0;
        },
        onSubmit(){
            
            var cardId = this.$route.query.id;
            if(this.validateForm()){
                this.showAnimationLoader = true;
                api.post('/sendenquiry', {
                    cardId: cardId,
                    name: this.name,
                    phoneNumber: this.mobile,
                    email: this.email,
                    cardPaper: this.selectedCardPaperTypeId,
                    customerMessage: this.message
                })
                .then(response => {
                    this.success = response.data.sent;
                    this.successMessage = response.data.message;
                })
                .catch(error => {
                    this.success = error.response.data.sent;
                    this.successMessage = error.response.data.message;
                    console.error('Error:', error);
                }).finally(() =>{
                    this.showAnimationLoader = false;
                    this.isDialogOpen = true;

                    if(this.success){
                        this.onReset();
                    }
                });

            }
        },
        onReset(){
            this.email = '';
            this.mobile = '';
            this.name = '';
            this.message = '';
            this.selectedCardPaperTypeId = null;
        },
        
    },
    setup() {
    }
});
</script>
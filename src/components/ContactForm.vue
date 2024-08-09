<template>
  <div class="q-pa-md q-mx-auto" style="max-width: 800px">

    <q-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-mx-auto"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        lazy-rules
        :error="!!errors.name"
        :error-message="errors.name"
      />

      <q-input
        filled
        v-model="email"
        label="Your email *"
        lazy-rules
        :error="!!errors.email"
        :error-message="errors.email"
      />

      <q-input
        filled
        v-model="mobile"
        label="Your Mobile Number *"
        lazy-rules
        :error="!!errors.mobile"
        :error-message="errors.mobile"
      />

      <q-input
            v-model="message"
            label="Your message *"
            filled
            type="textarea"
            lazy-rules
            :error="!!errors.message"
            :error-message="errors.message"
        />

        <LottieLoader 
            :showAnimationLoader="showAnimationLoader"
            :animationData="animationData"
        />

      <div>
        <q-btn label="Submit" type="submit" class="pine white" />
        <QuasarDialog 
            :success="success"
            :message="successMessage"
            v-model="isDialogOpen" 
        />
        <q-btn label="Reset" type="reset" class="q-ml-sm teal-custom-colour-text" flat @click="onReset" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { defineComponent } from 'vue'; 
import QuasarDialog from 'components/QuasarDialog.vue';
import { api } from 'src/boot/axios';
import LottieLoader from 'components/LottieLoader.vue';
import animationData from 'components/animations/SendingMailAnimation.json';

export default defineComponent({
    name: "ContactForm",
    components: {
      QuasarDialog,
      LottieLoader
    },
    data(){
      return{
        email: '',
        name: '',
        message: '',
        mobile: '',
        errors: {},
        isDialogOpen: false,
        success: false,
        successMessage,
        showAnimationLoader:false,
        animationData
      }
    },
    props: {
        video: String,
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

            if (!this.message) {
                this.errors.message = 'Message is required';
            }

            return Object.keys(this.errors).length === 0;
        },
        onSubmit(){
            if(this.validateForm()){
              this.showAnimationLoader = true;
                api.post('/sendenquiry', {
                    name: this.name,
                    phoneNumber: this.mobile,
                    email: this.email,
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
        },
    }
});
</script>
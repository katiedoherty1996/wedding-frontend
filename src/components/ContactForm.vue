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

      <div>
        <q-btn label="Submit" type="submit" class="pine white" />
        <QuasarDialog 
            :sent="sent"
            v-model="isDialogOpen" 
        />
        <q-btn label="Reset" type="reset" class="q-ml-sm teal-custom-colour-text" flat @click="onReset" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { defineComponent } from 'vue'; 
import { Loading } from 'quasar';
import QuasarDialog from 'components/QuasarDialog.vue';
import { api } from 'src/boot/axios';

export default defineComponent({
    name: "ContactForm",
    components: {
      QuasarDialog
    },
    data(){
      return{
        email: '',
        name: '',
        message: '',
        mobile: '',
        errors: {},
        isDialogOpen: false,
        sent: false,
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
                Loading.show()
                api.post('/sendenquiry', {
                    name: this.name,
                    phoneNumber: this.mobile,
                    email: this.email,
                    customerMessage: this.message
                })
                .then(response => {
                    this.sent = true;
                })
                .catch(error => {
                    this.sent = false;
                    console.error('Error:', error);
                }).finally(() =>{
                    Loading.hide()
                    this.isDialogOpen = true;

                    if(this.sent){
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
<template>
    <div class="backgroundWhite q-pa-md" style="max-width: 500px">
        <div class="quattrocento teal-custom-colour-text q-pb-sm" style="font-size:30px;">
            Inquire About This Card
        </div>
        <q-form
            @submit="onSubmit"
            @reset="onReset"
        >
            <q-input
                filled
                v-model="name"
                label="Your name *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                filled
                v-model="quantity"
                label="Quantity *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                style="flex:1;"
            />

            <q-input
                filled
                v-model="email"
                label="Your email *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                filled
                v-model="mobile"
                label="Your mobile number *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                v-model="text"
                label="Additional Information (optional)"
                filled
                type="textarea"
            />

            <div class="q-pt-md">
            <q-btn class="pine white" icon-right="mail" label="Submit" />
            <q-btn label="Reset" type="reset" flat class="q-ml-sm teal-custom-colour-text" />
            </div>
        </q-form>
    </div>
</template>

<script>
import { defineComponent } from 'vue'; 

export default defineComponent({
    name: "ContactForm",
    components: {
    },
    data(){
        return{
            email: '',
            subject: 'Subject: Card Number',
            name: '',
            text: ''
        }
    },
    props: {
        video: String,
    },
    methods: {
        onSubmit(){

        },
        onReset(){
          
        }
    }
});
</script>
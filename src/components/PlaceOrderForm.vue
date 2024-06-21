<template>
    <div class="backgroundWhite q-pa-md" style="max-width: 100%">
        <div class="quattrocento teal-custom-colour-text q-pb-sm" style="font-size:30px;">
            Inquire About This Card
        </div>
        <q-form
            @submit="onSubmit"
            @reset="onReset"
        >
            <q-input
                filled
                class="q-mb-sm"
                v-model="name"
                label="Your name *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                filled
                class="q-mb-sm"
                v-model="email"
                label="Your email *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                filled
                class="q-mb-sm"
                v-model="mobile"
                label="Your mobile number *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
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
                    :rules="[val => !!val || 'Selection is required']"
                />
            </div>

            <q-input
                v-model="message"
                label="Additional Information (optional)"
                filled
                class="q-mb-sm"
                type="textarea"
            />

            <div class="q-pt-md">
            <q-btn class="pine white" icon-right="mail" label="Submit" @click="onSubmit" />
            <q-btn label="Reset" type="reset" flat class="q-ml-sm teal-custom-colour-text" />
            </div>
        </q-form>
    </div>
</template>

<script>
import { defineComponent } from 'vue'; 
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';

export default defineComponent({
    name: "ContactForm",
    components: {
    },
    data(){
        return{
            email: '',
            subject: 'Subject: Card Number',
            name: '',
            message: '',
            cardPaperTypes: [],
            selectedCardPaperTypeId: null,

        }
    },
    props: {
        priceHighGrade: {
            type: String,
            required: false
        },
        priceLowGrade: {
            type: String,
            required: false
        },
    },
     mounted() {
        // Make AJAX call on page load
        this.getCardPaperTypes();
    },
    methods: {
        onSubmit(){
            const $q = useQuasar();
            // $q.loading.show()
            var cardId = this.$route.query.id;
            console.log(this.selectedCardPaperTypeId);

            api.post('/sendenquiry', {
                cardId: cardId,
                name: this.name,
                phoneNumber: this.mobile,
                email: this.email,
                cardPaper: this.selectedCardPaperTypeId,
                customerMessage: this.message
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            }).finally(() =>{
                // $q.loading.hide()
            });
        },
        onReset(){
          
        },
        getCardPaperTypes(){
            const $q = useQuasar();
            $q.loading.show()

            api.get('/cardpapertypes')
            .then(response => {
                this.cardPaperTypes = response.data.map(type => {
                    console.log('type',type);
                    return {
                        cardPaperName: `${type.cardPaperName} - $${this[type.cardPaperVariable] || 'N/A'}`,
                        cardPaperId: type.cardPaperId
                    }
                });
            })
            .catch(error => {
                console.error('Error:', error);
            }).finally(() =>{
                $q.loading.hide()
            });
        }
    }
});
</script>
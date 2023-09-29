<template>
  <div class="q-pa-md q-mx-auto" style="max-width: 800px">

    <ComponentHeadings heading="Contact Us"/>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-mx-auto"
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
        v-model="email"
        label="Your email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
            v-model="text"
            label="Your message *"
            filled
            type="textarea"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { defineComponent } from 'vue'; 
import ComponentHeadings from 'components/ComponentHeadings.vue';

export default defineComponent({
    name: "ContactForm",
    components: {
      ComponentHeadings,
    },
    data(){
      return{
        email: '',
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
<template>
  <div class="row q-mx-auto q-pa-md">
    <div v-if="imageLeft" class="q-pa-md col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
            :ratio="16/9" 
            :src="image" 
            alt="Image" 
        />
    </div>
    <div class="col-md-6 col-lg-6 col-sm-12 flex items-center q-pa-md">
      <div class="f-20 quattrocento">
        {{text}}
      </div>
    </div>
    <div v-if="!imageLeft" class="q-pa-md col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
            :ratio="16/9" 
            :src="image" 
            alt="Image" 
        />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'; 

export default defineComponent({
    name: "ImageAndInformation",
    props: {
        image: String,
        text: String,
        imageLeft: Boolean,
    }
});
</script>
<template>
    <div class="row bg-grey-3">
        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 flex justify-center container">
            <div class="flex column q-pa-lg">
                <div class="quattrocento q-pt-lg q-pr-sm q-pl-sm" style="font-size:60px;">{{ headerText }}</div>
                <div class="allura q-pb-lg q-pl-sm" style="font-size:30px;">{{ subtext }}</div>
                <q-btn 
                    outline 
                    style="max-width:300px;" 
                    class="teal-custom-colour-text q-mb-lg q-ml-sm" 
                    label="View Our Products" 
                    @click="scrollToProducts"
                />
            </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
            <q-img style="width:100%; height:auto;" :src="image" alt="Image" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'; 

export default defineComponent({
    name: 'HomePageHeader',
    props: {
        headerText: {
          type: String,
          required: true,
        },
        subtext: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
    },
    methods: {
        scrollToProducts(){
            scrollToId('products');
        }
    }
});
</script>
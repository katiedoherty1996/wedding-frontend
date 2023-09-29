<template>
  <div class="row bg-grey-3">
    <div class="col-md-6 col-sm-12 d-flex">
      <div class="d-flex justify-center align-center flex-column">
        <h2 class="p-md-4 p-3 quattrocento">{{ headerText }}</h2>
        <p class="p-md-4 p-3 allura h2">{{ subtext }}</p>
      </div>
    </div>
    <div class="col-md-6 col-sm-12">
      <q-img class="image" :src="image" alt="Image" />
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
});
</script>
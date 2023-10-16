<template>
  <div class="row q-mx-auto">
    <div class="q-pa-md col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-video
        :ratio="16/9"
        :src="video"
      />
    </div>
    <div class="col-md-6 col-lg-6 col-sm-12 flex items-center mobile-hide">
      <div class="f-20 quattrocento mobile-hide">
        We are a small family run business who supply elegant and affordable wedding stationary.
        We pride ourselves on providing high-quality wedding invitations at affordable prices.
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'; 

export default defineComponent({
    name: "EmbeddedVideo",
    props: {
        video: String,
    }
});
</script>
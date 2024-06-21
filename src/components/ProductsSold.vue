<template>
  <div class="row">
    <div v-for="(image, index) in images" :key="index" :class="noOfColumns" class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
      <div class="flex justify-center q-pt-md">
        <a :href="image.url" class="cursor relative-position">
          <img class="q-pt-sm q-pl-sm q-pr-sm q-pb-sm"  :class="isIpadDevice ? 'image-size-medium-screen' : 'image-size-large-and-small-screen'" :src="image.image" alt="Image {{ index + 1 }}">
          <div class="overlay absolute inset-0 flex justify-center items-center text-center">
            <div class="white quattrocento" :class="isIpadDevice ? 'f-20' : 'f-30'">{{ image.imageText }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          selectedImageIndex: 0,
        }
    },
    props: {
      images: Array,
    },

    computed: {
        noOfColumns() {
            return "col-md-" + 12 /this.images.length;
        },
        isIpadDevice(){
          return isIpadDevice();
        }
    }
  };
</script>
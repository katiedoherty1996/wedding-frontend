<template>
  <div class="row">
    <div v-for="(image, index) in images" :key="index" :class="noOfColumns" class="col-xs-12 col-sm-6 col-md-4 mx-auto">
      <div class="d-flex justify-content-center">
        <div class="cursor position-relative mb-4">
          <img class="image-size p-3" :src="image.image" alt="Image {{ index + 1 }}">
          <div class="absolute-full overlay d-flex justify-center align-items-center text-center">
            <div class="white f-30 quattrocento">{{ image.imageText }}</div>
          </div>
        </div>
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
    }
  };
</script>
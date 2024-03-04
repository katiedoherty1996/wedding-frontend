<template>
    <div class="row">
        <q-card-section class="col-12">
            <div class="row no-wrap items-center">
                <div class="col">
                    <div class="f-30 quattrocento teal-custom-colour-text">
                        <b>Elegant Wedding Card</b>
                    </div>
                    <div class=" grey-text-colour">
                        <span class="f-20 teal-custom-colour-text">€3.50 each</span>
                    </div>
                </div>
            </div>
        </q-card-section>

        <div v-for="(product, index) in products" :key="index" class="image-container col-12">
            <img :src="product.image" class="card-image">
        </div>

        <div class="row">
            <div class="col-12">
                <!--place an order for cards -->
                <q-card-section>
                    <PlaceOrderForm />
                </q-card-section>
            </div>
        </div>
    </div>
</template>

<script>
import PlaceOrderForm from 'components/PlaceOrderForm.vue';

export default {
  components: {
      PlaceOrderForm,
  },
  props: {
      products: {
          type: Array,
          required: true
      }
  }
}
</script>

<style scoped>
.image-container {
  margin-bottom: 5px;
}

.card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
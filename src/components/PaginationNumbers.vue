<template>
  <div class="q-pa-lg flex flex-center p-">
    <q-pagination
      v-model="pagination.page"
      :max="numberOfPages"
      :max-pages="6"
      round
      outline
      color="light-green-10"
      @click="updatePage"
      direction-links
    />
  </div>
  <div style="margin-bottom: 30px"></div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'PaginationNumbers',
    data() {
        return {
            noOfPages: 0,
        }
    },
    emits: ['page-changed'],
    props: {
        products: Array,
        currentPage: Number,
        numberOfPages: Number,
    },
    computed: {
        
    },
    watch: {
        products(){
            this.pagination.page = this.currentPage;
        },
    },
    methods: {
        updatePage() {
            // Emit a custom event with the new page number
            this.$emit('page-changed', this.pagination.page);
            scrollToTop();
        },
    },
    setup() {
        const pagination = ref({
            page: 1,
        });
        return{
            pagination
        }
    }
});
</script>
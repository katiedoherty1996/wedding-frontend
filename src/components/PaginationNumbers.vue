<template>
  <div class="q-pa-lg flex flex-center p- fixed-pagination">
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

<style scoped>
.fixed-pagination {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* Ensure it is on top of other elements */
    background-color: white; /* Optional: Add a background color */
    padding: 10px; /* Optional: Add padding for better spacing */
    text-align: center; /* Center the pagination component */
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
}
</style>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'PaginationNumbers',
    data() {
        return {
            noOfPages: 0,
            userScrolled: false
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
        onScroll(info){
            this.userScrolled = info.position.top > 0;
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
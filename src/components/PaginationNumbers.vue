<template>
  <div class="q-pa-lg flex flex-center p-">
    <q-pagination
      v-model="pagination.page"
      :max="numberOfPages()"
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
        }
    },
    props: {
        products: Array,
        currentPage: Number,
    },
    computed: {
    },
    watch: {
        products(){
            this.pagination.page = this.currentPage;
        }
    },
    methods: {
        updatePage() {
            // Emit a custom event with the new page number
            this.$emit('page-changed', this.pagination.page);
            scrollToTop();
        },

        numberOfPages(){
            var numberOfInvitations = this.products.length;
            let divisibleNumber = isIpadDevice() ? 15 : 20
            const timesDivisibleByTen  = Math.floor(numberOfInvitations/divisibleNumber);
            const remainder = numberOfInvitations % divisibleNumber;
            var numberOfPages = timesDivisibleByTen + (remainder > 0 ? 1 : 0);
            console.log(numberOfPages)

            this.$emit('number-of-pages', numberOfPages);

            return numberOfPages;
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
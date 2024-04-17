<template>
    <q-page class="q-h-screen flex-center">
        <div class="row q-pa-md backgroundWhite">
            <div class="col-md-6 col-lg-6 col-12">
              <div class="row flex justify-center container">
                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-sm" :align="isMobileDevice || isIpadDevice ? 'center' : 'left'">
                  <span class="text-light-green-10 quattrocento" style="font-size:16px;">Showing {{this.filteredInvitations.length}} Cards, Page {{this.currentPage}}/{{this.numberOfPages}}</span>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-sm" :align="isMobileDevice || isIpadDevice ? 'center' : 'left'">
                    <SelectDropdown 
                        :options="priceOptions"
                        :clear-filters= "clearFiltersClicked"
                        label="Filter Price"
                        @categorySelected="onPriceCategorySelected"
                    />
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-12">
                <div class="row flex justify-center container">
                    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-sm" :align="isMobileDevice || isIpadDevice ? 'center' : 'left'">
                        <SelectDropdown 
                            :clear-filters= "clearFiltersClicked"
                            :options="cardOptions"
                            label="Filter Cards"
                            @categorySelected="onCardCategorySelected"
                        />
                    </div>
                    <!--section for clear filters button-->
                    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-sm" :align="isMobileDevice || isIpadDevice ? 'center' : 'left'">
                        <q-btn color="light-green-10 " icon="close" label="Clear All Filters" @click="clearFilters" />
                    </div>
                </div>
            </div>
        </div>
        <GalleryCard 
            :products="filteredInvitations" 
            :currentPage="currentPage"
        />
        <PaginationNumbers 
            v-if="!isMobileDevice"
            :products="filteredInvitations"  
            :currentPage="currentPage"
            :numberOfPages="numberOfPages"
            @page-changed="handlePageChanged"
            class="absolute-bottom top-100"
        />
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import GalleryCard from 'components/GalleryCard.vue'
import SelectDropdown from 'components/SelectDropdown.vue'
import PaginationNumbers from 'components/PaginationNumbers.vue'
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';

export default defineComponent({
    name: 'WeddingInvitations',
    components: {
        GalleryCard,
        SelectDropdown,
        PaginationNumbers
    },
    data(){
        return {
            invitations: [],
            selectedCategoryCard: null,
            selectedCategoryPrice: null,
            currentPage: 1,
            tempPageNo: null,
            cardOptions: [
                {
                  optionName: 'Foiled Invitations',
                  optionId: 1
                },
                {
                  optionName: 'Trifold Invitations',
                  optionId: 2
                },
                {
                  optionName: 'Folded Invitations',
                  optionId: 3
                },
                {
                  optionName: 'Vellum Invitations',
                  optionId: 4
                },
                {
                  optionName: 'Rustic Invitations',
                  optionId: 6
                },
                {
                  optionName: 'Flat Invitations',
                  optionId: 7
                },
                {
                  optionName: 'Floral Invitations',
                  optionId: 8
                },
            ],
            priceOptions: [
              {
                optionName: 'Lowest To Highest',
                optionId: 1,
              },
              {
                optionName: 'Highest To Lowest',
                optionId: 2,
              }
            ],
            isMobileDevice: isMobileDevice(),
            isIpadDevice: isIpadDevice(),
            clearFiltersClicked: false,
        }
    },
    mounted() {
        // Make AJAX call on page load
        this.getWeddingInvitations();
    },
    watch: {
        selectedCategoryCard(){
            if(!isEmpty(this.selectedCategoryCard)){
              this.tempPageNo = this.currentPage;
              this.currentPage = 1;
            } else{
              this.currentPage = this.tempPageNo;
            }
        }
    },
    computed: {

        filteredInvitations() {
          if (!isEmpty(this.selectedCategoryCard) && !isEmpty(this.selectedCategoryPrice) && this.selectedCategoryPrice.optionId == 1) {
                var filteredByCardsInvitations = this.invitations.filter(invitation => invitation.categoryId === this.selectedCategoryCard.optionId);
                var filteredByPriceInvitations = this.organizeByPrice(filteredByCardsInvitations, true);
                return filteredByPriceInvitations;
            } else if (!isEmpty(this.selectedCategoryCard) && !isEmpty(this.selectedCategoryPrice) && this.selectedCategoryPrice.optionId == 2) {
                var filteredByCardsInvitations = this.invitations.filter(invitation => invitation.categoryId === this.selectedCategoryCard.optionId);
                var filteredByPriceInvitations = this.organizeByPrice(filteredByCardsInvitations, true);
                return filteredByPriceInvitations;
            } else if (!isEmpty(this.selectedCategoryCard)) {
                var filteredInvitations = this.invitations.filter(invitation => invitation.categoryId === this.selectedCategoryCard.optionId);
                return filteredInvitations;
            } else if(!isEmpty(this.selectedCategoryPrice) && this.selectedCategoryPrice.optionId == 1){
                var filteredInvitations = this.organizeByPrice(this.invitations, true);
                return filteredInvitations;
            } else if(!isEmpty(this.selectedCategoryPrice) && this.selectedCategoryPrice.optionId == 2){
                var filteredInvitations = this.organizeByPrice(this.invitations, false);
                return filteredInvitations;
            } else {
                return this.invitations;
            }
        },
        numberOfPages(){
            var numberOfInvitations = this.invitations.length;
            let divisibleNumber = isIpadDevice() ? 15 : 20
            const timesDivisibleByTen  = Math.floor(numberOfInvitations/divisibleNumber);
            const remainder = numberOfInvitations % divisibleNumber;
            var numberOfPages = timesDivisibleByTen + (remainder > 0 ? 1 : 0);

            return numberOfPages;
        },
      
    },
    methods: {
      onCardCategorySelected(categoryId) {
          this.selectedCategoryCard = categoryId;
      },

      onPriceCategorySelected(categoryId) {
          this.selectedCategoryPrice = categoryId;
          this.clearFiltersClicked = false;
      },

      handlePageChanged(newPageNumber) {
          this.currentPage = newPageNumber;
          this.clearFiltersClicked = false;
      },

      organizeByPrice(products, ascending = true) {
        // Clone the array to avoid modifying the original array
        const sortedProducts = [...products];

        // Sort the cloned array based on the 'price' property
        sortedProducts.sort((a, b) => {
          const priceA = a.price;
          const priceB = b.price;

          if (ascending) {
            return priceA - priceB; // Sort from lowest to highest
          } else {
            return priceB - priceA; // Sort from highest to lowest
          }
        });

        return sortedProducts;
      },

      clearFilters(){
        this.selectedCategoryCard = null;
        this.selectedCategoryPrice = null;
        this.clearFiltersClicked = true;
      },

      getWeddingInvitations(){
          const $q = useQuasar();
          $q.loading.show()

          api.get('/weddingcards')
          .then(response => {
              this.invitations = response.data;
          })
          .catch(error => {
              console.error('Error fetching cards:', error);
          }).finally(() =>{
              $q.loading.hide()
          });
      }
    },
});
</script>
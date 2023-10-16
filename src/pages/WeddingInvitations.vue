<template>
    <q-page class="q-h-screen flex-center">
        <div class="row q-pa-md ">
            <div class="col-md-6 col-lg-6 col-12">
              <div class="row flex justify-center container">
                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-sm" :align="isMobileDevice ? 'center' : 'left'">
                  <span class="text-light-green-10 quattrocento" style="font-size:16px;">Showing {{this.filteredInvitations.length}} Cards, Page {{this.currentPage}}/{{this.numberOfPages}}</span>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-sm" :align="isMobileDevice ? 'center' : 'left'">
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
                    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-sm" :align="isMobileDevice ? 'center' : 'left'">
                        <SelectDropdown 
                            :clear-filters= "clearFiltersClicked"
                            :options="cardOptions"
                            label="Filter Cards"
                            @categorySelected="onCardCategorySelected"
                        />
                    </div>
                    <!--section for clear filters button-->
                    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-sm" :align="isMobileDevice ? 'center' : 'left'">
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

export default defineComponent({
    name: 'WeddingInvitations',
    components: {
        GalleryCard,
        SelectDropdown,
        PaginationNumbers
    },
    data(){
        return {
            invitations: [
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: 5.00,
                  pageNo: null,
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Floral Invitation',
                  price: 10.00,
                  pageNo: null,
                  categoryId: 1
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Tri-Fold Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 1
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Floral Rose Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 2
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Elegant Mangolia invitation',
                  price: 60.00,
                  pageNo: null,
                  categoryId: 4
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Rustic Invitation',
                  price: 10.00,
                  pageNo: null,
                  categoryId: 3
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Rustic Invitation',
                  price: 10.00,
                  pageNo: null,
                  categoryId: 3
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Rustic Invitation',
                  price: 10.00,
                  pageNo: null,
                  categoryId: 3
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Rustic Invitation',
                  price: 10.00,
                  pageNo: null,
                  categoryId: 3
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Rustic Invitation',
                  price: 10.00,
                  pageNo: null,
                  categoryId: 3
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Floral Invitation',
                  price: 10.00,
                  pageNo: null,
                  categoryId: 1
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Elegant Mangolia invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 4
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Tri-Fold Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 1
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 6
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 7
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 4
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 6
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: 5.00,
                  pageNo: null,
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: 5.00,
                  pageNo: null,
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: 5.00,
                  pageNo: null,
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: 5.00,
                  pageNo: null,
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: 5.00,
                  pageNo: null,
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: 5.00,
                  pageNo: null,
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: 5.00,
                  pageNo: null,
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: 5.00,
                  pageNo: null,
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 5
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 6
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 7
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 4
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 6
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 6
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 6
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: 9.00,
                  pageNo: null,
                  categoryId: 6
                },
                
                
            ],
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
            clearFiltersClicked: false,
            numberOfPages: 0,
        }
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
      }
    },

    numberOfPages(numberOfPages){
      this.numberOfPages = numberOfPages;
    }
});
</script>
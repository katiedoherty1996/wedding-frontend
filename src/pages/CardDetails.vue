<template>
    <CardDetails 
        :products = "products" 
        :price = "price"
        :priceHighGrade = "priceHighGrade"
        :priceLowGrade = "priceLowGrade"
        :description = "description"
        :name = "name"
        :showSmallImages="$q.screen.lt.sm" 
    />
</template>

<script>
import { api } from 'src/boot/axios';
import CardDetails from 'src/components/CardDetails.vue';
import { useQuasar } from 'quasar';

export default {
    components: {
        CardDetails,
    },
    data(){
        return {
            products: [],
            price: null,
            priceHighGrade: null,
            priceLowGrade: null,
            description: null,
            name: null,
        }
    },
    mounted() {
        // Make AJAX call on page load
        this.getCardDetails();
    },
    props: {
    },
    computed: {
    },
    methods: {
        getCardDetails(){
            const $q = useQuasar();
            $q.loading.show()
            var cardId = this.$route.query.id;

            api.get('/weddingcarddetails', {
                params: {
                    id: cardId
                }
            })
            .then(response => {
                console.log(response.data)
                this.products       = response.data.images;
                this.price          = response.data.price;
                this.priceHighGrade = response.data.priceHighGrade;
                this.priceLowGrade  = response.data.priceLowGrade;
                this.description    = response.data.description;
                this.name           = response.data.cardName;
            })
            .catch(error => {
                console.error('Error:', error);
            }).finally(() =>{
                $q.loading.hide()
            });
        }
    },
    setup () {
        return {
        }
    }
}
</script>
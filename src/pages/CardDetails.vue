<template>
    <CardDetails 
        :products = "products" 
        :price = "price"
        :priceHighGrade = "priceHighGrade"
        :priceLowGrade = "priceLowGrade"
        :samplePrice = "samplePrice"
        :cardPaperTypes="cardPaperTypes"
        :description = "description"
        :name = "name"
        :showSmallImages="$q.screen.lt.sm" 
    />
    <LottieLoader 
        :showAnimationLoader="showAnimationLoader"
        :animationData="animationData"
    />
</template>

<script>
import { api } from 'src/boot/axios';
import CardDetails from 'src/components/CardDetails.vue';
import { usePriceFormatter } from '../hooks/usePriceFormatter';
import LottieLoader from 'components/LottieLoader.vue';
import animationData from 'components/animations/DefaultLoadingAnimation.json';

export default {
    components: {
        CardDetails,
        LottieLoader
    },
    data(){
        return {
            products: [],
            price: null,
            priceHighGrade: null,
            priceLowGrade: null,
            samplePrice: null,
            cardPaperTypes: null,
            description: null,
            name: null,
            showAnimationLoader: true,
            animationData,
        }
    },
    mounted() {

        Promise.all([
            this.getCardDetails(),
            this.getCardPaperTypes(),
        ]).finally(() => {
            this.showAnimationLoader = false;
        });
    },
    props: {
    },
    computed: {
    },
    methods: {
        getCardDetails(){
            var cardId = this.$route.query.id;

            api.get('/weddingcarddetails', {
                params: {
                    id: cardId
                }
            })
            .then(response => {
                this.products       = !isEmpty(response.data.images) ? response.data.images : null;
                this.price          = !isEmpty(response.data.price) ? response.data.price : null;
                this.priceHighGrade = !isEmpty(response.data.priceHighGrade) ? response.data.priceHighGrade : null;
                this.priceLowGrade  = !isEmpty(response.data.priceLowGrade) ? response.data.priceLowGrade : null;
                this.samplePrice    = !isEmpty(response.data.samplePrice) ? response.data.samplePrice : null;
                this.description    = !isEmpty(response.data.description) ? response.data.description : null;
                this.name           = !isEmpty(response.data.cardName) ? response.data.cardName : null;
            })
            .catch(error => {
                console.error('Error:', error);
            })
        },
        getCardPaperTypes(){
            const { formatPrice } = usePriceFormatter();
            api.get('/cardpapertypes')
            .then(response => {
                this.cardPaperTypes = response.data.map(type => {
                    var price = !isEmpty(this[type.cardPaperVariable]) ? formatPrice(this[type.cardPaperVariable]) : '';
                    return {
                        cardPaperName: `${type.cardPaperName}` + ' ' +  price,
                        cardPaperId: type.cardPaperId
                    }
                });
            })
            .catch(error => {
                console.error('Error:', error);
            })
        }
    },
}
</script>
<template>
    <q-page class="q-h-screen flex-center">
        <div class="q-pa-md" align="right">
            <SelectDropdown :options="options" />
        </div>
        <GalleryCard :products=invitations />
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import GalleryCard from 'components/GalleryCard.vue'
import SelectDropdown from 'components/SelectDropdown.vue'

export default defineComponent({
    name: 'WeddingInvitations',
    components: {
      GalleryCard,
      SelectDropdown
    },
    data(){
        return {
            invitations: [
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Lace Invitation With Wax Seal',
                  price: '5.00',
                  categoryId: 1 
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Floral Invitation',
                  price: '10.00',
                  categoryId: 2
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Tri-Fold Invitation',
                  price: '9.00',
                  categoryId: 3
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Floral Rose Invitation',
                  price: '9.00',
                  categoryId: 2
                },
                {
                  image:'/images/weddinginvite4.jpg',
                  invitationName: 'Elegant Mangolia invitation',
                  price: '9.00',
                  categoryId: 4
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Rustic Invitation',
                  price: '10.00',
                  categoryId: 3
                },
                {
                  image:'/images/weddinginvite2.jpg',
                  invitationName: 'Gold Foil Invitation',
                  price: '9.00',
                  categoryId: 5
                },
            ],
        }
    },
    setup () {
      return {
        model: ref(null),
        options: [
          'Foiled Invitations', 'Trifold Invitations', 'Folded Invitations', 'Vellum Invitations', 'Rustic Invitations', 'Flat Invitations', 'Floral Invitations'
        ]
      }
    }
})
</script>
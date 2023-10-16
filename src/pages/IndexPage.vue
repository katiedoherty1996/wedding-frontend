<template>
  <q-page>
    <!--Homepage header-->
    <HomePageHeader 
        :headerText="headerComponent.headerText"
        :subtext="headerComponent.subtext"
        :image="headerComponent.image"
    ></HomePageHeader>

    <!--Products being sold-->
    <ComponentHeadings heading="Our Products"/>
    <RowOfImages :images="images"/>

    <!--Wedding Card Album Video-->
    <ComponentHeadings heading="Our Wedding Card Album"/>
    <EmbeddedVideo :video="video" />

    <!--Google Reviews-->
    <Reviews :reviews="reviews" />

    <!--Contact Us Form-->
    <ComponentHeadings heading="Contact Us"/>
    <ContactForm />
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HomePageHeader from '../components/HomePageHeader.vue';
import RowOfImages from '../components/ProductsSold.vue';
import Reviews from '../components/GoogleReviews.vue';
import ContactForm from 'components/ContactForm.vue';
import EmbeddedVideo from 'components/EmbeddedVideo.vue';
import ComponentHeadings from 'components/ComponentHeadings.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    HomePageHeader, // Register the component
    RowOfImages,
    Reviews,
    ContactForm,
    EmbeddedVideo,
    ComponentHeadings,
  },
  data(){
    return{
        headerComponent: {
          headerText: 'Doherty Wedding Invitations',
          subtext: 'Affordable Handmade Invitations',
          image: "/images/Wedding-Blog-Header.jpg",
        },
        images: [
          {
            image:'/images/weddinginvite4.jpg',
            imageText: 'Wedding Invitations'
          },
          {
            image:'/images/weddinginvite2.jpg',
            imageText: 'Mass Booklets'
          },
          {
            image:'/images/weddinginvite3.jpg',
            imageText: 'Thank You Cards'
          },
        ],
        reviews: [
            {
                text:'Mary is an absolute pleasure to deal with. There were so many styles to choose from and nothing was too big of an ask. Our invitations turned out amazing and Mary is really competitive on price. I would highly recommend Mary to anyone to order invitations.',
            },
            {
                text:'I ordered my wedding invitations from Doherty wedding invitations. Mary was a joy to deal with she was very helpful with her advice. We recieved our invitations very soon after placing our order and they were perfect.',
            },
            {
                text:'We ordered our wedding invitations from Doherty Wedding Invitations a couple of weeks ago. We are delighted with the invitations. They are lovely, of a really high quality and the price was fantastic. We would highly recommend Doherty Wedding Invitations. Great service and great product.',
            },
        ],
        video: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdohertyweddinginvitations%2Fvideos%2F204838903921570%2F&show_text=false&width=560&t=0"
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

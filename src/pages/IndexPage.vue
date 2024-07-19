<template>
  <q-page>
    <!--Homepage header-->
    <HomePageHeader 
        :headerText="headerComponent.headerText"
        :subtext="headerComponent.subtext"
        :image="headerComponent.image"
    ></HomePageHeader>

    <!--Products being sold-->
    <div id="products">
      <ComponentHeadings heading="Our Products"/>
      <RowOfImages :images="images"/>
    </div>

    <!--Wedding Cards-->
    <ComponentHeadings heading="Our Wedding Cards"/>
    <ImageAndInformation 
        image="/images/homepage-pic.jpg"
        text="We are a family run Irish business who supply high-quality wedding stationery at affordable prices.
        Our collection includes custom bespoke invitations, mass booklets and thank you cards.
        We tailor all our wedding stationery to our customers needs and assist in making your dream wedding a reality." 
        :imageLeft="false"
    />

    <!--Google Reviews-->
    <Reviews :reviews="reviews" />

    <!--About Us Form-->
    <div id="aboutUs">
      <ComponentHeadings heading="About Us" ref="aboutUsRef"/>
      <ImageAndInformation 
          image="/images/picture-of-mam.jpg"
          text="Meet Mary, the creative force behind Doherty Wedding Invitations!
          Mary has been running Doherty Wedding Invitations nearly 30 years and has helped many couples create an unforgettable wedding.
          With a passion for crafting beautiful wedding stationery, 
          she pours her heart into every design to ensure your special day is filled with elegance and charm." 
          :imageLeft="true"
      />
    </div>

    <!--Contact Us Form-->
    <div id="contactUs">
        <ComponentHeadings heading="Contact Us" ref="contactUsRef"/>
        <ContactForm />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref  } from 'vue'
import HomePageHeader from '../components/HomePageHeader.vue';
import RowOfImages from '../components/ProductsSold.vue';
import Reviews from '../components/GoogleReviews.vue';
import ContactForm from 'components/ContactForm.vue';
import ComponentHeadings from 'components/ComponentHeadings.vue';
import ImageAndInformation from 'components/ImageAndInformation.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    HomePageHeader, // Register the component
    RowOfImages,
    Reviews,
    ContactForm,
    ComponentHeadings,
    ImageAndInformation,
  },
  data(){
    return{
        headerComponent: {
          headerText: 'Doherty Wedding Invitations',
          subtext: 'Affordable Handmade Invitations',
          image: "images/blog-header.jpg",
        },
        images: [
          {
            image:'/images/card12.jpg',
            imageText: 'Wedding Invitations',
            url: '/#/weddinginvitations'
          },
          {
            image:'/images/massbooklets.jpg',
            imageText: 'Mass Booklets',
            url: '/#/weddinginvitations'
          },
          {
            image:'/images/thankyoucards.jpg',
            imageText: 'Thank You Cards',
            url: '/#/weddinginvitations'
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
        video: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdohertyweddinginvitations%2Fvideos%2F204838903921570%2F&show_text=false&width=560&t=0",
        showLoader: false,
    }
  },
  mounted(){
  },
  onMounted(){
      
  },
  methods: {
  },
  watch: {
  },
  setup() {
    return {
        // aboutUsRef,
        model: ref(null),
    };
  }
})
</script>

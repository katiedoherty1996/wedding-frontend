<template>
  <q-layout view="hHh LpR lff">
      <q-header class="teal-custom-colour shadow-8" elevated>
          <q-toolbar>
              <q-btn
                  flat
                  dense
                  round
                  icon="menu"
                  aria-label="Menu"
                  @click="toggleLeftDrawer"
              />

              <q-toolbar-title class="cursor quattrocento" @click="redirectToHash">
                Doherty Wedding Invitations
              </q-toolbar-title>
          </q-toolbar>
      </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
        <q-list class="no-scroll-horizontally">
            <q-item-label
              header
            >
              Essential Links
            </q-item-label>

            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
        </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="q-pt-lg"></div>
    <FooterComponent />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import FooterComponent from 'src/components/FooterComponent.vue'

const linksList = [
  {
    title: 'Wedding Invitations',
    caption: 'Affordable Wedding Invitations',
    icon: 'favorite',
    link: '/#/weddinginvitations'
  },
  {
    title: 'Mass Booklets',
    caption: 'Follow The Mass Easily',
    icon: 'auto_stories',
    link: '/#/massbooklets'
  },
  {
    title: 'Thank You Cards',
    caption: 'Thank Your Guests For Attending',
    icon: 'volunteer_activism',
    link: '/#/thankyoucards'
  },
  {
    title: 'Location',
    caption: 'Get Directions',
    icon: 'location_on',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'About Us',
    caption: 'Find Out More About Us',
    icon: 'info',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Contact Us',
    caption: 'Get In Touch',
    icon: 'contact_page',
    link: '#contactUs'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    FooterComponent,
  },

  setup () {
    const leftDrawerOpen = ref(false)
    // api.get('/card').then(response => console.log(response.data));

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  methods: {
    redirectToHash() {
      window.location.href = "#";
    }
  }
});
</script>

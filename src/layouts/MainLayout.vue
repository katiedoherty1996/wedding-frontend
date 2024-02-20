<template>
  <q-layout view="lHh Lpr lFf">
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
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import {api} from 'boot/axios';

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
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Thank You Cards',
    caption: 'Thank Your Guests For Attending',
    icon: 'volunteer_activism',
    link: 'https://chat.quasar.dev'
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
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Login',
    icon: 'settings',
    link: 'https://facebook.quasar.dev'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
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

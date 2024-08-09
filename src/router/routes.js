import { route } from 'quasar/wrappers'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/IndexPage.vue') 
      },
      {
        path: '/weddinginvitations',
        component: () => import('src/pages/ProductGallery.vue'),
        props: { productTypeVariable: 'weddingCards' }
      },
      {
        path: '/massbooklets',
        component: () => import('src/pages/ProductGallery.vue'),
        props: { productTypeVariable: 'massBooklets' }
      },
      {
        path: '/thankyoucards',
        component: () => import('src/pages/ProductGallery.vue'),
        props: { productTypeVariable: 'thankYouCards' }
      },
      {
        path: '/productdetails',
        component: () => import('pages/ProductDetails.vue')
      },
      {
        path: '/aboutus',
        component: () => import('pages/IndexPage.vue'),
        meta: { scrollToAboutUs: true }
      },
      {
        path: '/contactus',
        component: () => import('pages/IndexPage.vue'),
        meta: { scrollToContactUs: true }
      },
      {
        path: '/location',
        component: () => import('pages/IndexPage.vue'),
        meta: { scrollToLocation: true }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

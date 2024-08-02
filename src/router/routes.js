
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
        component: () => import('pages/WeddingInvitations.vue')
      },
      {
        path: '/massbooklets',
        component: () => import('pages/MassBooklets.vue')
      },
      {
        path: '/thankkyoucards',
        component: () => import('pages/ThankYouCard.vue')
      },
      {
        path: '/carddetails',
        component: () => import('pages/CardDetails.vue')
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

  // /wedding-invitations
  {
    path: '/weddinginvitations',

    component: () => import('layouts/InvitationsGallery.vue'),

    children: [
      {
        path: '',
        component: () => import('pages/WeddingInvitations.vue')
      }
    ]
  },

  {
    path: '/massbooklets',

    component: () => import('layouts/InvitationsGallery.vue'),

    children: [
      {
        path: '',
        component: () => import('pages/MassBooklets.vue')
      }
    ]
  },

  {
    path: '/thankyoucards',

    component: () => import('layouts/InvitationsGallery.vue'),

    children: [
      {
        path: '',
        component: () => import('pages/ThankYouCard.vue')
      }
    ]
  },

  // card details
  {
    path: '/carddetails',

    component: () => import('layouts/InvitationDetails.vue'),

    children: [
      {
        path: '',
        component: () => import('pages/CardDetails.vue')
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

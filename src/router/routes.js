
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
        path: '/carddetails',
        component: () => import('pages/CardDetails.vue')
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

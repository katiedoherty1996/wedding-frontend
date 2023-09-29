
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // /auth/login

  {
    path: '/auth',
    component: () => import('layouts/BlankLayout.vue'),
    children: [{ path: 'Login', component: () => import('pages/LoginPage.vue') }],
  },

  // /auth/mylogin

  {
    path: '/auth',
    component: () => import('layouts/BlankLayout.vue'),
    children: [{ path: 'myLogin', component: () => import('pages/Login.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

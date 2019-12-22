import Vue from 'vue';
import VueRouter from 'vue-router';
import { ROUTES } from '@/constants';

import { HomePage } from '@/views/home-page';
import { ChatPage } from '@/views/chat-page';

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.HOME.PATH,
    name: ROUTES.HOME.NAME,
    component: HomePage,
  },
  {
    path: ROUTES.CHAT.PATH,
    name: ROUTES.CHAT.NAME,
    component: ChatPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

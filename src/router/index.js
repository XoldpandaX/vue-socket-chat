import Vue from 'vue';
import VueRouter from 'vue-router';
import { HomePage } from '@/views/home-page';
import { ChatPage } from '@/views/chat-page';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

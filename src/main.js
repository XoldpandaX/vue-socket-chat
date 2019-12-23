import Vue from 'vue';
import router from './router';
import createStore from '@/store';
import * as mutationTypes from '@/store/modules/chat-socket/mutation-types';
import { SOCKET_ENDPOINT, ROUTES } from './constants';

// plugins
import installVueNativeWebsocket from '@/plugins/vue-native-websocket';
import installVueNesCss from '@/plugins/vue-nes-css';

import App from './App.vue';

const store = createStore();
installVueNativeWebsocket({
  store,
  mutationTypes,
  endpoint: SOCKET_ENDPOINT,
  moduleName: 'chat-socket',
});
installVueNesCss();

router.beforeEach(async (to, from, next) => {
  const userName = store.getters['chat-socket/userName'];

  if (from.name === ROUTES.CHAT.NAME) {
    await store.dispatch('chat-socket/resetSocketState');
    Vue.prototype.$disconnect();
    next();
  }

  if (to.name === ROUTES.CHAT.NAME && !userName) {
    next({ name: ROUTES.HOME.NAME });
  }

  next();
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

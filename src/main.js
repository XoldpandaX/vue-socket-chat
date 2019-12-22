import Vue from 'vue';
import router from './router';
import createStore from '@/store';
import * as mutationTypes from '@/store/modules/chat-socket/mutation-types';
import { SOCKET_ENDPOINT } from './constants';

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

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

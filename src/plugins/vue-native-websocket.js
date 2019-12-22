import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';
import { getProperMutationNames } from '@/utils';

export default function ({
  store, mutationTypes, endpoint, moduleName,
}) {
  Vue.use(VueNativeSock, endpoint, {
    store,
    mutations: getProperMutationNames(mutationTypes, moduleName),
    connectManually: true,
  });
}

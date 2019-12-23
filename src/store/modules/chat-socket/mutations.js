import * as mutationTypes from './mutation-types';
import { onMessageMapper } from './mappers';

export default {
  [mutationTypes.SOCKET_ONMESSAGE](state, msg) {
    const receivedMsg = onMessageMapper(msg, state.userAvatar, state.userName);
    state.chatMessages = [...state.chatMessages, receivedMsg];
  },
  [mutationTypes.SOCKET_ONOPEN](state) {
    state.isSocketOpen = true;
  },
  [mutationTypes.SOCKET_ONERROR](state) {
    state.isSocketError = true;
  },
  [mutationTypes.SOCKET_ONCLOSE](state) {
    state.isSocketOpen = false;
  },
  [mutationTypes.SET_USER](state, { userName, userAvatar }) {
    state.userName = userName;
    state.userAvatar = userAvatar;
  },
  [mutationTypes.RESET_SOCKET_STATE](state) {
    state.userName = '';
    state.userAvatar = '';
    state.chatMessages = [];
    state.isSocketError = false;
    state.isSocketOpen = false;
  },
};

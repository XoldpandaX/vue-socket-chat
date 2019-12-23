import * as mutationTypes from './mutation-types';

export default {
  registerUserInChat({ commit }, { name, avatar }) {
    commit(mutationTypes.SET_USER, {
      userName: name,
      userAvatar: avatar,
    });
  },
  resetSocketState({ commit }) {
    commit(mutationTypes.RESET_SOCKET_STATE);
  },
};

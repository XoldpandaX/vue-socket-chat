import * as mutationTypes from './mutation-types';

export default {
  registerUser({ commit }, { name, avatar }) {
    commit(mutationTypes.SET_USER, {
      userName: name,
      userAvatar: avatar,
    });
  },
};

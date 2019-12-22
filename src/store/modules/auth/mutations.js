import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_USER](state, { userName, userAvatar }) {
    state.userName = userName;
    state.userAvatar = userAvatar;
  },
};

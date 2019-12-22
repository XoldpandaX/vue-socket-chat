import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SOCKET_ONMESSAGE](state, msg) {
    console.log(msg);
    console.info(`${msg} on message`);
  },
  [mutationTypes.SOCKET_ONOPEN](state, msg) {
    console.log(msg);
    console.info(`${msg} on open`);
  },
};

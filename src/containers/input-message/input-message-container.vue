<template>
  <chat-text-area
    @submit-btn-click="sendMessage"
    initValue=""
  />
</template>

<script>
import { mapGetters } from 'vuex';
import dayjs from 'dayjs';

import { ChatTextArea } from '@/components/chat-text-area';

export default {
  name: 'input-message',
  components: {
    ChatTextArea,
  },
  computed: {
    ...mapGetters('chat-socket', ['userName']),
  },
  methods: {
    sendMessage(text) {
      const message = {
        text,
        created: dayjs(),
        name: this.userName,
      };

      this.$socket.send(JSON.stringify(message));
    },
  },
};
</script>

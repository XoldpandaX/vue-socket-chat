<template>
  <nes-container
    class="chat-messages-container"
    title="Chat of holy pixel :)"
    :form="true"
    :center="true"
  >
    <chat-messages
      :messages="chatMessages"
      :auth-user-name="userName"
    />
  </nes-container>
</template>

<script>
import { mapGetters } from 'vuex';

import { ChatMessages } from '@/components/chat-messages';

export default {
  name: 'chat-messages-container',
  components: {
    ChatMessages,
  },
  computed: {
    ...mapGetters('chat-socket', ['chatMessages', 'userName']),
  },
};
</script>

<style lang="scss" scoped>
  @import 'chat-messages-container';
</style>

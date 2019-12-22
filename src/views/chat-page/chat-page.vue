<template>
  <div class="chat-page">
    <div class="chat">
      <chat-messages-container />
      <input-message-container />
    </div>
  </div>
</template>

<script>
import { ChatMessagesContainer } from '@/containers/messages';
import { InputMessageContainer } from '@/containers/input-message';

export default {
  name: 'chat-page',
  components: {
    ChatMessagesContainer,
    InputMessageContainer,
  },
};
</script>

<style lang="scss" scoped>
  @import 'chat-page';
</style>

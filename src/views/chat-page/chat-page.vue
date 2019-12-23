<template>
  <div class="chat-page">
    <quit-chat-container />
    <div class="chat">
      <chat-messages-container />
      <input-message-container />
    </div>
  </div>
</template>

<script>
import { ChatMessagesContainer } from '@/containers/messages';
import { InputMessageContainer } from '@/containers/input-message';
import { QuitChatContainer } from '@/containers/quit-chat';

export default {
  name: 'chat-page',
  components: {
    ChatMessagesContainer,
    InputMessageContainer,
    QuitChatContainer,
  },
};
</script>

<style lang="scss" scoped>
  @import 'chat-page';
</style>

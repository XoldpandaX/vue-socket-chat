<template>
  <div class="chat-message">
    <app-avatar
      :classes="['chat-message-avatar']"
      :src="avatar"
      :is-rounded="true"
      :medium="true"
    />
    <chat-balloon :side="side">
      <slot />
    </chat-balloon>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { AppAvatar } from '@/components/app-avatar';
import { ChatBalloon } from '@/components/chat-baloon';

export default {
  name: 'chat-message',
  components: {
    AppAvatar,
    ChatBalloon,
  },
  props: {
    side: VueTypes.string.isRequired,
    avatar: VueTypes.string.isRequired,
  },
};
</script>

<style lang="scss" scoped>
  @import 'chat-message';
</style>

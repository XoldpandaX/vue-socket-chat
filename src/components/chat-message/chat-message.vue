<template>
  <div class="chat-message">
    <div :class="wrapperClass">
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
    <extra-info
      :name="extra.name"
      :created="extra.created"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { AppAvatar } from '@/components/app-avatar';
import { ChatBalloon } from '@/components/chat-baloon';
import ExtraInfo from './extra-info.vue';

export default {
  name: 'chat-message',
  components: {
    AppAvatar,
    ChatBalloon,
    ExtraInfo,
  },
  props: {
    side: VueTypes.string.isRequired,
    avatar: VueTypes.string.isRequired,
    isAuthUserMsg: VueTypes.bool.def(false),
    extra: VueTypes.shape({
      name: String,
      created: String,
    }).isRequired,
  },
  computed: {
    wrapperClass() {
      const base = 'chat-message';
      return [base, this.isAuthUserMsg && `${base}--auth-user-wrapper`];
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'chat-message';
</style>

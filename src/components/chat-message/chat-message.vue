<template>
  <div class="chat-message">
    <div :class="wrapperClasses">
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
      :class="extraInfoClass"
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
    wrapperClasses() {
      const base = 'chat-message';
      return [
        base,
        `${base}--${this.isAuthUserMsg ? 'auth' : 'common'}-user-wrapper`,
      ];
    },
    extraInfoClass() {
      const base = 'chat-message-extra';
      return this.isAuthUserMsg ? [base, `${base}-auth`] : `${base}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'chat-message';
</style>

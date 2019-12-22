<template>
  <div class="chat-messages">
    <app-list
      class="chat-messages-list"
      v-slot="{ item }"
      :list-items="messages"
      :items-classes="['chat-messages-list-el']"
    >
      <div :class="['chat-messages-el-wrapper', getBalloonClassByType(item)]">
        <chat-message
          v-if="!isSystemMsg(item)"
          :side="getMsgPositionByType(item)"
          :avatar="item.avatar"
        >
          {{ item.text }}
        </chat-message>
        <chat-system-message v-else>
          {{ item.text }}
        </chat-system-message>
      </div>
    </app-list>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { CHAT_MESSAGE_TYPES } from '@/constants';

import { AppList } from '@/components/app-list';
import { ChatMessage } from '@/components/chat-message';
import { ChatSystemMessage } from '@/components/chat-system-message';

export default {
  name: 'chat-messages-list',
  components: {
    AppList,
    ChatMessage,
    ChatSystemMessage,
  },
  props: {
    messages: VueTypes.arrayOf(VueTypes.object).isRequired,
  },
  methods: {
    isSystemMsg(item) {
      return item.type === CHAT_MESSAGE_TYPES.SYSTEM;
    },
    getBalloonClassByType(msg) {
      return this.getMsgPositionByType(msg) === 'right'
        ? 'chat-messages-el-wrapper-right'
        : '';
    },
    getMsgPositionByType(msg) {
      const sidesByType = {
        [CHAT_MESSAGE_TYPES.USER]: 'left',
        [CHAT_MESSAGE_TYPES.SYSTEM]: 'left',
        [CHAT_MESSAGE_TYPES.REGISTERED_USER]: 'right',
      };

      return sidesByType[msg.type] || '';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'chat-messages';
</style>

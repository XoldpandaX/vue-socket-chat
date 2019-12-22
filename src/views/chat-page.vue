<template>
  <nes-container
    title="Holy pixel chat :)"
    :form="true"
    :center="true"
  >
    <chat-balloon side="left">
      hello from nes framework
    </chat-balloon>
    <chat-balloon side="right">
      hello from nes framework
    </chat-balloon>
    <button @click="connect">click to connect</button>
  </nes-container>
</template>

<script>
import { ChatBalloon } from '@/components/chat-baloon';

export default {
  name: 'chat-page',
  components: {
    ChatBalloon,
  },
  methods: {
    connect() {
      this.$connect('ws://pm.tada.team/ws?name=denis24');
      console.info('sfs');
    },
  },
};
</script>

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
  </nes-container>
</template>

<script>
import { ChatBalloon } from '@/components/chat-baloon';

export default {
  name: 'chat-page',
  components: {
    ChatBalloon,
  },
};
</script>

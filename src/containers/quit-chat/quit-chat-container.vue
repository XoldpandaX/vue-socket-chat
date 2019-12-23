<template>
  <div class="quit-chat-container">
    <nes-button
      :error="true"
      @click="quitFromChat"
    >
      quit
    </nes-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ROUTES } from '@/constants';

export default {
  name: 'quit-chat-container',
  methods: {
    ...mapActions('chat-socket', ['resetSocketState']),

    async quitFromChat() {
      await this.resetSocketState();
      this.$disconnect();
      await this.$router.push({ name: ROUTES.HOME.NAME });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'quit-chat-container';
</style>

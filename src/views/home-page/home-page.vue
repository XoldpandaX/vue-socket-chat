<template>
  <div class="home-page">
    <h1>
      Please enter you name<br/>
      and choose avatar to enter chat ...
    </h1>
    <pre-chat-container />
  </div>
</template>

<script>
import { PreChatContainer } from '@/containers/pre-chat';

export default {
  name: 'home-page',
  components: {
    PreChatContainer,
  },
};
</script>

<style lang="scss" scoped>
  @import 'home-page';
</style>

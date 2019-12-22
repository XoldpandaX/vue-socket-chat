<template>
  <div class="chat-balloon">
    <nes-balloon-right-item
      v-if="isRightSide"
      :message="text"
    />
    <nes-balloon-left-item
      v-else
      :message="text"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import get from 'lodash.get';

export default {
  name: 'chat-balloon',
  props: {
    side: VueTypes.oneOf(['left', 'right']),
  },
  computed: {
    isRightSide() {
      return this.side === 'right';
    },
    text() {
      return get(this.$slots, ['default', [0], 'text'], null);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'chat-baloon';
</style>

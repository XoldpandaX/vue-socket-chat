<template>
  <p :class="rootClass">
    <slot />
  </p>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'system-message',
  props: {
    type: VueTypes.oneOf(['success', 'alert']).def('success'),
    classes: VueTypes.array.def([]),
  },
  computed: {
    rootClass() {
      const base = 'system-chat-message';
      return [base, `${base}--${this.type}`, ...this.classes];
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'chat-system-message';
</style>

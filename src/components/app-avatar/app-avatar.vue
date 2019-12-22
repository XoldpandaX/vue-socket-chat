<template>
  <div
    class="app-avatar"
    @click="clickHandler"
  >
    <nes-avatar
      alt="user avatar"
      :large="true"
      :rounded="isRounded"
      :src="src"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-avatar',
  props: {
    id: VueTypes.string.isRequired,
    src: VueTypes.string.isRequired,
    hasAction: VueTypes.bool.def(false),
    isRounded: VueTypes.bool.def(false),
  },
  methods: {
    clickHandler() {
      if (this.hasAction) {
        this.$emit('click-avatar', this.id);
      }
    },
  },
};
</script>

<style scoped>

</style>

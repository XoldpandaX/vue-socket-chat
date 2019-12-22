<template>
  <div
    :class="rootClasses"
    @click="clickHandler"
  >
    <nes-avatar
      alt="user avatar"
      :large="large"
      :medium="medium"
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
    id: VueTypes.string,
    src: VueTypes.string.isRequired,
    classes: VueTypes.array.def([]),
    hasAction: VueTypes.bool.def(false),
    isRounded: VueTypes.bool.def(false),
    medium: VueTypes.bool.def(false),
    large: VueTypes.bool.def(false),
  },
  computed: {
    rootClasses() {
      return ['app-avatar', ...this.classes];
    },
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

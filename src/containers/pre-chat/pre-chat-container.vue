<template>
  <div class="pre-chat-container">
    <enter-form @form-submitted="c" />
    <avatar-chooser @avatar-chosen="r" />
  </div>
</template>

<script>
import { AvatarChooser } from '@/components/avatar-chooser';
import { EnterForm } from '@/components/enter-form';

export default {
  name: 'pre-chat-container',
  components: {
    AvatarChooser,
    EnterForm,
  },
  methods: {
    c(userName) {
      console.info(userName);
    },
    r(avatarId) {
      console.info(avatarId);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'pre-chat-container.scss';
</style>

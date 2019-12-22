<template>
  <form
    class="enter-form"
    @submit.prevent="sendUserName"
  >
    <avatar-chooser @avatar-chosen="setAvatar" />
    <nes-input-text
      id="name"
      placeholder="your name is ..."
      :init-value="userName"
      @input="changeUserName"
    />
    <nes-button
      :primary="true"
      :disabled="!isSubmitEnable"
      @click="sendUserName"
    >
      Enter chat
    </nes-button>
  </form>
</template>

<script>
import { AvatarChooser } from '@/components/avatar-chooser';

export default {
  name: 'enter-form',
  components: {
    AvatarChooser,
  },
  data() {
    return {
      userName: '',
      userAvatar: 'image2', // avatar by default
    };
  },
  computed: {
    isSubmitEnable() {
      return this.userName.length >= 2;
    },
  },
  methods: {
    sendUserName() {
      if (this.isSubmitEnable) {
        this.$emit('form-submitted', {
          name: this.userName,
          avatar: this.userAvatar,
        });
      }
    },
    changeUserName(userName) {
      this.userName = userName;
    },
    setAvatar(avatarId) {
      this.userAvatar = avatarId;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'enter-form';
</style>

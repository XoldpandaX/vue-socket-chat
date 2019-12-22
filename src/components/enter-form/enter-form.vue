<template>
  <form
    class="enter-form"
    @submit.prevent="$emit('form-submitted', userName)"
  >
    <nes-input-text
      id="name"
      placeholder="your name is ..."
      :init-value="userName"
      @input="changeUserName"
    />
    <nes-button
      :primary="true"
      :disabled="isButtonEnable"
    >
      Enter
    </nes-button>
  </form>
</template>

<script>
export default {
  name: 'enter-form',
  data() {
    return {
      userName: '',
    };
  },
  computed: {
    isButtonEnable() {
      return !this.userName.length;
    },
  },
  methods: {
    changeUserName(userName) {
      this.userName = userName;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'enter-form';
</style>

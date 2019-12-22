<template>
  <div class="enter-form-container">
    <enter-form @form-submitted="handleFormSubmit" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { SOCKET_ENDPOINT } from '@/constants';

import { EnterForm } from '@/components/enter-form';

export default {
  name: 'enter-form-container',
  components: {
    EnterForm,
  },
  data() {
    return {
      chosenAvatar: '',
    };
  },
  computed: {
    ...mapGetters('auth', ['userName', 'userAvatar']),
  },
  methods: {
    ...mapActions('auth', ['registerUser']),

    async handleFormSubmit({ name, avatar }) {
      await this.registerUser({ name, avatar });
      this.connectToChat(name);
      await this.$router.push({ name: 'chat' });
    },
    connectToChat(userName) {
      this.$connect(`${SOCKET_ENDPOINT}?name=${userName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'enter-form-container';
</style>

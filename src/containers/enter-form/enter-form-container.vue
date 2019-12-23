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
  watch: {
    async isSocketOpen(val) {
      if (val) {
        await this.$router.push({ name: 'chat' });
      }
    },
  },
  computed: {
    ...mapGetters('chat-socket', ['isSocketOpen']),
  },
  methods: {
    ...mapActions('chat-socket', ['registerUserInChat']),

    async handleFormSubmit({ name, avatar }) {
      await this.registerUserInChat({ name, avatar });
      this.$connect(`${SOCKET_ENDPOINT}?name=${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'enter-form-container';
</style>

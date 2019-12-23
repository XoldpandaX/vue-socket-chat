<template>
  <div
    class="socket-error-container"
    v-show="isSocketError"
  >
    <dialog
      class="socket-error-dialog"
      :open="isSocketError"
    >
      <div>
        <p>
          Something went wrong with your socket connection <br />
          try it later please ^_^
        </p>
        <div class="socket-error-dialog-button-row">
          <nes-octocat class="socket-error-icon" :animate="true" />
          <nes-button
            :warning="true"
            @click="resetSocketState">
            OK
          </nes-button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'socket-error-container',
  computed: {
    ...mapGetters('chat-socket', ['isSocketError']),
  },
  methods: {
    ...mapActions('chat-socket', ['resetSocketState']),
  },
};
</script>

<style lang="scss" scoped>
  @import 'socket-error-container';
</style>

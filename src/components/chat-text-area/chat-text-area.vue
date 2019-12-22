<template>
  <div class="chat-text-area">
    <nes-input-text-area
      id="message"
      :init-value="textAreaValue"
      :cols="10"
      :rows="10"
      @input="setTextAreaValue"
    />
    <div class="chat-text-area-send-btn">
      <nes-button
        :success="true"
        @click="$emit('submit-btn-click', textAreaValue)"
      >
        send
      </nes-button>
    </div>
  </div>
</template>

<script>
// import VueTypes from 'vue-types';

export default {
  name: 'chat-text-area',
  data() {
    return {
      textAreaValue: '',
    };
  },
  methods: {
    setTextAreaValue(text) {
      this.textAreaValue = text;
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'chat-text-area.scss';
</style>

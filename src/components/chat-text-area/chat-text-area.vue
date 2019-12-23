<template>
  <div class="chat-text-area">
    <div class="field">
      <textarea
        class="nes-textarea"
        ref="chatTextarea"
        autocomplete="off"
        v-model="inputText"
        @input="$emit('input', inputText)"
        @keypress="handleTextAreaBehavior"
      />
    </div>
    <div class="chat-text-area-send-btn">
      <nes-button
        :success="true"
        @click="sendMessage"
      >
        send
      </nes-button>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'chat-text-area',
  props: {
    initValue: VueTypes.string.isRequired,
  },
  data() {
    return {
      inputText: this.initValue,
    };
  },
  methods: {
    sendMessage() {
      this.$emit('submit-btn-click', this.inputText);
      this.inputText = '';
    },
    addLineBreakToInputText() {
      const strArr = this.inputText.split('');
      strArr.push('\n');
      this.inputText = strArr.join('');
    },
    handleTextAreaBehavior(e) {
      // scroll to bottom on new line
      this.$refs.chatTextarea.scrollTop = this.$refs.chatTextarea.scrollHeight;

      const actionByKeyCode = {
        13: () => {
          e.preventDefault();
          this.sendMessage();
        },
        10: () => {
          this.addLineBreakToInputText();
        },
      };

      return actionByKeyCode[e.keyCode] ? actionByKeyCode[e.keyCode]() : null;
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'chat-text-area.scss';
</style>

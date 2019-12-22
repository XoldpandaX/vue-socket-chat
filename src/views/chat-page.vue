<template>
  <nes-container
    title="Holy pixel chat :)"
    :form="true"
    :center="true"
  >
    <chat-balloon side="left">
      hello from nes framework
    </chat-balloon>
    <chat-balloon side="right">
      hello from nes framework
    </chat-balloon>
    <nes-avatar
      :rounded="true"
      :large="true"
      :src="imageA"
      alt="user avatar"
    />
    <nes-avatar
      :rounded="true"
      :large="true"
      :src="imageB"
      alt="user avatar"
    />
    <nes-avatar
      :rounded="true"
      :large="true"
      :src="imageC"
      alt="user avatar"
    />
    <button @click="connect">click to connect</button>
  </nes-container>
</template>

<script>
import { ChatBalloon } from '@/components/chat-baloon';
import image from '@/assets/images/avatar1.jpg';
import image2 from '@/assets/images/avatar2.png';
import image3 from '@/assets/images/avatar3.jpg';

export default {
  name: 'chat',
  components: {
    ChatBalloon,
  },
  computed: {
    imageA() {
      return image;
    },
    imageB() {
      return image2;
    },
    imageC() {
      return image3;
    },
  },
  methods: {
    connect() {
      this.$connect('ws://pm.tada.team/ws?name=denis24');
      console.info('sfs');
    },
  },
};
</script>

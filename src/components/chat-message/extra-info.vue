<template>
  <div class="chat-message-extra">
    <span class="m-r-s">{{ name }}</span>
    (<span>{{ created }}</span>)
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'extra-info',
  props: {
    name: VueTypes.string.isRequired,
    created: VueTypes.string.isRequired,
  },
};
</script>

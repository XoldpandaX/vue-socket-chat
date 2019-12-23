<template>
  <div id="app">
    <router-view/>
    <socket-error-container />
  </div>
</template>

<script>
import { SocketErrorContainer } from '@/containers/socket-error';

export default {
  name: 'App',
  components: {
    SocketErrorContainer,
  },
};
</script>

<style lang="scss">
@import "assets/styles/index";

#app {
  padding: 20px 15% 0 15%;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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

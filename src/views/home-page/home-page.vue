<template>
  <div class="home-page">
    <h1>
      Please enter you name<br/>
      and choose avatar to enter chat ...
    </h1>
    <enter-form-container />
  </div>
</template>

<script>
import { EnterFormContainer } from '@/containers/enter-form';

export default {
  name: 'home-page',
  components: {
    EnterFormContainer,
  },
};
</script>

<style lang="scss" scoped>
  @import 'home-page';
</style>

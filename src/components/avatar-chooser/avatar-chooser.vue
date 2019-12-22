<template>
  <div class="avatar-chooser">
    <app-list
      class="avatar-chooser-list"
      v-slot="{ item }"
      :list-items="avatarItems"
      :items-classes="['avatar-chooser-list-el']"
    >
      <div :class="setSelectedClass(item.isSelect)">
        <app-avatar
          :id="item.id"
          :src="item.image"
          :hasAction="true"
          @click-avatar="handleAvatarClick"
        />
      </div>
    </app-list>
  </div>
</template>

<script>
import avatars from './avatars';

import { AppAvatar } from '@/components/app-avatar';
import { AppList } from '@/components/app-list';

export default {
  name: 'avatar-chooser',
  components: {
    AppAvatar,
    AppList,
  },
  data() {
    return {
      avatarItems: avatars,
    };
  },
  methods: {
    setSelectedClass(isSelect) {
      return `avatar-chooser-list-inner-wrapper${isSelect ? '--selected' : ''}`;
    },
    chooseAvatar(avatarId) {
      this.avatarItems = this.avatarItems.map((item) => {
        if (item.isSelect) {
          return { ...item, isSelect: false };
        }

        return item.id === avatarId ? { ...item, isSelect: true } : item;
      });
    },
    handleAvatarClick(avatarId) {
      this.chooseAvatar(avatarId);
      this.$emit('avatar-chosen', avatarId);
    },
  },
};
</script>

<style lang="scss">
  @import 'avatar-chooser.scss';
</style>

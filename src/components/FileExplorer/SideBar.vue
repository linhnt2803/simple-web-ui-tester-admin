<template>
  <transition name="collapse" mode="out-in">
    <flex-layout
      class="side-bar"
      :class="{ 'side-bar--collapse': collapse }"
      direction="column">
      <flex-layout justify="between">
        <flex-layout class="side-bar__actions-bar">
          actions bar
          <slot name="actions-bar"/>
        </flex-layout>
        <flex-layout>
          <base-btn
            size="small"
            flat
            @click="toggleCollapse">&lt;&lt;</base-btn>
        </flex-layout>
      </flex-layout>
      <div class="side-bar__body">
        <slot />
      </div>
    </flex-layout>
  </transition>
</template>
<script>
import FlexLayout from '@/layouts/Flex'
import { BaseBtn } from '@/base'

export default {
  components: {
    FlexLayout,
    BaseBtn
  },
  data() {
    return {
      collapse: false
    }
  },
  methods: {
    toggleCollapse() {
      this.collapse = !this.collapse
    },
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100%;
  width: 500px;
  transition: max-height 0.25s ease-out;
  transition-duration: 0.5s;
  transition-property: width;
  &--collapse {
    width: 60px;
    transition: max-height 0.25s ease-out;
    transition-duration: 0.5s;
    transition-property: width;
  }
}
.collapse-enter-active, .collapse-leave-active {
  transition-property: width;
}
.collapse-leave-to {
  width: 60px;
}
.collapse-enter{
  width: 500px;
}
</style>
<template>
  <button
    class="base-btn"
    :class="_classes()"
    v-bind="{ ...$props, ...$attrs }">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    size: { default: () => "" },
    flat: Boolean
  },
  methods: {
    _classes() {
      let { size, flat } = this;
      console.log('flat', flat)
      return {
        'base-btn--small': size == "small",
        'base-btn--flat': !!flat
      }
    },
  }
}
</script>

<style lang="scss">
.base-btn {
  min-width: 120px;
  min-height: 32px;
  &--small {
    min-width: 30px;
    min-height: 28px;
  }
  &--flat {
    border: none;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
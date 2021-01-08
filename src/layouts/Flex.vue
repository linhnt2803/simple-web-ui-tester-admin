<template>
  <div class="flex-layout" :style="_style()">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      JUSTIFY_ALIAS: {
        'start': 'flex-start',
        'end': 'flex-end',
        'around': 'space-around',
        'between': 'space-between'
      }
    }
  },
  props: {
    direction: { default: () => 'row' },
    justify: { default: () => '' }
  },
  methods: {
    _style() {
      return {
        flexDirection: this.direction,
        justifyContent: this.readJustify(this.justify)
      }
    },
    readJustify(val) {
      return val in this.JUSTIFY_ALIAS
        ? this.JUSTIFY_ALIAS[val]
        : val
    }
  }
}
</script>

<style lang="scss">
.flex-layout {
  display: flex;
}
</style>
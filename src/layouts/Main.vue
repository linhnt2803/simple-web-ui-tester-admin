<template>
  <div class="main-layout">
    <div class="main-layout__top-bar">
      <slot name="top-bar" />
    </div>
    <div class="main-layout__body">
      <slot />
    </div>
    <div class="main-layout__bottom-bar">
      <slot name="bottom-bar"/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.main-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &__top-bar {
    
  }
  &__body {
    height: 100%;
  }
  &__bottom-bar {
    
  }
}
</style>
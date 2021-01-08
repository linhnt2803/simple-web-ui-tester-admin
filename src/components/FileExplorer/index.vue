<template>
  <flex-layout class="file-explorer">
    <side-bar>
      <directories-tree />
    </side-bar>
    <div style="width: 100%;height: 100%;">
      file editor
    </div>
  </flex-layout>
</template>
<script>
import FlexLayout from '@/layouts/Flex'
import SideBar from './SideBar'
import DirectoriesTree from './DirectoriesTree'

export default {
  components: {
    FlexLayout,
    SideBar,
    DirectoriesTree
  },
}

</script>

<style lang="scss" scoped>
.file-explorer {
  height: 100%;
}
</style>
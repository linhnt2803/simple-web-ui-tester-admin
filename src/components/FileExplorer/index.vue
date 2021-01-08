<template>
  <flex-layout class="file-explorer">
    <side-bar>
      <directories-tree :dirs="mockDirs"/>
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
  data () {
    return {
      mockDirs: _mockDirs()
    }
  }
}

function _mockDirs() {
  return [
    {
      type: 'dir',
      name: 'dir 1',
      children: [
        {
          type: 'file',
          name: 'file1.txt',
          size: '10000'
        },
        {
          type: 'file',
          name: 'file2.txt',
          size: '10000'
        },
        {
          type: 'file',
          name: 'file3.txt',
          size: '10000'
        }
      ]
    }
  ]
}
</script>

<style lang="scss" scoped>
.file-explorer {
  height: 100%;
}
</style>
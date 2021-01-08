<template>
  <main-layout>
    <file-explorer />
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/Main'
import FileExplorer from '../components/FileExplorer'

export default {
  components: {
    MainLayout,
    FileExplorer
  }
}
</script>
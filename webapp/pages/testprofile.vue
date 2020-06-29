<template>
  <div>
    <CoverPic class="cover-header" />
    <v-divider></v-divider>
    <ImageGrid class="grid" />
  </div>
</template>

<script>
import ImageGrid from '../components/ImageGrid'
import CoverPic from '../components/CoverPic'
export default {
  name: 'testprofile',
  components: {
    CoverPic,
    ImageGrid
  }
}
</script>

<style lang="scss" scoped>
.grid {
  margin-top: 1rem;
}
.cover-header {
  margin-bottom: 2rem;
}
</style>

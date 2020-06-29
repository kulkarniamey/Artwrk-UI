<template>
  <div>
    <v-row>
      <CoverPic class="cover-header" />
    </v-row>

    <v-row>
      <ImageGrid class="grid" />
    </v-row>
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
  margin-top: 6rem;
}
.cover-header {
  margin-bottom: 2rem;
}
</style>

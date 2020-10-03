<template>
  <div>
    <h1>Community Posts</h1>
    <div class="grid-holder">
      <ImageGrid :post-data="postData" />
    </div>
  </div>
</template>

<script>
import ImageGrid from '@/components/ImageGrid'
export default {
  components: { ImageGrid },
  data() {
    return {
      postData: []
    }
  },
  async mounted() {
    const payload = {
      operation: 'get_all_posts'
    }
    const resp = await this.$axios.put('posts', payload)
    this.postData = resp.data.posts
  }
}
</script>

<style lang="scss" scoped>
.grid-holder {
  padding: 24px;
}
</style>
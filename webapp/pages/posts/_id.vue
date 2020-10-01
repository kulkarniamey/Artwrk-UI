<template>
  <v-container>
    <Posts />
  </v-container>
</template>

<script>
import Posts from '../../components/Posts'
export default {
  components: {
    Posts
  },
  async mounted() {
    const payload = {
      operation: 'get_post',
      post_id: 'post_1599292426.731536_prashant'
    }
    const resp = await this.$axios.put('/posts', payload)
    console.log(resp)
  }
}
</script>

<style lang="css" scoped></style>

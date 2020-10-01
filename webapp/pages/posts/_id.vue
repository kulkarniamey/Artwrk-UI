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
      post_id: 'post_1601551773.460599_som3'
    }
    const resp = await this.$axios.put(
      'https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/posts',
      payload
    )
    console.log(resp)
  }
}
</script>

<style lang="css" scoped></style>

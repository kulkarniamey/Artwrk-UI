<template>
  <v-container>
    <Posts :postData="postData" :profile="profile" />
  </v-container>
</template>

<script>
import Posts from '../../components/Posts'
export default {
  components: {
    Posts
  },

  data() {
    return {
      postData: {},
      profile: {}
    }
  },

  async mounted() {
    const postId = `${this.$route.params.id}`
    const payload = {
      operation: 'get_post',
      post_id: postId
    }

    try {
      const resp = await this.$axios.put(
        'https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/posts',
        payload
      )
      this.postData = resp.data.post
    } catch (error) {
      console.log(error)
    }
    const artistId = this.postData.user_id
    try {
      const payload = {
        operation: 'get_profile',
        user_id: artistId
      }
      const resp = await this.$axios.put(
        'https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/profile/',
        payload
      )
      this.profile = resp.data.profile
    } catch (error) {
      console.log(error)
    }
    try {
      const payload = {
        operation: 'get_profile',
        user_id: artistId
      }
      const resp = await this.$axios.put(
        'https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/profile/',
        payload
      )
      this.profile = resp.data.profile
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="css" scoped></style>

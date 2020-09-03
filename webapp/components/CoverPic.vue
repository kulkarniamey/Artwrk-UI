<template>
  <div>
    <div class="text-center cover">
      <v-avatar color="indigo" size="64"
        ><v-icon dark size="40">mdi-account</v-icon></v-avatar
      >
      <h3 class="white--text">{{ profile.username }}</h3>
      <p class="white--text">{{ profile.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverPic',
  data: () => ({
    profile: {},
    isDpNull: true
  }),
  props: { profileData: { type: Object } },
  mounted() {
    this.profile = this.profileData
    this.fetchDp()
  },
  methods: {
    async fetchDp() {
      const payload = {
        operation: 'get_posts_by_user',
        id: this.profile.user_id
      }
      const response = await this.$axios.put(
        'https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/profile-picture',
        payload
      )
      this.postData = response.data
      console.log(this.postData?.posts?.length)
      if (this.postData?.posts?.length) {
        this.isPostsNull = false
      } else {
        this.isPostsNull = true
      }

      console.log(this.postData)
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/cover.jpg');
  background-position: center;
  background-size: cover;

  padding: 1rem 0;
  width: 100%;
  height: 20vh;

  position: absolute;
  left: 0;
  top: 0;
}
</style>

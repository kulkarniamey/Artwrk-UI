<template>
  <div>
    <div class="text-center cover">
      <v-avatar color="indigo" size="63"
        ><span class="white--text headline">PS</span></v-avatar
      >
      <h3 class="white--text">{{ profile.username }}</h3>
      <p class="white--text">{{ profile.user_id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverPic',
  data: () => ({
    profile: {}
  }),
  props: { profileData: { type: Object } },
  mounted() {
    this.profile = this.profileData
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

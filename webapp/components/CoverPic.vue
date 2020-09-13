<template>
  <div>
    <div class="text-center cover">
      <v-avatar color="indigo" size="64"
        ><v-icon v-if="!profileData.profile_pic" dark size="40"
          >mdi-account</v-icon
        >
        <v-img v-else :src="profileData.profile_pic"></v-img>
      </v-avatar>

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
    isDpNull: true,
  }),
  props: { profileData: { type: Object } },
  mounted() {
    this.profile = this.profileData
  },
  watch: {
    profileData() {
      this.profile = this.profileData
    },
  },
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
}
</style>

<template>
  <div>
    <div class="cover">
      <div class="displayPic">
        <v-avatar color="indigo" size="100"
          ><v-icon v-if="!profileData.profile_pic" dark size="40"
            >mdi-account</v-icon
          >
          <v-img v-else :src="profileData.profile_pic"></v-img>
        </v-avatar>
      </div>
      <div class="nameUsername">
        <h3 class="white--text">{{ profile.username }}</h3>
        <p class="white--text">{{ profile.name }}</p>
      </div>
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
  },
  watch: {
    profileData() {
      this.profile = this.profileData
    }
  },
  computed: {
    mobile() {
      if (this.width <= 960) {
        return true
      }

      return false
    }
  }
}
</script>

<style lang="css" scoped>
.cover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/cover.jpg');
  background-position: center;
  background-size: cover;

  padding: 1rem 0;
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
}
.displayPic {
  margin-left: 1em;
}
.nameUsername {
  margin-left: 1em;
  justify-content: center;
}
</style>

<template>
  <div>
    <v-row>
      <v-col cols="12">
        <CoverPic :profileData="profile" />
      </v-col>
    </v-row>
    <div>
      <v-row>
        <v-col cols="3" class="profile-card">
          <ArtistProfileCardComponent />
        </v-col>
        <v-col cols="9" class="profile-content">
          <PortfolioButton />
          <imageGrid />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CoverPic from '../../components/CoverPic'
import ArtistProfileCardComponent from '../../components/ArtistProfileCardComponent'
import imageGrid from '../../components/ImageGrid'
import PortfolioButton from '../../components/PortfolioButton'
export default {
  value: '_id',
  components: {
    CoverPic,
    imageGrid,
    ArtistProfileCardComponent,
    PortfolioButton,
  },
  data: () => ({
    user: '',
    profile: {},
  }),
  mounted() {
    this.user = this.$route.params.id
    this.profile = this.$auth.user
  },
}
</script>

<style scoped>
.profile-content {
  margin-top: 12em;
  padding: 0 5em;
}
.profile-card {
  padding: 3em;
}
</style>

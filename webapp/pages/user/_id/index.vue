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
import ArtistProfileCard from '../../components/ArtistProfileCard'
import imageGrid from '../../components/ImageGrid'
import PortfolioButton from '../../components/PortfolioButton'
export default {
  value: '_id',
  components: { CoverPic, imageGrid, ArtistProfileCard, PortfolioButton },
  data: () => ({
    user: '',
    profile: {
      user_id: 'artist_pruthvi2',
      username: 'pruthvi2',
      artist_score: 0,
      awards_recognition: [],
      current_employer: null,
      education_history: [],
      email_verfication: 'False',
      employer_history: [],
      facebook_link: null,
      followers: [],
      following: [],
      name: null,
      skill_tags: [],
      twitter_link: null,
      certificates: [],
      applied_jobs: [],
      email: 'pruthvishetty.artwrk@gmail.com',
      artist_type: null,
    },
  }),
  mounted() {
    this.user = this.$route.params.id
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

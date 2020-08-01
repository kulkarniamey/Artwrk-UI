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
          <ArtistProfileCardComponent :profileData="profile" />
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
    PortfolioButton
  },
  data: () => ({
    user: '',
    profile: {
      user_id: '',
      username: '',
      artist_score: 0,
      awards_recognition: [],
      current_employer: '',
      education_history: [],
      email_verfication: '',
      employer_history: [],
      facebook_link: '',
      followers: [],
      following: [],
      name: '',
      type: '',
      skill_tags: [],
      twitter_link: '',
      certificates: [],
      applied_jobs: [],
      email: '',
      artist_type: null
    }
  }),
  created() {
    this.profile = this.$auth.user
    console.log(this.profile)
  }
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

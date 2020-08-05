<template>
  <div>
    <template v-if="!mobile">
      <v-row>
        <v-col cols="12">
          <CoverPic :profileData="profile" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="profile-card">
          <ArtistProfileCardComponent :profileData="profile" />
        </v-col>
        <v-col cols="9" class="profile-content">
          <PortfolioButton />

          <imageGrid />
        </v-col>
      </v-row>
    </template>
    <template v-if="mobile">
      <v-row>
        <v-col cols="12" sm="12">
          <CoverPic :profileData="profile" />
        </v-col>
      </v-row>
      <v-tabs
        left
        background-color="white"
        color="deep-purple accent-4"
        class="tabs-control"
      >
        <v-tab>Bio </v-tab>
        <v-tab>Projects </v-tab>
        <v-tab>Portfolio </v-tab>
        <v-tab-item>
          <v-row>
            <v-col cols="12" sm="12" class="mobile-card--padding">
              <ArtistProfileCardComponent :profileData="profile" />
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <v-row>
            <v-col cols="12" sm="12" class="mobile-card--padding">
              <imageGrid />
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <v-row>
            <v-col cols="12" sm="12" class="profile-content">
              <PortfolioButton />
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </template>
  </div>
</template>

<script>
import CoverPic from '../../components/CoverPic'
import ArtistProfileCardComponent from '../../components/ArtistProfileCardComponent'
import imageGrid from '../../components/ImageGrid'
import PortfolioButton from '../../components/PortfolioButton'
export default {
  value: '_id',
  middleware: 'auth',
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
    },
    width: 0
  }),
  created() {
    this.profile = this.$auth.user
    console.log(this.profile)

    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.width = window.innerWidth
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

<style scoped>
.profile-content {
  margin-top: 12em;
  padding: 0 5em;
}
.profile-card {
  padding: 3em;
}
.mobile-card--padding {
  padding: 0;
  margin: 0;
}
.tabs-control {
  margin-top: 10em;
}
</style>

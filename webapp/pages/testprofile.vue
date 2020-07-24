<template>
  <div>
    <v-row>
      <CoverPic class="cover-header" />
    </v-row>

    <v-row>
      <ImageGrid class="grid" />
    </v-row>
  </div>
</template>

<script>
import ImageGrid from '../components/ImageGrid'
import CoverPic from '../components/CoverPic'
export default {
  name: 'testprofile',
  data() {
    return {
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
        followers: {},
        following: {},
        name: null,
        skill_tags: [],
        twitter_link: null,
        certificates: {},
        applied_jobs: {},
        email: 'pruthvishetty.artwrk@gmail.com',
        artist_type: null,
      },
    }
  },
  components: {
    CoverPic,
    ImageGrid,
  },
}
</script>

<style lang="scss" scoped>
.grid {
  margin-top: 8em;
  padding: 0;
}
.cover-header {
  margin-bottom: 2rem;
}
</style>

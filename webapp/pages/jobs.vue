<template>
  <div>
    <div class="hero-text text-center">
      <div class="ma-12 text-h1">Jobs</div>
      <div class="ma-8 text-h3">Discover Your Next Gig!</div>
      <v-btn nuxt to="jobpostform" color="deep-purple white--text">
        Post a job
      </v-btn>
    </div>
    <JobCard></JobCard>
  </div>
</template>

<script>
import JobCard from '../components/JobCard'
export default {
  name: 'testjoblist',
  head() {
    title: 'Jobs'
  },
  components: {
    JobCard,
  },
}
</script>

<style lang="scss" scoped>
.hero-text {
  margin: 0 auto;
  padding: 2em;
}
</style>

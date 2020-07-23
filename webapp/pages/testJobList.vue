<template>
  <div>
    <div class="hero-text text-center">
      <h1>Jobs</h1>
      <h2>Discover Your Next Gig!</h2>
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
    JobCard
  }
}
</script>

<style lang="scss" scoped>
.hero-text {
  margin: 0 auto;
  padding: 2em;
}
</style>

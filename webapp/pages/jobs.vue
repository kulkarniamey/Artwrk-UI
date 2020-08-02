<template>
  <div>
    <div class="hero-text text-center">
      <div class="ma-12 text-h1">Jobs</div>
      <div class="ma-8 text-h3">Discover Your Next Gig!</div>

      <div v-if="$store.state.auth.user.type==='recruiter'">
      <v-btn nuxt to="jobpostform" color="deep-purple white--text">
        Post a job 
      </v-btn>
      
      </div>

    </div>
    <JobCard></JobCard>
  </div>
</template>

<script>
import JobCard from '../components/JobCard'
export default {
  name: 'testjoblist',
  middleware: 'auth',
  
  head() {
    title: 'Jobs'
  },
  components: {
    JobCard,
  },

    data: () => ({
         
  }),

  



  
}
</script>

<style lang="scss" scoped>
.hero-text {
  margin: 0 auto;
  padding: 2em;
}
</style>

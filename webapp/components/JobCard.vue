<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="job in jobs" :key="job.name">
        <v-lazy
          v-model="job.isActive"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <v-card class="text-sm-center ma-2">
            <v-responsive class="pt-3 justify-center">
              <v-avatar color="deep-purple" size="100">
                <v-icon size="80" color="white" v-text="job.avatar"></v-icon>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-card-title class="justify-center headline">{{
                job.name
              }}</v-card-title>
              <div class="grey--text">{{ job.info }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-purple white--text" v-on:click="apply(job)">
                Apply for job
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-lazy>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      applyJobData:{},
      jobDetailsData:{}
       
    }

 
  },
  computed: {
    renderCard() {
      return this.jobs.filter((p) => p.isActive).length
    }
  },
  created(){
    this.jobDetailsData= this.$axios.put(`https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/jobs/job_1596973848.605142_parimal4567`)

  },

  methods:{
    apply(job){
      console.log(job)
      
    },

    async apply(){
     
      this.applyJobData['operation'] = 'apply_job'
      this.applyJobData['id'] = this.$auth.user.user_id
      this.applyJobData['recruiter_id']=this.recruiter_id
      this.applyJobData['job_id']=this.job_id
      console.log('Data Submitted payload:', this.applyJobData)
      
      try {
        const response = await this.$axios.put('https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/jobs/job_1596973848.605142_parimal4567', this.applyJobData)
        console.log(response)
        if (response.data.statusCode === 200) {

        }
        
        debugger
      } catch (err) {
        console.log(err)
      }
      
    },

    async jobDetails(){
      this.jobDetailsData['operation'] = 'get_job'
      this.jobDetailsData['authorizationToken'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYXJ0aXN0X3BydXRodmkyIiwidXNlcl90eXBlIjoiYXJ0aXN0IiwidXNlcm5hbWUiOiJwcnV0aHZpMiIsImV4cCI6MTU5NjU1NTc0Nn0.A0phlyAl4jHsa0lHdE8Lz40pI4Kgdl_870tKA90s0LM'
        // .getToken('local')
        // .replace('Bearer ', '')
      this.jobDetailsData['id'] = 'recruiter_parimal4567'
      this.jobDetailsData['job_id']='job_1596973848.605142_parimal4567'
      console.log('Data Submitted payload:', this.jobDetailsData)



        try {
        const response = await this.$axios.put(`https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/jobs/job_1596973848.605142_parimal4567`)
        
        console.log(response)
        if (response.data.statusCode === 200) {

        }
        
        debugger
      } catch (err) {
        console.log(err)
      }
    }

  }
}
</script>

<style lang="scss" scoped></style>

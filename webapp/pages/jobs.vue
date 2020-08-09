<template>
  <div>
    <div class="hero-text text-center">
      <div class="ma-12 text-h1">Jobs</div>
      <div class="ma-8 text-h3">Discover Your Next Gig!</div>

      <!-- <div v-if="$store.state.auth.user.type==='recruiter'"> -->
      <v-btn nuxt to="jobpostform" color="deep-purple white--text" >
        Post a job 
      </v-btn>
      
      <!-- </div> -->

    </div>
    <JobCard></JobCard>
  </div>
</template>

<script>
import JobCard from '../components/JobCard'
export default {
  name: 'testjoblist',
  middleware: ['auth'],
  
  head() {
    title: 'Jobs'
  },
  components: {
    JobCard,
  },

    data: () => ({

      xamzMetaUpload:{
      "User_Id": "artist_pruthvi5",
      "type":"job",
      "description":"abcdef",
      "flag":"1"
      },

      
      bodyData:null,
      description:'jfkdsjfsdjfsdfjl',
       postJobData: {},
         
  }),

 

  methods:{
    async postJob(){
     
      
      this.postJobData['User_id'] = this.$auth.user.user_id
      this.postJobData['type']='job'
      this.postJobData['decsription']=this.description
      this.postJobData['flag']='1'
      this.postJobData['authorizationToken'] = this.$auth
        .getToken('local')
        .replace('Bearer ', '')


      console.log('Data Submitted payload:', this.postJobData)
      
      try {
        const response = await this.$axios.put(`https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/upload/${this.postJobData.User_id}/job/abc.txt`, this.bodyData,
        {
          headers: {
            'x-amz-meta-upload': JSON.stringify(this.postJobData),
            'authorizationToken':this.postJobData.authorizationToken
        }})
        
        console.log(response)
        if (response.data.statusCode === 200) {

        }
        
        debugger
      } catch (err) {
        console.log(err)
      }
      
    },

  
  }

  



  
}
</script>

<style lang="scss" scoped>
.hero-text {
  margin: 0 auto;
  padding: 2em;
}
</style>

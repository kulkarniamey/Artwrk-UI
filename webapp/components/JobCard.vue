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
      jobs: [
        {
          name: 'LogicBlend',
          avatar: 'mdi-account',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'SpecDrive',
          avatar: 'mdi-account-supervisor',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'CloakSeven',
          avatar: 'mdi-account-group',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'Work&Aty',
          avatar: 'mdi-account-circle',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'Logic&Effiny',
          avatar: 'mdi-briefcase-account',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },
        {
          name: 'Clad&Brin',
          avatar: 'mdi-clipboard-account',
          info:
            'Lorem ipsum dolor sit amet, vim eligendi aliquando reprimique in. Qui diam iudicabit consectetuer ea, eos ad dicunt persecuti scriptorem, qui vero putent ad. Regione civibus mnesarchum duo te. Pri veri tollit aperiam in.'
        },

        
      ],
       applyJobData: {}
    }

 
  },
  computed: {
    renderCard() {
      return this.jobs.filter((p) => p.isActive).length
    }
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
        const response = await this.$axios.put('/login/', this.applyJobData)
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

<style lang="scss" scoped></style>

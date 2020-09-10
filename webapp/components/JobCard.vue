<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="job in jobDetailsData" :key="job.name">
        <v-lazy
          v-model="job.isActive"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <v-card class="text-sm-center ma-2">
            <v-responsive class="pt-3 justify-center">
              <v-avatar color="deep-purple" size="100">
                <span class="white--text headline">{{ job.companyTitle }}</span>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-card-title class="justify-center headline">{{
                job.jobTitle
              }}</v-card-title>
              <div class="grey--text">{{ job.description }}</div>
            </v-card-text>
            <v-card-actions>
              <div v-if="$store.state.auth.user.type === 'artist'">
                <v-btn color="deep-purple white--text" v-on:click="apply(job)">
                  Apply for job
                </v-btn>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-lazy>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="success">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      applyJobData: {},
      jobDetailsData: {},
      snackbar: false,
      text: 'Job Applied Succesufully ',
      timeout: 2000,
      valid: true
    }
  },
  computed: {
    renderCard() {
      return this.jobs.filter((p) => p.isActive).length
    }
  },
  async mounted() {
    this.jobDetails()
  },

  methods: {
    async apply(job) {
      this.applyJobData['operation'] = 'apply_job'
      this.applyJobData['id'] = this.$auth.user.user_id
      this.applyJobData['recruiter_id'] = job.recruiter_id
      this.applyJobData['job_id'] = job.jobId
      this.applyJobData['authorizationToken'] = this.$auth
        .getToken('local')
        .replace('Bearer ', '')
      console.log('Data Submitted payload:', this.applyJobData)

      try {
        const response = await this.$axios.post(
          `https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/jobs/${this.applyJobData.jobId}/apply`,
          this.applyJobData
        )
        console.log(response)
        if (response.data.statusCode === 200) {
          this.snackbar = true
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.applyJobData = {}
      }
    },

    async jobDetails() {
      const payload = {
        operation: 'get_all_jobs',
        authorizationToke: this.$auth.getToken('local').replace('Bearer ', '')
      }
      try {
        const response = await this.$axios.put(
          `https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/jobs`,
          payload
        )
        console.log(response)
        if (response.data.jobs) {
          this.jobDetailsData = response.data.jobs
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

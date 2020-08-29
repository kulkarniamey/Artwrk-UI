<template>
  <v-card elevation="0" min-height="600" max-width="500" class="mx-auto">
    <v-card-title>
      <span class="headline">Job details</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="formData.jobTitle"
                :rules="jobTitleRules"
                label="Job Title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="formData.jobDescription"
                :rules="jobDescRules"
                label="Job Description"
                rows="3"
                required
              ></v-textarea>
            </v-col>
            <!-- <v-col cols="12"> {{ name }} </v-col> -->
            <v-col cols="12">
              <v-text-field
                v-model="formData.companyName"
                :rules="companyNameRules"
                label="Company Name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-container>

      <p class="text-lg-right">
        Have queries?<v-btn
          text
          nuxt
          class="text-capitalize"
          color="orange darken-1"
          to="../layouts/error"
        >
          Ask Here.
        </v-btn>
      </p>
    </v-card-text>
    <v-card-actions>
      <!-- <v-spacer></v-spacer> -->
      <v-btn
        color="orange darken-1"
        text
        class="mx-auto"
        :disabled="!valid"
        @click="validate"
        >Post Job</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'jobpostform',
  data() {
    return {
      formData: {
        jobTitle: undefined,
        jobDescription: undefined,
        companyName: undefined,
      },
      valid: true,

      companyNameRules: [],

      jobTitleRules: [],

      jobDescRules: [],
      jobTypes: ['Full time', 'Part time', 'Freelance'],
      postJobData: {},
    }
  },
  methods: {
    validate() {
      this.companyNameRules = [
        (v) => !!v || 'Company name is required',
        (v) =>
          (v && v.length <= 50) || 'Company name must be less than 25 words',
        // Tentative word limit. Needs to be changed.
      ]

      this.jobTitleRules = [
        (v) => !!v || 'Job title is required',
        (v) => (v && v.length <= 50) || 'Job title must be less than 25 words',
        // Tentative word limit. Needs to be changed.
      ]

      this.jobDescRules = [
        (v) => !!v || 'Job description is required',
        (v) =>
          (v && v.length <= 3000) ||
          'Job description must be less than 500 words',
        // Tentative word limit. Needs to be changed.
      ]
      if (this.$refs.form.validate()) {
        if (
          this.formData.jobTitle &&
          this.formData.jobDescription &&
          this.formData.companyName
        ) {
          this.postJob()
          this.submitForm()
        }
      } else {
        this.companyNameRules = []

        this.jobTitleRules = []

        this.jobDescRules = []
      }
    },
    submitForm() {
      console.log('Data Submitted payload:', this.formData)
      this.formData = {
        jobTitle: undefined,
        jobDescription: undefined,
        companyName: undefined,
        artistType: undefined,
        jobType: undefined,
      }
      this.companyNameRules = []

      this.jobTitleRules = []

      this.jobDescRules = []
    },

    async postJob() {
      this.postJobData['user_id'] = this.$auth.user.user_id
      this.postJobData['upload_type'] = 'job'
      this.postJobData['description'] = this.formData.jobDescription
      this.postJobData['job_title'] = this.formData.jobTitle
      this.postJobData['company_title'] = this.formData.companyName
      this.postJobData['filename'] = 'abc.jpeg'
      this.postJobData['date_time'] = new Date().toLocaleString()
      this.postJobData['flag'] = '0' /*flag 1 if post uploaded */
      this.postJobData['authorizationToken'] = this.$auth
        .getToken('local')
        .replace('Bearer ', '')

      console.log('Data Submitted payload:', this.postJobData)

      try {
        const response = await this.$axios.put(
          `https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/uploadcontent`,
          this.postJobData.filename,
          {
            headers: {
              metadata: JSON.stringify(this.postJobData),
              authorizationToken: this.postJobData.authorizationToken,
              'content-type': 'multipart/form-data',
            },
          }
        )

        console.log(response)
        if (response.data.statusCode === 200) {
        }

        debugger
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>

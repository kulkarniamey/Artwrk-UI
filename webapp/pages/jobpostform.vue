<template>
  <v-card elevation="0" min-height="600" max-width="450" class="mx-auto">
    <v-card-title>
      <span class="headline">Job details</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="jobTitle"
                :rules="jobTitleRules"
                label="Job Title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="jobDesc"
                :rules="jobDescRules"
                label="Job Description"
                required
              ></v-textarea>
            </v-col>
            <!-- <v-col cols="12"> {{ name }} </v-col> -->
            <v-col cols="12">
              <v-text-field
                v-model="companyName"
                :rules="companyNameRules"
                label="Company Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="e1"
                :items="artistTypes"
                menu-props="auto"
                label="Artist Type"
                hide-details
                single-line
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="e2"
                :items="jobType"
                label="Job Type"
                hide-details
                single-line
              ></v-select>
            </v-col>
          </v-row>
        </v-form>
      </v-container>

      <p class="text-lg-right ">
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
      e1: null,
      e2: null,
      valid: true,
      companyName: '',
      companyNameRules: [
        (v) => !!v || 'Company name is required',
        (v) =>
          (v && v.length <= 50) || 'Company name must be less than 25 words'
        // Tentative word limit. Needs to be changed.
      ],
      jobTitle: '',
      jobTitleRules: [
        (v) => !!v || 'Job title is required',
        (v) => (v && v.length <= 50) || 'Job title must be less than 25 words'
        // Tentative word limit. Needs to be changed.
      ],
      jobDesc: '',
      jobDescRules: [
        (v) => !!v || 'Job description is required',
        (v) =>
          (v && v.length <= 3000) ||
          'Job description must be less than 500 words'
        // Tentative word limit. Needs to be changed.
      ],
      jobType: ['Full time', 'Part time', 'Freelance'],
      artistTypes: [
        'Illustrator',
        'Photoshop artist',
        'Photographer',
        'Videographer',
        'Vfx artist',
        'Animator',
        'Logo Designer',
        'UI/UX Designer',
        'Dancer',
        'Musician'
      ]
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.submitForm()
      }
    },
    submitForm() {
      let payload = {
        email: this.email,
        password: this.pass,
        type: this.userType
      }
      console.log('Data Submitted payload:', payload)
    }
  },
  computed: {
    checkMatch() {
      if (this.pass === this.pass2) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <v-card elevation="0" min-height="600" max-width="500" class="mx-auto">
    <v-card-title>
      <span class="headline">Complete your profile</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="formData.username"
                :rules="usernameRules"
                label="Username"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formData.artistName"
                :rules="artistNameRules"
                label="Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6" subheading="Social Media">
              <v-text-field
                v-model="formData.fbHandle"
                :rules="fbRules"
                label="Facebook profile"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.twitterHandle"
                :rules="twitterRules"
                label="Twitter profile"
              ></v-text-field>
            </v-col>
            <!-- 
                Space for string array inputs 
                for employer history 
                    skilltags 
                    awards recognition 
             -->
            <v-col cols="12">
              <v-text-field
                v-model="formData.currentEmployer"
                :rules="currentEmployerRules"
                label="Current Employer"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="formData.artistType"
                :items="artistTypes"
                menu-props="auto"
                label="Artist Type"
                hide-details
                single-line
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="formData.jobType"
                :items="jobTypes"
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
  name: 'artistonboardingform',
  data() {
    return {
      formData: {
        username: undefined,
        artistName: undefined,
        currentEmployer: undefined,
        artistType: undefined,
        jobType: undefined
      },
      valid: true,

      companyNameRules: [],

      usernameRules: [],

      artistNameRules: [],
      jobTypes: ['Full time', 'Part time', 'Freelance'],
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
      this.companyNameRules = [
        (v) => !!v || 'Company name is required',
        (v) =>
          (v && v.length <= 50) || 'Company name must be less than 25 words'
        // Tentative word limit. Needs to be changed.
      ]

      this.usernameRules = [
        (v) => !!v || 'Username is required',
        (v) => (v && v.length <= 8) || 'Username must be less than 8 characters'
        // Tentative word limit. Needs to be changed.
      ]

      this.artistNameRules = [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 50) || 'Name must be less than 25 words'
        // Tentative word limit. Needs to be changed.
      ]
      if (this.$refs.form.validate()) {
        this.submitForm()
      } else {
        this.companyNameRules = []
        this.usernameRules = []
        this.artistNameRules = []
      }
    },
    submitForm() {
      console.log('Data Submitted payload:', this.formData)
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

<template>
  <v-card elevation="0" min-height="600" max-width="500" class="mx-auto">
    <v-card-title>
      <span class="headline">Complete your profile</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1"> </v-stepper-step>
            <v-divider></v-divider>
            <!-- <v-stepper-step :complete="e1 > 4" step="4"> </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3"> </v-stepper-step>
            <v-divider></v-divider> -->
            <v-stepper-step :complete="e1 > 2" step="2"> </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-form ref="firstPageForm" v-model="valid">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="formData.artworkTitle"
                      :rules="artworkTitleRules"
                      label="artworkTitle"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="formData.artworkDescription"
                      label="artworkDescription"
                      rows="3"
                      required
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-file-input
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Your beatiful Art!"
                      prepend-icon="mdi-camera"
                      label="Select artwork"
                    ></v-file-input>
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      v-model="formData.skillsUsed"
                      :items="skilltags"
                      menu-props="auto"
                      label="Skills Used"
                      chips
                      multiple
                      required
                    ></v-select>
                    <small>
                      *this field is mandatory.
                    </small>
                  </v-col>
                </v-row>
              </v-form>

              <v-btn color="primary" @click="firstPageValid">
                Continue
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-form ref="secondPageForm" v-model="valid">
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      v-model="formData.empHistory"
                      label="Employer history"
                      rows="3"
                      required
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="formData.awards"
                      label="Awards recognition"
                      rows="3"
                      required
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="formData.education"
                      label="Education"
                      rows="3"
                      required
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-form>
              <v-btn color="warning" @click="e1 = 1">
                back
              </v-btn>
              <v-btn color="primary" @click="secondPageValid">
                Continue
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-form ref="thirdPageForm" v-model="valid">
                <v-row>
                  <v-col cols="12">
                    <v-file-input
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick an avatar!"
                      prepend-icon="mdi-camera"
                      label="Profile Picture"
                    ></v-file-input>
                  </v-col>
                  <v-col cols="12">
                    <v-file-input
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick a cover photo"
                      prepend-icon="mdi-camera"
                      label="Cover Photo"
                    ></v-file-input>
                  </v-col>
                </v-row>
              </v-form>
              <v-btn color="warning" @click="e1 = 2">
                back
              </v-btn>
              <v-btn color="primary" @click="thirdPageValid">
                Continue
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <small class="pa-2 ma-2">
                Make sure you filled every field :)
              </small>

              <v-card-actions>
                <v-btn color="warning" class="" @click="e1 = 1">
                  back
                </v-btn>
                <v-btn
                  color="primary"
                  class="white--text"
                  :disabled="!valid"
                  @click="validate"
                  >Post your art</v-btn
                >
              </v-card-actions>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
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
  </v-card>
</template>

<script>
export default {
  name: 'CreatePost',
  data() {
    return {
      formData: {
        artworkTitle: undefined,
        artistName: undefined,
        currentEmployer: undefined,
        skillsUsed: undefined,
        artworkDescription: undefined,
        awards: undefined,
        education: undefined
      },
      valid: true,
      e1: 1,
      steps: 4,
      rules: [
        (value) =>
          !value ||
          value.size < 200000000 ||
          'Picture size should be less than 200 MB!'
      ],
      companyNameRules: [],

      usernameRules: [],

      artistNameRules: [],
      jobTypes: ['Full time', 'Part time', 'Freelance'],
      skilltags: [
        'Illustrator',
        'Photoshop',
        'Photographer',
        'Videographer',
        'Cinema4D',
        'Blender',
        'After effects',
        'Adobe Xd',
        'Dance',
        'Guitar'
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
    },

    firstPageValid() {
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

      if (this.$refs.firstPageForm.validate()) {
        this.e1 = 2
      }
    },

    secondPageValid() {
      if (this.$refs.secondPageForm.validate()) {
        this.e1 = 3
      }
    },
    thirdPageValid() {
      if (this.$refs.thirdPageForm.validate()) {
        this.e1 = 4
      }
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

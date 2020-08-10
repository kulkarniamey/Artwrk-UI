<template>
  <v-card elevation="0" min-height="600" max-width="500" class="mx-auto">
    <v-card-title>
      <span class="headline">Complete your profile {{ profile.username }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1"> </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2"> </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3"> </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 4" step="4"> </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-form ref="firstPageForm" v-model="valid">
                <v-row>
                  <v-col cols="12"> </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="profile.name"
                      :rules="artistNameRules"
                      label="Name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" subheading="Social Media">
                    <v-text-field
                      v-model="profile.facebook_link"
                      label="Facebook profile"
                      @input="applySocialRules()"
                      :rules="fbRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="profile.twitter_link"
                      label="Twitter profile"
                      @input="applySocialRules()"
                      :rules="tweetRules"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="profile.current_employer"
                      label="Current Employer"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="profile.skill_tags"
                      :items="skilltags"
                      menu-props="auto"
                      label="Skills"
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
            <v-stepper-content step="2">
              <v-form ref="secondPageForm" v-model="valid">
                <v-row>
                  <v-col cols="12">
                    Employer History
                    <v-chip
                      v-for="(names, id) in profile.employer_history"
                      :key="id"
                      class="ma-1"
                      color="blue lighten-4"
                      >{{ names }}
                    </v-chip>
                    <v-form v-on:submit.prevent="addExperience()">
                      <v-text-field
                        placeholder="Press enter after each entry"
                        required
                        v-model="formData.empHistory"
                        type="text"
                      >
                      </v-text-field>
                    </v-form>
                  </v-col>
                  <v-col cols="12">
                    Awards and Recognitions
                    <v-chip
                      v-for="(names, id) in profile.awards_recognition"
                      :key="id"
                      class="ma-1"
                      color="blue lighten-4"
                      >{{ names }}
                    </v-chip>
                    <v-form v-on:submit.prevent="addAward()">
                      <v-text-field
                        placeholder="Press enter after each entry"
                        required
                        v-model="formData.awards"
                        type="text"
                      >
                      </v-text-field>
                    </v-form>
                  </v-col>
                  <v-col cols="12">
                    Education History
                    <v-chip
                      v-for="(names, id) in profile.education_history"
                      :key="id"
                      class="ma-1"
                      color="blue lighten-4"
                      >{{ names }}
                    </v-chip>
                    <v-form v-on:submit.prevent="addEducation()">
                      <v-text-field
                        placeholder="Press enter after each entry"
                        required
                        v-model="formData.education"
                        type="text"
                      >
                      </v-text-field>
                    </v-form>
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
            <v-stepper-content step="4">
              <small class="pa-2 ma-2">
                Make sure you filled every field :)
              </small>

              <v-card-actions>
                <v-btn color="warning" class="" @click="e1 = 3">
                  back
                </v-btn>
                <v-btn
                  color="primary"
                  class="white--text"
                  :disabled="!valid"
                  @click="validate"
                  >Save</v-btn
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
  name: 'artistonboardingform',
  props: { profileData: { type: Object } },
  data() {
    return {
      formData: {
        username: undefined,
        artistName: undefined,
        currentEmployer: undefined,
        skilltag: undefined,
        empHistory: undefined,
        awards: undefined,
        education: undefined
      },
      profile: {},
      valid: true,
      e1: 1,
      steps: 4,
      rules: [
        (value) =>
          !value ||
          value.size < 20000000 ||
          'Picture size should be less than 20 MB!'
      ],
      companyNameRules: [],

      usernameRules: [],

      artistNameRules: [],
      fbRules: [],
      tweetRules: [],
      jobTypes: ['Full time', 'Part time', 'Freelance'],
      skilltags: [
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
  mounted() {
    this.profile.id = this.profileData.user_id
    console.log(this.profile)
  },
  methods: {
    validate() {
      this.submitForm()
    },
    async submitForm() {
      this.profile['operation'] = 'update_profile'
      this.profile['authorizationToken'] = this.$auth
        .getToken('local')
        .replace('Bearer ', '')
      console.log('Data Submitted payload:', this.profile)
      try {
        const response = await this.$axios.put('/profile/', this.profile)
        console.log(response)
        if (response.data.statusCode === 200) {
          this.$auth.setUser(response.data.profile)
          const link = `/artist/${response.data.profile.username}`
          this.$router.push(link)
        }
        debugger
      } catch (err) {
        console.log(err)
      }
    },

    firstPageValid() {
      this.artistNameRules = [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 50) || 'Name must be less than 25 words'
        // Tentative word limit. Needs to be changed.
      ]

      if (this.$refs.firstPageForm.validate()) {
        if (this.profile.name) {
          this.e1 = 2
        }
      }
      debugger
    },
    applySocialRules() {
      debugger
      this.fbRules = [
        (v) =>
          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
            v
          ) || 'Enter valid link'
      ]
      this.tweetRules = [
        (v) =>
          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
            v
          ) || 'Enter valid link'
      ]
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
    },
    addExperience() {
      if (!this.profile.employer_history) {
        this.profile.employer_history = []
      }
      this.profile.employer_history.push(this.formData.empHistory)
      this.formData.empHistory = ''
    },
    addAward() {
      if (!this.profile.awards_recognition) {
        this.profile.awards_recognition = []
      }
      this.profile.awards_recognition.push(this.formData.awards)
      this.formData.awards = ''
    },
    addEducation() {
      if (!this.profile.education_history) {
        this.profile.education_history = []
      }
      this.profile.education_history.push(this.formData.education)
      this.formData.education = ''
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

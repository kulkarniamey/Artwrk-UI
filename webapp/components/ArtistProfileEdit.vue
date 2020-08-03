<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Edit Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                                   <v-chip
        v-for="(names, id) in profile.skill_tags"
        :key="id"
        class="ma-1"
        color="blue lighten-4"
        >{{ names }}
      </v-chip>  
            <v-form v-on:submit.prevent="addSkill()">
        <v-text-field placeholder="Press enter after each entry" required v-model="formData.skills" type="text">
        </v-text-field>
            </v-form>
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

            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="onSave">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ArtistProfileEdit',
  props: {
    profileData: { type: Object, required: true },
  },
  data: () => ({
    dialog: false,
    profile: {},
    skills: [
      'Photoshop',
      'Illustrator',
      'Figma',
      'Adobe Xd',
      'After Effects',
      'Blender'
    ],
    formData:{
      skills:undefined,
      
    },
    fbRules:[],
    tweetRules:[],
  }),
  mounted() {
    //this.profile = this.profileData
  },
  methods: {
    onSave() {
      $nuxt.$emit('save-profile', this.profile)
      this.updateProfile()
      this.dialog = false
      this.$router.go(this.$router.currentRoute) 
      
    },
    async updateProfile(){
     
      this.profile['operation'] = 'update_profile'
      this.profile['authorizationToken'] = this.$auth
        .getToken('local')
        .replace('Bearer ', '')
      this.profile['id'] = this.$auth.user.user_id
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
    

    addSkill(){

      if (!this.profile.skill_tags) {
        this.profile.skill_tags = []
      }
      this.profile.skill_tags.push(this.formData.skills)
      this.formData.skills = ''
      
      

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
  }
}
</script>

<template>
  <v-card elevation="9" min-height="600" max-width="550" class="mx-auto">
    <v-card-title>
      <span class="headline">Log in</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="userinfo.username"
                :rules="usernameRules"
                label="Username*"
                required
              ></v-text-field>
            </v-col>
            <!-- <v-col cols="12"> {{ name }} </v-col> -->
            <v-col cols="12">
              <v-text-field
                label="Password*"
                v-model="userinfo.password"
                :rules="passRules"
                type="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-btn-toggle
          v-model="userinfo.type"
          tile
          color="indigo accent-3"
          group
        >
          <v-btn value="artist">
            Artist
          </v-btn>

          <v-btn value="recruiter">
            Recruiter
          </v-btn>

          <v-btn value="admin">
            Admin
          </v-btn>
        </v-btn-toggle>
      </v-container>
      <span class="text-caption text-left inline"
        >*indicates required field
      </span>
      <p class="text-right inline">
        Forgot password? Reset<v-btn
          nuxt
          text
          small
          color="orange darken-1"
          to="/auth/forgot"
        >
          Here.
        </v-btn>
      </p>
      <p class="text-lg-right">
        New User?<v-btn nuxt text color="orange darken-1" to="/auth/register">
          Create Account
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
        >Log in</v-btn
      >
    </v-card-actions>

    <v-snackbar v-model="snackbar" :timeout="timeout" color="red">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      text: 'Invalid Login Credentials',
      timeout: 2000,
      valid: true,

      passRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length <= 15) || 'Password must be less than 8 characters',
      ],

      usernameRules: [(v) => !!v || 'Username is required'],
      userinfo: {
        operation: 'sign_in',
        username: '',
        password: '',
        type: 'artist',
      },
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.login()
      }
    },
    login() {
      console.log('Payload:')
      // var userinfo=JSON.stringify({email:this.email,password:this.pass});

      this.loginUser(this.userinfo)
    },

    async loginUser({ operation, username, password, type }) {
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            username: username,
            password: password,
            type: type,
            operation: operation,
          },
        })
        
        if (response?.data?.statusCode !== 200) {
          this.text = response.data.message
          throw 'error!'
        }
        const token = response.data.token
        const userPayload = {
          operation: 'get_profile',
          authorizationToken: token,
        }
        if (type === 'admin') {
          //let user = await this.$axios.put('/profile/', userPayload)
          let user = {"user_id":"admin","username":"admin","artist_score":0,"awards_recognition":[],"current_employer":null,"education_history":[],"email_verfication":"False","employer_history":[],"facebook_link":null,"followers":[{"recruiter_tryme":"job_1599153723.966364_tryme"},{"recruiter_parimal098":"job_1599641036.188983_parimal098"},{"recruiter_Amey_recruiter":"job_1599067882.908197_Amey_recruiter"}],"following":[],"name":"PS","type":"admin","skill_tags":[],"twitter_link":null,"certificates":[{"asssas":"https://artwrk-test-upload.s3.ap-south-1.amazonaws.com/artist_som3/certificate/123.docx"}],"applied_jobs":[],"email":"soham.artwrk.com@gmail.com","artist_type":null}
          
          //console.log(user)
          this.$auth.setUser(user)
        } else {
          let user = await this.$axios.put('/profile/', userPayload)
          //console.log(user)
          this.$auth.setUser(user.data.profile)
        }
      } catch (err) {
        console.log(err)
        console.log('Error hua')
        this.snackbar = true
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="contain">
    <v-card elevation="3" class="card">
      <v-card-title>
        <span class="headline">Forgot Password?</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="userinfo.email"
                  :rules="emailRules"
                  label="Enter E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <p>Select User Type</p>
          <v-btn-toggle
            v-model="userinfo.type"
            tile
            color="indigo accent-4"
            group
          >
            <v-btn value="artist">
              Artist
            </v-btn>

            <v-btn value="recruiter">
              Recruiter
            </v-btn>
          </v-btn-toggle>
        </v-container>

        <p class="text-right">
          <v-btn nuxt small text color="orange darken-1" to="/auth/login">
            back
          </v-btn>
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="orange darken-1"
          text
          class="mx-auto"
          :disabled="!valid"
          @click="validate"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Forgotpass',

  data() {
    return {
      valid: true,

      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      userinfo: {
        email: '',
        type: 'artist'
      }
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.forgot()
      }
    },
    forgot() {
      console.log('Payload:')
      // var userinfo=JSON.stringify({email:this.email,password:this.pass});
      this.$store.commit('reset/addEmail', this.userinfo.email)
      this.$store.commit('reset/addType', this.userinfo.type)
      this.sendOtp(this.userinfo)
    },

    async sendOtp(userinfo) {
      const payload = {
        operation: 'forgot_password',
        username: userinfo.email,
        type: userinfo.type
      }
      try {
        let response = await this.$axios
          .put('/forgot-password', payload)
          .then(this.$router.push('reset/'))
        console.log(response)
      } catch (err) {
        console.log(err)
        this.$router.push('reset/')
      }
    }
  }
}
</script>

<style lang="css" scoped>
.contain {
  display: grid;
  place-items: center;
  height: 80vh;
  overflow: hidden;
}

.contain .card {
  width: 450px;
}
</style>

<template>
  <div class="contain">
    <v-card elevation="3" class="card">
      <v-card-title>
        <span class="headline">Verify Email</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col cols="12">
                <p class="pa-1 fill-height">
                  We have sent you an otp on your email
                  <b>{{ profile.email }}</b>
                  <br />
                  Please enter the the OTP.
                </p>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="otpinfo.otp"
                  :rules="otpRules"
                  label="Enter OTP"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>

        <!-- <p class="text-right">
          <v-btn nuxt small text color="orange darken-1" to="/auth/login">
            back
          </v-btn>
        </p> -->
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
  name: 'Verify',

  data() {
    return {
      valid: true,
      profile: {},
      otpRules: [
        (v) => !!v || 'OTP is required',
        (v) => /\b\d{6}\b/.test(v) || 'Enter valid OTP',
        (v) => (v && v.length <= 50) || 'Name must be less than 25 words'
      ],
      otpinfo: {
        otp: ''
      }
    }
  },
  created() {
    this.profile = this.$auth.user
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.verify()
      }
    },
    verify() {
      console.log('Payload:', this.otpinfo)
      // var userinfo=JSON.stringify({email:this.email,password:this.pass});

      this.verifyOtp(this.otpinfo)
    },

    async verifyOtp(otpinfo) {
      const payload = {
        operation: 'verify_account',
        username: this.profile.username,
        type: this.profile.type,
        otp: otpinfo.otp
      }
      try {
        let response = await this.$axios
          .put('/verify-account', payload)
          .then(() => {
            this.$router.push('/welcome/')
          })
        console.log(response)
      } catch (err) {
        console.log(err)
        // this.$router.push('/welcome/')   Demo purpose only
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

<template>
  <div class="contain">
    <v-card elevation="9" max-width="380" class="card custom-card">
      <v-card-title>
        <span class="headline">Reset Password</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-row>
              <div class="condition-div">
                <v-col cols="12">
                  <v-text-field
                    v-model="OTP.otp"
                    :rules="OTPRules"
                    label="Enter OTP"
                    dark
                    required
                  ></v-text-field>
                </v-col>
              </div>
              <div class="condition-div">
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    v-model="pass"
                    :rules="passRules"
                    type="password"
                    dark
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Confirm Password*"
                    v-model="pass2"
                    :rules="passTwoRules"
                    type="password"
                    dark
                    required
                  ></v-text-field>
                </v-col>
              </div>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <p class="text-right custom">
        <v-btn small text color="orange darken-1" @click="requestOtp">
          Resend OTP
        </v-btn>
      </p>
      <p class="text-right custom">
        <v-btn nuxt small text color="orange darken-1" to="/auth/forgot">
          back
        </v-btn>
      </p>
      <v-card-actions class="mt-8 mx-auto">
        <!-- <v-spacer></v-spacer> -->
        <!-- <v-btn color="orange darken-1" text class="mx-auto">Verify</v-btn> -->
        <v-btn color="orange darken-1" text class="mx-auto" @click="submit"
          >Change Password</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Resetpass',
  data() {
    return {
      valid: true,
      isVerified: true,

      email: '',
      pass: '',
      pass2: '',
      passRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length > 6) || 'Password must be greater than 6 characters'
      ],
      passTwoRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length > 6) || 'Password must be greater than 6 characters',
        (v) => (v && this.checkMatch) || 'Passwords must match'
      ],
      OTP: { otp: '' },
      OTPRules: [
        (v) => !!v || 'OTP is required',
        (v) => /\b\d{6}\b/.test(v) || 'Enter valid OTP'
      ]
    }
  },
  created() {
    this.email = this.$store.state.reset.email
    this.type = this.$store.state.reset.type
    console.log(this.email)
    console.log(this.type)
  },
  methods: {
    changeVerified() {
      this.isVerified = false
    },

    submit() {
      if (this.$refs.form.validate()) {
        this.submitForm()
      }
    },

    requestOtp() {
      console.log('RensendOTP:', this.otp)

      this.resendOtp(this.otp)
    },
    async resendOtp() {
      const resend = {
        operation: 'resend_otp',
        username: this.email,
        type: this.type
      }
      try {
        let response = await this.$axios.put('/resend-otp', resend)
        // .then(this.$router.push(''))
        console.log(response)
      } catch (err) {
        console.log(err)
        // this.$router.push('')
      }
    },
    async submitForm() {
      let payload = {
        operation: 'reset_password',
        otp: this.OTP.otp,
        password: this.pass,
        username: this.email,
        type: this.type
      }
      console.log('Data Submitted payload:', payload)
      try {
        let response = await this.$axios.put('/reset-password', payload)
        // .then(this.$router.push('/welcome/'))
        console.log(response)
      } catch (err) {
        console.log(err)
        // this.$router.push('')
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

.condition-div {
  width: 100%;
}

.custom {
  display: inline;
}
.custom-card {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  color: #fff;
}
</style>

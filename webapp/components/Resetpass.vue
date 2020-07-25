<template>
  <div class="contain">
    <v-card elevation="9" max-width="450" class="card">
      <v-card-title>
        <span class="headline">Reset Password</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-row>
              <div class="condition-div" v-if="isVerified">
                <v-col cols="12">
                  <v-text-field
                    v-model="OTP"
                    :rules="OTPRules"
                    label="Enter OTP"
                    required
                  ></v-text-field>
                </v-col>
              </div>
              <div class="condition-div" v-else>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    v-model="pass"
                    :rules="passRules"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Confirm Password*"
                    v-model="pass2"
                    :rules="passTwoRules"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
              </div>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <p class="text-right custom">
        <v-btn nuxt small text color="black darken-1" to="">
          Resend
        </v-btn>
      </p>
      <p class="text-right custom">
        <v-btn nuxt small text color="orange darken-1" to="/auth/forgot">
          back
        </v-btn>
      </p>
      <v-card-actions class="mt-8 mx-auto">
        <!-- <v-spacer></v-spacer> -->
        <v-btn
          v-if="isVerified"
          color="orange darken-1"
          text
          class="mx-auto"
          @click="changeVerified"
          >Verify</v-btn
        >
        <v-btn
          v-else
          color="orange darken-1"
          text
          class="mx-auto"
          @click="submit"
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

      pass: '',
      pass2: '',
      passRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length <= 8) || 'Password must be less than 8 characters'
      ],
      passTwoRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length <= 8) || 'Password must be less than 8 characters',
        (v) => (v && this.checkMatch) || 'Passwords must match'
      ],
      OTP: '',
      OTPRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    changeVerified() {
      this.isVerified = false
    },

    summit() {
      if (this.$refs.form.validate()) {
        this.submitForm()
      }
    },

    submitForm() {
      let payload = {
        OTP: this.OTP,
        password: this.pass,
        confirmPassword: this.pass2
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
</style>

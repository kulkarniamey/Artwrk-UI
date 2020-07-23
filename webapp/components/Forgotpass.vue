<template>
  <div class="contain">
    <v-card elevation="3" class="card">
      <v-card-title>
        <span class="headline">Reset Password</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="userinfo.email"
                  :rules="emailRules"
                  label="E-mail*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
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
          nuxt
          to="/auth/reset"
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
        email: ''
      }
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

    async loginUser(userinfo) {
      try {
        let response = await this.$auth.loginWith('local', { data: userinfo })
        console.log(response)
      } catch (err) {
        console.log(err)
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

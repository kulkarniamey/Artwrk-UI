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
          (v && v.length <= 15) || 'Password must be less than 8 characters'
      ],

      usernameRules: [(v) => !!v || 'Username is required'],
      userinfo: {
        operation: 'sign_in',
        username: '',
        password: '',
        type: 'artist'
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

    async loginUser({ operation, username, password, type }) {
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            username: username,
            password: password,
            type: type,
            operation: operation
          }
        })
        if (response?.data?.statusCode === 409) {
          throw 'error!'
        }
        const token = response.data.token
        const userPayload = {
          operation: 'get_profile',
          authorizationToken: token
        }
        let user = await this.$axios.put('/profile/', userPayload)
        //console.log(user)
        this.$auth.setUser(user.data.profile)
      } catch (err) {
        console.log(err)
        console.log('Error hua')
        this.snackbar = true
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

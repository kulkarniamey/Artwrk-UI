<template>
  <v-card>
    <v-card-title>
      <span class="headline">Sign Up!</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <!-- <v-col cols="12"> {{ name }} </v-col> -->
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
          </v-row>
        </v-form>
      </v-container>
      <small>*indicates required field</small>
      <p class="text-lg-right">
        Already an User?<v-btn
          @click="changeOption"
          text
          color="orange darken-1"
        >
          Log in
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
        >Sign up</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
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
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    changeOption() {
      this.$emit('optionChanged')
    },
    validate() {
      this.$refs.form.validate()
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

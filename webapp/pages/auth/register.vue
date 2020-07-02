<template>
  <div>
    <v-row>
      <v-col cols="6"> <h2>Art is an explosion!</h2> </v-col>

      <v-col cols="6">
        <Register> </Register>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Register from '../../components/Register'

export default {
  name: 'registerPage',
  components: {
    Register
  },
  head() {
    title: 'Sign Up'
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <v-row>
      <v-col cols="6"> <h2>Art is an explosion!</h2> </v-col>

      <v-col cols="6">
        <Login> </Login>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from '../../components/Login'
export default {
  name: 'loginPage',
  components: {
    Login
  },
  head() {
    title: 'Log in'
  }
}
</script>

<style lang="scss" scoped></style>

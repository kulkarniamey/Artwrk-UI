<template>
  <div>
    <v-row>
      <v-col class="d-none d-sm-flex" cols="6">
        <h2>Art is an explosion!</h2>
      </v-col>

      <v-col xs="12" md="6" cols="12">
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

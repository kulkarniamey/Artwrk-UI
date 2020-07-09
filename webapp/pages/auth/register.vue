<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          class="d-none d-sm-flex"
          cols="6"
          min-height="600"
          max-width="450"
        >
          <h1 class="white--text legend-text">Art happens here.</h1>
        </v-col>

        <v-col xs="12" md="6" cols="12">
          <Register> </Register>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Register from '../../components/Register'

export default {
  layout: 'authlayout',
  name: 'registerPage',
  components: {
    Register
  },
  head() {
    title: 'Sign Up'
  }
}
</script>

<style lang="scss" scoped>
.legend-text {
  margin: auto;
  font-weight: 700;
  font-size: 4em;
}
</style>

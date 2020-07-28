<template>
  <div>
    <v-container>
      <v-btn nuxt to="/" fab dark color="indigo accent-4">
        <v-icon dark size="36" color="white">mdi-chevron-left</v-icon>
      </v-btn>
      <v-row>
        <v-col
          class="d-none d-sm-flex"
          cols="6"
          min-height="600"
          max-width="550"
        >
          <h1
            class="white--text legend-text mx-auto"
            min-height="600"
            max-width="550"
          >
            We Inspire an Artist to Aspire!
          </h1>
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
  font-size: 3.5em;
}
</style>

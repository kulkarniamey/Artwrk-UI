<template>
  <div>
    <v-container>
      <div class="flexdisplay">
        <v-btn nuxt to="/" fab dark color="indigo accent-4">
          <v-icon dark size="36" color="white">mdi-chevron-left</v-icon>
        </v-btn>
        <div class="flextext">
          <span class="art">
            Art
          </span>
          <span class="wrk">Wrk</span>
          <span class="dot">.</span>
        </div>
      </div>
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
          <Login> </Login>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Login from '../../components/Login'
export default {
  auth: 'guest',
  layout: 'authlayout',
  name: 'loginPage',
  components: {
    Login
  },
  head() {
    title: 'Log in'
  }
}
</script>

<style lang="css" scoped>
.legend-text {
  margin: auto;
  font-weight: 700;
  font-size: 3.5em;
}
.flexdisplay {
  display: flex;
  color: #fff;
  justify-content: flex-start;
}
.flextext {
  padding-left: 1em;
  font-size: 1.5em;
}
.art {
  font-weight: 100;
}
.wrk {
  font-weight: 700;
}
.dot {
  color: red;
  font-weight: 700;
  font-size: 1.5em;
}
</style>

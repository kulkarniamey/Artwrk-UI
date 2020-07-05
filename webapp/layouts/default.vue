<template>
  <v-app>
    <v-app-bar app color="indigo lighten-1" dense flat>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <img class="mr-3" :src="require('../assets/v.png')" height="40" />
      <v-toolbar-title>ArtWrk</v-toolbar-title>

      <v-spacer />

      <div v-if="$auth.loggedIn">
        <v-btn text large dark>Welcome {{ user }} </v-btn>
        <v-btn text @click="$auth.logout()" dark>Logout</v-btn>
      </div>

      <div v-else>
        <v-btn text to="/auth/login">Login</v-btn>

        <v-btn text to="/auth/testregi">Register</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer dark padless>
      <v-row justify="center" no-gutters>
        <v-col>
          <v-card flat tile class="indigo lighten-1 white--text text-center">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>ArtWrk</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Login from '../components/Login'

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ],

    state: false,
    user: undefined
  }),

  computed: {
    isLoggedIn: function() {
      return this.$auth.loggedIn
    },

    logOut: function() {
      this.$auth.logout()
    }
  },
  mounted() {
    this.user = this.$auth?.user?.name || null
  }
}
</script>
<style scoped>
.v-btn {
  height: 10px;
}
</style>

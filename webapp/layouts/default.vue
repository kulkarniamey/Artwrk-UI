<template>
  <v-app>
    <v-app-bar app color="indigo lighten-1" dense flat>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <nuxt-link to="/"
        ><img class="mr-3" :src="require('../assets/v.png')" height="40"
      /></nuxt-link>
      <v-toolbar-title>ArtWrk</v-toolbar-title>

      <section v-if="!state">
        <v-list-item>
          <v-btn fixed right text @click="signIn" dark>Sign In </v-btn>
        </v-list-item>
      </section>

      <section v-else>
        <v-list-item>
          <v-btn fixed right text @click="logOut" dark>Log Out </v-btn>
        </v-list-item>
      </section>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

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

    state: false
  }),

  methods: {
    signIn: function() {
      this.state = true
    },

    logOut: function() {
      this.state = false
      this.signIN
    }
  }
}
</script>
<style scoped>
.v-btn {
  height: 10px;
}
</style>

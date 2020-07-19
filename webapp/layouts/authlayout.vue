<template>
  <v-app>
    <v-main>
      <div class="authboard">
        <div class="auth-body">
          <nuxt />
        </div>
      </div>
    </v-main>
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

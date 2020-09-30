<template>
  <v-app>
    <v-main>
      <div class="surveyboard">
        <div class="auth-body">
          <nuxt />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
;(function(v, i, s, a) {
  if (!v._visaSettings) {
    v._visaSettings = {}
  }
  v._visaSettings['e4e3b3d9-0244-11eb-b589-901b0edac50a'] = {
    v: '0.3',
    s: 'e4e3b3d9-0244-11eb-b589-901b0edac50a',
    a: '1'
  }
  _v = i.getElementsByTagName('head')[0]
  _a = _v
  _i = i.createElement('script')
  _s = _i
  _s.defer = 'defer'
  _s.src = s + a + v._visaSettings['e4e3b3d9-0244-11eb-b589-901b0edac50a'].v
  _a.appendChild(_s)
})(
  window,
  document,
  '//app-worker.visitor-analytics.io/main',
  '.js?s=e4e3b3d9-0244-11eb-b589-901b0edac50a&v='
)
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

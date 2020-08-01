<template>
  <v-app>
    <div v-if="loading"> Loading...</div>
    <template v-else>
    <v-app-bar app color="#2b2b2b" dense flat dark>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <!-- <img class="mr-3" :src="require('../assets/v.png')" height="40" /> -->
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-0"
        ><nuxt-link to="/" class="text-decoration-none white--text">
          ArtWrk
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />
      <v-btn color="indigo accent-4" to="jobs" rounded> Jobs </v-btn>
      <v-btn icon to="/search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-arrow-all</v-icon>
      </v-btn>

      <div v-if="$auth.loggedIn">
        <!-- <v-btn icon dark @click="snackbar = true,messages=0" >
          <v-badge 
        :content="messages"
        :value="messages"
         color="green"
        overlap> 
        <v-icon >mdi-bell-outline</v-icon>    </v-badge>  
        </v-btn> -->

        <v-menu bottom offset-y transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :disabled="notifications.length === 0"
              dark
              icon
              class="ma-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-badge
                :content="notifications.length"
                :value="notifications.length"
                color="green"
                overlap
              >
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-subheader>Notifications</v-subheader>
              <v-divider></v-divider>

              <v-list-item v-for="(notification, i) in notifications" :key="i">
                <v-list-item-title>{{ notification.text }} </v-list-item-title>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text @click="menu = false">Approve</v-btn>
                  <v-btn color="primary" text @click="removeNotification(i)"
                    >Remove</v-btn
                  >
                </v-card-actions>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-btn nuxt to="/artist/pruthvi2" text large dark>Welcome {{ user }} </v-btn>
        <v-btn text @click="$auth.logout()" dark>Logout</v-btn>

        <!-- <v-Snackbars


 v-for="(notification,index) in notifications" v-model="snackbar" :key="index" right top color="indigo lighten-1" :timeout="timeout" >
    
      
               {{ notification.text }}
               <br>
               <v-btn light x-small > Approve</v-btn>
               <v-btn light x-small> Delete</v-btn>

              <template v-slot:action="{ attrs }">
                <v-btn   color=""   text    v-bind="attrs" @click="snackbar = false"  > Close  </v-btn>
              </template>
      </v-Snackbars> -->
      </div>

      <div v-else>
        <v-btn text to="/auth/login">Login</v-btn>

        <v-btn text to="/auth/register">Register</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <FooterComponent />
    </template>
  </v-app>
</template>

<script>
import Login from '../components/Login'
import FooterComponent from '../components/FooterComponent'

export default {
  props: {
    source: String
  },
  components: { FooterComponent },
  data: () => ({
    drawer: null,
    loading: true,
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
    messages: '4',
    snackbar: false,
    text: 'Hello I am New User',
    timeout: null,
    notifications: [
      {
        id: 1,
        text: 'This is first',
        status: 'unread'
      },
      {
        id: 2,
        text: 'This is second',
        status: 'unread'
      }
    ],
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
  methods: {
    removeNotification(index) {
      this.notifications.splice(index, 1)
      debugger
    },
    gotoProfile() {
      this.$router.push('artist/' + this.user)
    }
  },
  async created() {
    this.user = this.$auth?.user?.username || null
    const state = this.$auth.getToken('local')
    if (state !== false) {
      const token = state.replace('Bearer ', '')
      const userPayload = {
        operation: 'get_profile',
        authorizationToken: token
      }
      let user = await this.$axios.put('profile/', userPayload).then((user) => {
        console.log(user)
        this.$auth.setUser(user.data.profile)
        this.user = this.$auth?.user?.username || null
      })
    } else {
    }
    this.loading = false
    //console.log(state)
  }
}
</script>
<style scoped>
.v-btn {
  height: 10px;
}
.foot {
  display: flex;
}
</style>

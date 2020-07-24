<template>
  <v-app>
    <v-app-bar app dense dark flat>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <img class="mr-3" :src="require('../static/templogo.png')" height="25" />
      <v-toolbar-title>
        ArtWrk
      </v-toolbar-title>

      <v-spacer />

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

        <v-btn text large dark>Welcome {{ user }} </v-btn>
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

        <v-btn text to="/auth/testregi">Register</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer dark padless absolute class="foot">
      <v-row no-gutters>
        <v-col cols="6">
          <v-card>
            <v-card-text class="white--text text-left">
              &copy; {{ new Date().getFullYear() }} — <strong>ArtWrk</strong>
            </v-card-text>
          </v-card> </v-col
        ><v-col cols="6"
          ><v-card>
            <!-- <v-divider></v-divider> -->
            <v-card-text class="white--text text-right">
              <v-btn v-for="icon in icons" :key="icon" icon>
                <v-icon size="18px">{{ icon }}</v-icon>
              </v-btn>
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
.foot {
  display: flex;
}
</style>

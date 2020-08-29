<template>
  <v-app>
    <div v-if="loading">
      <SiteLoader />
    </div>
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
        <template v-if="!mobile">
          <div v-if="$auth.loggedIn">
            <v-btn color="indigo accent-4" to="/jobs" rounded> Jobs </v-btn>
          </div>
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

              <v-list-item v-for="(notification, i) in notifications" :key="i">
                <v-list-item-title>{{ notification.notification }} </v-list-item-title>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-list-item
                    v-for="(notification, i) in notifications"
                    :key="i"
                  >
                    <v-list-item-title
                      >{{ notification.text }}
                    </v-list-item-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text nuxt :to="notification.actionLink">{{
                        notification.actionText
                      }}</v-btn>
                      <v-btn color="primary" text @click="removeNotification(i)"
                        >Remove</v-btn
                      >
                    </v-card-actions>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>

            <v-btn nuxt :to="`/artist/` + user" text large dark
              >Welcome {{ user }}
            </v-btn>
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
        </template>
        <template v-if="mobile">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </template>
      </v-app-bar>
      <v-navigation-drawer
        v-if="drawer"
        v-model="drawer"
        bottom
        absolute
        temporary
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          class="d-flex"
        >
          <v-list-itm-group v-if="$auth.loggedIn">
            <v-list-item>
              <v-icon>mdi-account</v-icon>
              <v-btn
                class="justify-center"
                nuxt
                :to="`/artist/` + user"
                text
                large
                >Welcome {{ user }}
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-icon>mdi-logout</v-icon>
              <v-btn class="justify-center" text @click="$auth.logout()"
                >Logout</v-btn
              >
            </v-list-item>
          </v-list-itm-group>
          <v-list-itm-group v-else class="justify-center">
            <v-list-item>
              <v-icon>mdi-login</v-icon>
              <v-btn class="text-center" text to="/auth/login">Login</v-btn>
            </v-list-item>
            <v-list-item>
              <v-icon>mdi-login-variant</v-icon>
              <v-btn class="justify-center" text to="/auth/register"
                >Register</v-btn
              >
            </v-list-item>
          </v-list-itm-group>
        </v-list-item-group>
      </v-navigation-drawer>
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
import SiteLoader from '../components/SiteLoader'

export default {
  props: {
    source: String,
  },
  components: { FooterComponent, SiteLoader },
  data: () => ({
    drawer: false,
    loading: true,
    group: null,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/',
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire',
      },
    ],
    icons: [],

    state: false,
    width: 0,
    messages: '4',
    snackbar: false,
    text: 'Hello I am New User',
    timeout: null,
    notifications: [],
    user: undefined,
    
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$auth.loggedIn
    },

    logOut: function () {
      this.$auth.logout()
    },

    mobile() {
      if (this.width <= 720) {
        return true
      }

      return false
    },
  },
  methods: {
    removeNotification(index) {
      this.notifications.splice(index, 1)
    },
    gotoProfile() {
      this.$router.push('artist/' + this.user)
    },
    handleResize() {
      this.width = window.innerWidth
    },
  },
  async created() {
    
    this.user = this.$auth?.user?.username || null
    try {
      const state = this.$auth.getToken('local')
      if (state !== false) {
        const token = state.replace('Bearer ', '')
        const userPayload = {
          operation: 'get_profile',
          authorizationToken: token,
        }
        let user = await this.$axios
          .put('profile/', userPayload)
          .then((user) => {
            this.$auth.setUser(user.data.profile)
            this.user = this.$auth?.user?.username || null
            if (user?.data?.profile?.email_verfication === 'False') {
              this.notifications.push({
                notification: 'You have not yet verified your email',
                actionText: 'verify',
                actionLink: '/auth/verify',
              })
            }
          })
      } else {
      }
    } catch (err) {}
    this.loading = false
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    //console.log(state)

    const payload ={
          operation: "get_all_notifications",
          id: this.$auth?.user?.user_id,
          authorizationToken: this.$auth
        .getToken('local')
        .replace('Bearer ', '')

    }
    try{
    const response= await this.$axios.put(`https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/notifications`,payload);
    console.log(response.data.notifications);
    if (response.data.notifications){
      this.notifications= this.notifications.concat(response.data.notifications)
      debugger
      console.log(this.notifications)
            
      
    }
      }
    catch(err){
  console.log(err);
}


  },

  async getNotifications(){

      


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

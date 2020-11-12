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

          <v-btn icon>
            <v-icon>mdi-arrow-all</v-icon>
          </v-btn>

          <div v-if="$auth.loggedIn">
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
                  <v-list-item
                    v-for="(notification, i) in notifications"
                    :key="i"
                  >
                    <v-list-item-title
                      @click="linkNotification(notification.notification)"
                    >
                      <nuxt-link to="">
                        {{ notification.notification }}</nuxt-link
                      >
                    </v-list-item-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                    </v-card-actions>

                    <v-card-actions>
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
        right
        absolute
        temporary
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          class="d-flex"
        >
          <v-list-itm-group v-if="$auth.loggedIn" class="pa-3">
            <v-list-item>
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
                      <v-icon color="black">mdi-bell-outline</v-icon>
                    </v-badge>
                  </v-btn>
                </template>
                <v-card>
                  <v-list>
                    <v-list-item
                      v-for="(notification, i) in notifications"
                      :key="i"
                    >
                      <v-list-item-title
                        >{{ notification.notification }}
                      </v-list-item-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                      </v-card-actions>
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
                          <v-btn
                            color="primary"
                            text
                            @click="removeNotification(i)"
                            >Remove</v-btn
                          >
                        </v-card-actions>
                      </v-list-item>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
            </v-list-item>
            <!-- <v-list-item>
              <v-icon>mdi-account</v-icon>
              <v-btn
                class="justify-center"
                nuxt
                :to="`/artist/` + user"
                text
                large
                >Welcome {{ user }}
              </v-btn>
            </v-list-item> -->
            <v-list-item>
              <v-icon>mdi-logout</v-icon>
              <v-btn class="justify-center" text @click="$auth.logout()"
                >Logout</v-btn
              >
            </v-list-item>
          </v-list-itm-group>
          <v-list-itm-group v-else class="justify-center pa-3">
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

      <FooterComponent class="bottm-nav" />
    </template>
  </v-app>
</template>

<script>
import Login from '../components/Login'
import FooterComponent from '../components/FooterComponent'
import SiteLoader from '../components/SiteLoader'

export default {
  props: {
    source: String
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
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ],
    icons: [],

    state: false,
    width: 0,
    messages: '4',
    snackbar: false,
    text: 'Hello I am New User',
    timeout: null,
    notifications: [],
    user: undefined
  }),
  watch: {
    group() {
      this.drawer = false
    }
  },
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
    },
    gotoProfile() {
      this.$router.push('artist/' + this.user)
    },
    checkAdmin() {
      if (this.$auth?.user?.user_id === 'admin_admin') {
        return 'admin'
      } else {
        return this.$auth?.user?.user_id
      }
    },

    linkNotification(i) {
      console.log(i)
      console.log(i.substr(0, i.indexOf(' ')))
      if (this.$auth?.user?.user_id === 'admin_admin') {
        this.$router.push('/recruiter/' + i.substr(0, i.indexOf(' ')))
      } else if (this.$auth?.user?.type === 'recruiter') {
        this.$router.push('/artist/' + i.substr(0, i.indexOf(' ')))
      }
    }
  },
  async created() {
    this.user = this.$auth?.user?.username || null
    try {
      const state = await this.$auth.getToken('local')

      if (state !== false) {
        const token = state.replace('Bearer ', '')
        const userPayload = {
          operation: 'get_profile',
          authorizationToken: token
        }
        let user = await this.$axios
          .put(
            'https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/profile/',
            userPayload
          )
          .then((user) => {
            this.$auth.setUser(user.data.profile)
            this.user = this.$auth?.user?.username || null
            if (user?.data?.profile?.email_verfication === 'False') {
              this.notifications.push({
                notification: 'You have not yet verified your email',
                actionText: 'verify',
                actionLink: '/auth/verify'
              })
            }
          })
      } else {
      }
    } catch (err) {}
    this.loading = false
    //console.log(state)

    try {
      const payload = {
        operation: 'get_all_notifications',
        id: this.checkAdmin(),
        authorizationToken: this.$auth.getToken('local').replace('Bearer ', '')
      }

      try {
        const response = await this.$axios.put(
          `https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/notifications`,
          payload
        )
        // console.log(response.data.notifications);
        if (response.data.notifications) {
          this.notifications = this.notifications.concat(
            response.data.notifications
          )

          //console.log(this.notifications)
        }
      } catch (err) {
        console.log(err)
      }
    } catch (err) {}
  },
  mounted() {
    this.mobile = screen.width > 760 ? false : true
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
.bottm-nav {
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  padding-top: 3em;
}
</style>

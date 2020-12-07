<template>
  <v-footer dark padless :class="mobile ? null : 'show'">
    <v-row justify="center" no-gutters>
      <template v-if="mobile">
        <!-- <v-col cols="12">
          <v-card flat tile class="#2b2b2b white--text text-center">
            <v-card-text>
              <v-btn
                color="white"
                text
                rounded
                icon
                class="my-2 mx-5 foot-nav text-center"
              >
                <nuxt-link to="/" class="links"
                  ><v-icon size="24px">mdi-home</v-icon></nuxt-link
                >
              </v-btn>
              <v-btn
                color="white"
                text
                rounded
                icon
                class="my-2 mx-5 foot-nav text-center"
              >
                <nuxt-link to="/search" class="links"
                  ><v-icon size="24px">mdi-magnify</v-icon></nuxt-link
                >
              </v-btn>
              <v-btn
                color="white"
                text
                rounded
                icon
                class="my-2 mx-5 foot-nav text-center"
              >
                <nuxt-link :to="userLoginCheck" class="links"
                  ><v-icon size="24px">mdi-account</v-icon></nuxt-link
                >
              </v-btn>
            </v-card-text></v-card
          ></v-col
        > -->
        <v-bottom-navigation
          absolute
          hide-on-scroll
          horizontal
          scroll-target="#app"
        >
          <v-btn text>
            <nuxt-link to="/" class="links"
              ><v-icon size="24px">mdi-home</v-icon></nuxt-link
            >
          </v-btn>

          <v-btn text>
            <nuxt-link to="/search" class="links"
              ><v-icon size="24px">mdi-magnify</v-icon></nuxt-link
            >
          </v-btn>

          <v-btn text>
            <nuxt-link :to="userLoginCheck" class="links"
              ><v-icon size="24px">mdi-account</v-icon></nuxt-link
            >
          </v-btn>
        </v-bottom-navigation>
      </template>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      mobile: ''
    }
  },
  mounted() {
    this.mobile = screen.width > 760 ? false : true
  },
  computed: {
    userLoginCheck() {
      if (!this.$auth.loggedIn) {
        return '/auth/login'
      } else {
        return '/artist/me'
      }
    }
  }
}
</script>

<style lang="css" scoped>
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 0;
  width: 100%;
}
.links {
  color: #fff;
  text-decoration: none;
}
.show {
  display: none;
}
</style>

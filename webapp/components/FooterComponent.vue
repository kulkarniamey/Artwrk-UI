<template>
  <v-footer dark padless>
    <v-row justify="center" no-gutters>
      <template v-if="mobile">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          color="white"
          text
          rounded
          icon
          class="my-2 mx-5 foot-nav text-center"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </template>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-card flat tile class="#2b2b2b white--text text-center">
          <v-card-text>
            <v-btn
              v-for="link in links"
              :key="link"
              class="mx-1 white--text"
              icon
            >
              <v-icon size="12px">{{ link }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      mobile: '',
      icons: ['mdi-home', 'mdi-magnify', 'mdi-account'],
      links: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    }
  },
  mounted() {
    this.mobile = screen.width > 760 ? false : true
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
.foot-nav v-icon {
  margin: 0 auto;
}
</style>

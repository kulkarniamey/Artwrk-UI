<template>
  <div>
    <v-card class="mx-auto" flat tile>
      <v-img
        height="100%"
        src="https://www.apple.com/v/macbook-pro-13/c/images/overview/hero/hero_fallback__dvvrevq48jcm_medium.jpg"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-badge
              color="green"
              offset-x="20"
              icon="mdi-account-check-outline"
              offset-y="120"
            >
              <v-avatar class="profile" color="grey" size="120" tile>
                <v-img
                  class="avatar-logo"
                  src="data:image/png;base64,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"
                ></v-img>
              </v-avatar>
            </v-badge>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">Appuul</v-list-item-title>
                <v-list-item-subtitle>Microsoft's Rival</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

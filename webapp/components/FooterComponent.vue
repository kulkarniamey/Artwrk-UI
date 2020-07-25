<template>
    <v-footer dark padless class="foot"  >
      <v-row justify="center" no-gutters >
        <v-col>
          <v-card flat tile class="#2b2b2b white--text text-center">
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

            <!-- <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>ArtWrk</strong>
            </v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
</template>

<script>
    export default {
        data() {
            return{
                    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <v-container>
      <div class="flexdisplay">
        <v-btn nuxt to="/" fab dark color="indigo accent-4">
          <v-icon dark size="32" color="white">mdi-chevron-left</v-icon>
        </v-btn>
        <div class="flextext">
          <span class="art">
            Art
          </span>
          <span class="wrk">Wrk</span>
          <span class="dot">.</span>
        </div>
      </div>
      <v-row>
        <v-col
          class="d-none d-sm-flex"
          cols="6"
          min-height="600"
          max-width="500"
        >
          <h1
            class="white--text legend-text mx-auto"
            min-height="600"
            max-width="550"
          >
            We Inspire an Artist to Aspire!
          </h1>
        </v-col>
        <!-- /////////////////// Read More  //////////////////// -->
        <v-col xs="12" md="6" cols="12">
          <v-card
            elevation="9"
            min-height="400"
            max-width="500"
            class="mx-auto pa-3"
          >
            <v-card-title>
              <span class="headline"
                >What is

                <span class="art">
                  Art
                </span>
                <span class="wrk">Wrk</span>
                <span class="dot">.</span>
              </span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus soluta beatae pariatur amet eaque repudiandae sunt
                  atque! Eveniet quis exercitationem pariatur ipsam a, accusamus
                  magni, perferendis dolorem dicta quod asperiores. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Accusamus soluta
                  beatae pariatur amet eaque repudiandae sunt atque! Eveniet
                  quis exercitationem pariatur ipsam a, accusamus magni,
                  perferendis dolorem dicta quod asperiores.
                </p>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <!-- <v-spacer></v-spacer> -->

              <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    rounded
                    color="indigo accent-4"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Read More...
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar dark color="indigo accent-4">
                    <v-btn icon dark @click="dialog = !dialog">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>About Us</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-list three-line subheader>
                    <v-subheader>User Controls</v-subheader>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Content filtering</v-list-item-title>
                        <v-list-item-subtitle
                          >Set the content filtering level to restrict apps that
                          can be downloaded</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Password</v-list-item-title>
                        <v-list-item-subtitle
                          >Require password for purchase or use password to
                          restrict purchase</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <v-divider></v-divider>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'surveylayout',
  name: 'landing',
  data() {
    return { dialog: false }
  }
}
</script>

<style lang="css" scoped>
.legend-text {
  margin: auto;
  font-weight: 700;
  font-size: 3em;
}
.flexdisplay {
  display: flex;
  color: #fff;
  justify-content: flex-start;
  margin-bottom: 3.5em;
}
.flextext {
  padding-left: 1em;
  font-size: 1.5em;
}
.art {
  font-weight: 100;
}
.wrk {
  font-weight: 700;
}
.dot {
  color: red;
  font-weight: 700;
  font-size: 1.5em;
}
</style>

<template>
  <div>
    <v-btn text class="font-weight-bold mb-3"> Projects </v-btn>

    <v-menu bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          rounded
          color="indigo accent-4 mb-3"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Portfolio
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-dialog max-width="600" v-model="dialogOne">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">Resume</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline"
                >Resume <v-spacer /><v-btn icon>
                  <i><v-icon dark>mdi-pencil</v-icon></i>
                </v-btn></v-card-title
              >

              <v-card-text>You have not uploaded your Resume yet!</v-card-text>
              <v-img
                src="/information_flow.png"
                aspect-ratio="1.7"
                contain
              ></v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogOne = false"
                  >Close</v-btn
                >
                <v-btn color="blue darken-1" text @click="dialogOne = false"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item>
        <v-list-item>
          <v-dialog max-width="600" v-model="dialogTwo">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">Certificates</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline"
                >Certificates <v-spacer /><v-btn icon>
                  <i><v-icon dark>mdi-pencil</v-icon></i>
                </v-btn></v-card-title
              >

              <v-card-text
                >You have not uploaded any Certificates yet!</v-card-text
              >
              <v-img
                src="/data_processing.png"
                aspect-ratio="1.7"
                contain
              ></v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogTwo = false"
                  >Close</v-btn
                >
                <v-btn color="blue darken-1" text @click="dialogTwo = false"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item>
        <v-list-item>
          <v-dialog max-width="600" v-model="dialogThree">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">Awards & Recognition</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline"
                >Awards & Recognition <v-spacer /><v-btn icon>
                  <i><v-icon dark>mdi-pencil</v-icon></i>
                </v-btn></v-card-title
              >

              <v-card-text
                >You have not uploaded any Recognitions yet!</v-card-text
              >
              <v-img src="/chart.png" aspect-ratio="1.7" contain></v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogThree = false"
                  >Close</v-btn
                >
                <v-btn color="blue darken-1" text @click="dialogThree = false"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'PortfolioButton',
  data() {
    return {
      dialogOne: false,
      dialogTwo: false,
      dialogThree: false
    }
  }
}
</script>

<style lang="css" scoped></style>

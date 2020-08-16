<template>
  <div>
    <v-container>
      <div class="flexdisplay">
        <v-btn nuxt to="/" fab dark color="indigo accent-4">
          <v-icon dark size="36" color="white">mdi-chevron-left</v-icon>
        </v-btn>
        <div class="flextext">
          <!-- <span class="art">
            Art
          </span>
          <span class="wrk">Wrk</span>
          <span class="dot">.</span> -->
          <v-img src="/logo-white.png" max-height="120" max-width="120"></v-img>
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
            elevation="3"
            min-height="400"
            max-width="500"
            class="mx-auto pa-3"
          >
            <v-card-title class="flexdisplay-title">
              <span class="headline">What is </span>
              <v-img
                src="/logo-black.png"
                max-height="100"
                max-width="100"
              ></v-img>
            </v-card-title>
            <v-carousel
              :show-arrows="false"
              hide-delimiters
              height="200"
              cycle
              interval="3000"
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
            <v-card-text>
              <v-container>
                <p>
                  Our Mission: To create an economic opportunity for each and
                  every artist at home in India by providing a professional
                  community platform of "Showcase, Discover, Connect and Sell
                  Artwork" .
                </p>
                <p>
                  Excited to be a part of India's first Artist Community?<br />
                  We are coming soon!
                </p>
                <strong> Got 5 mins? </strong><br />
                <small>
                  Take a survey for us to make this experirnce even better for
                  you!
                </small>
              </v-container>
              <v-btn
                block
                rounded
                color="indigo accent-4"
                class="survey-btn"
                dark
                ><a href="https://forms.gle/v7XVnF3RH2hLHbxQ9" target="_blank"
                  >Take survey as an Artist</a
                ></v-btn
              >
              <v-btn
                block
                rounded
                color="indigo accent-4"
                class="survey-btn"
                dark
                ><a href="https://forms.gle/rCjgDrfiZP6F1c2c8" target="_blank"
                  >Take survey as a Recruiter</a
                ></v-btn
              >
            </v-card-text>
            <!-- About Us -->
            <v-card-title class="flexdisplay-title">
              <span class="headline">About </span>
              <v-img
                src="/logo-black.png"
                max-height="100"
                max-width="100"
              ></v-img>
            </v-card-title>
            <v-card-text>
              <v-container>
                <p>
                  Product Vision: Initially our aim is to provide artists a
                  platform where they would create their portfolio and connect
                  to the recruiters of their industry.The community would be
                  following guidelines and artist score metric so as to
                  hand-pick the exacting artists for the industry.
                </p>
              </v-container>
            </v-card-text>
            <!-- Read More Button -->
            <v-card-actions>
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
                  <h3 class="pa-4">We Inspire an Artist to Aspire</h3>

                  <p class="px-4 align">
                    A responsive and modular web application which would act as
                    a multi-functional social networking, recruitment driven
                    community for all types of artists including media and
                    entertainment related people.
                  </p>
                  <p class="px-4">
                    This product would be a platform for all forms of artists
                    who can <br />
                    1) Create their own portfolio <br />
                    2) Maintain their art timeline <br />
                    3) Be seen by the right people of the industry <br />
                    4) Apply for job opportunities <br />
                    5) Monetize their art by selling personal product
                    merchandise and prints online.
                  </p>
                  <p class="px-4 align">
                    Taking advantage of these features of the application and by
                    being part of this huge community of artists would help each
                    and every artist to grow and thrive as an artist. The
                    Community would be scrupulous and is to be followed by some
                    guidelines like only writers can write a post and other
                    artists such as photographers, media and entertainment
                    artists could only post photos and videos on the community
                    and much more for different types of artists.
                  </p>
                  <v-divider></v-divider>
                  <div class="pa-6">
                    <strong> Got 5 mins? </strong><br />
                    <small>
                      Take a survey for us to make this experirnce even better
                      for you!
                    </small>
                    <br />
                    <v-btn
                      rounded
                      block
                      color="indigo accent-4"
                      class="survey-btn"
                      dark
                      ><a
                        href="https://forms.gle/v7XVnF3RH2hLHbxQ9"
                        target="_blank"
                        >Take survey as an Artist</a
                      ></v-btn
                    >
                    <v-btn
                      rounded
                      block
                      color="indigo accent-4"
                      class="survey-btn"
                      dark
                      ><a
                        href="https://forms.gle/rCjgDrfiZP6F1c2c8"
                        target="_blank"
                        >Take survey as a Recruiter</a
                      ></v-btn
                    >
                  </div>
                  <v-divider></v-divider>
                  <h4 class="px-4">FEATURES:</h4>
                  <br />
                  <p class="px-4 align">
                    1) COMMUNITY- A platform for the artists for professional
                    networking, discovering and showcasing their
                    artwork.Discover and nourish your artist network. <br />
                    <br />
                    2) MARKETPLACE- Artwrk application supports local artists
                    and provides a feature to create and sell their own artwork
                    as a personal merchandise-which helps to create an economic
                    opportunity for non-digital media artists such as
                    photographers, painters, graphic designers and many more.
                    <br />
                    <br />
                    3) POST A JOB- feature that will help recruiters to post a
                    job opening for the respective industry. <br />
                    <br />
                    4) APPLY FOR A JOB- feature that will help artists to stay
                    updated about the job openings posted by recruiter companies
                    and also apply for the jobs online. <br />
                    <br />
                    5) ARTIST SCORE -This is the most important and distinctive
                    feature of the application which is used to perform most of
                    the analysis and flow of the application.This feature will
                    help in matching perfect requirements of the candidate
                    (based on tools, skills, work-ex, etc. Demanded by
                    recruiter). <br />
                    There are four steps used to critique a work of art: <br />
                    1. Look at the obvious. <br />
                    2. Analyze the artwork. <br />
                    3. Decide on an interpretation. <br />
                    4. Make a judgment call and Rate the Artwork. <br />
                    <br />
                    6) PORTFOLIO - feature in the web application where artists
                    can create and maintain their portfolio, which is seen by
                    the right persons of their industry. <br />
                    <br />
                    7) TIMELINE - feature in the application that helps artists
                    to maintain their artwork details in graphical visual, which
                    helps them to track the artworks in the future. <br />
                    <br />
                    8) PROFILE- feature that helps artists to maintain their
                    resume, certificates, skill tags and employer history.<br />
                    <br />
                    9) POST AN ADVERTISEMENT- feature where artists can post an
                    advertisement for collaboration. <br />
                    <br />
                  </p>
                </v-card>
              </v-dialog>
              <v-spacer />
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-1"
                color="blue lighten-1"
                icon
              >
                <v-icon right size="18">{{ icon }}</v-icon>
              </v-btn>
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
    return {
      dialog: false,
      items: [
        {
          src: '/landingcarousel/community.png'
        },
        {
          src: '/landingcarousel/recruiter.png'
        },
        {
          src: '/landingcarousel/artistscore.png'
        },
        {
          src: '/landingcarousel/timeline.jpg'
        }
      ],
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    }
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
  align-items: center;
  margin-bottom: 1.5em;
}
.flexdisplay-title {
  display: flex;
  flex-flow: inline;
  justify-content: flex-start;
  align-items: center;
}
.headline {
  padding-right: 0.2em;
}
.align {
  text-align: justify;
  text-indent: 1em;
}
.flextext {
  padding-left: 1em;
  font-size: 1.5em;
}

.art {
  font-weight: 700;
}
.wrk {
  font-weight: 100;
}
.dot {
  color: red;
  font-weight: 700;
  font-size: 1.5em;
}
.survey-btn {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
</style>

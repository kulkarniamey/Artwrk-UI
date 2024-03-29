<template>
  <div>
    <template v-if="!mobile">
      <v-row>
        <v-col cols="12">
          <CoverPic :profileData="profile" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="profile-card">
          <ArtistProfileCardComponent :profileData="profile" />
        </v-col>
        <v-col cols="9" class="profile-content">
          <v-row>
            <v-col cols="4">
              <PortfolioButton />
            </v-col>
            <v-col cols="4">
              <v-dialog max-width="600" v-model="dialog" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    rounded
                    color="indigo accent-4 mb-3"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Upload Post
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    Post Details
                  </v-card-title>
                  <v-card-text>
                    <v-form class="px-3">
                      <v-text-field label="Description" v-model="desc">
                      </v-text-field>
                      <v-file-input
                        prepend-icon="mdi-camera"
                        label="File input"
                        @change="handleFile"
                      ></v-file-input>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                          >Close</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="createPost"
                          >Save</v-btn
                        >
                      </v-card-actions>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <imageGrid />
        </v-col>
      </v-row>
    </template>
    <template v-if="mobile">
      <v-row>
        <v-col cols="12" sm="10">
          <CoverPic :profileData="profile" />
        </v-col>
      </v-row>
      <v-tabs
        centered
        background-color="white"
        color="deep-purple accent-4"
        class="tabs-control"
      >
        <v-tab>Bio </v-tab>
        <v-tab>Projects </v-tab>
        <v-tab>Portfolio </v-tab>
        <v-tab-item>
          <v-row class="test">
            <v-col cols="12" sm="10" class="mobile-card--padding">
              <ArtistProfileCardComponent :profileData="profile" />
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <v-row align-content="center">
            <v-col cols="12" sm="10">
              <v-dialog max-width="300" v-model="dialog" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    rounded
                    color="indigo accent-4 mb-3"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Upload Post
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    Post Details
                  </v-card-title>
                  <v-card-text>
                    <v-form class="px-3">
                      <v-text-field label="Description" v-model="desc">
                      </v-text-field>
                      <v-file-input
                        prepend-icon="mdi-camera"
                        label="File input"
                        @change="handleFile"
                      ></v-file-input>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                          >Close</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="createPost"
                          >Save</v-btn
                        >
                      </v-card-actions>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col cols="12" sm="10" class="">
              <imageGrid />
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <v-row>
            <v-col cols="12" sm="10" class="profile-content">
              <PortfolioButton />
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </template>
  </div>
</template>

<script>
import CoverPic from '../../components/CoverPic'
import ArtistProfileCardComponent from '../../components/ArtistProfileCardComponent'
import imageGrid from '../../components/ImageGrid'
import PortfolioButton from '../../components/PortfolioButton'
export default {
  value: '_id',
  middleware: 'auth',
  components: {
    CoverPic,
    imageGrid,
    ArtistProfileCardComponent,
    PortfolioButton,
  },
  data() {
    return {
      user: '',
      dialog: false,
      profile: {
        user_id: '',
        username: '',
        artist_score: 0,
        awards_recognition: [],
        current_employer: '',
        education_history: [],
        email_verfication: '',
        employer_history: [],
        facebook_link: '',
        followers: [],
        following: [],
        name: '',
        type: '',
        skill_tags: [],
        twitter_link: '',
        certificates: [],
        applied_jobs: [],
        email: '',
        artist_type: null,
      },
      width: 0,
      desc: '',
      fileData: undefined,
      postData: [],
    }
  },
  async created() {
    this.profile = this.$auth.user
    console.log(this.profile)

    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    const payload = {
      operation: 'get_posts_by_user',
      id: this.profile.user_id,
    }
    const response = await this.$axios.put(
      'https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/posts',
      payload
    )
    this.postData = response
    console.log(this.postData)
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.width = window.innerWidth
    },
    handleFile(file) {
      this.fileData = file
    },

    async createPost() {
      const state = this.$auth.getToken('local')
      const token = state.replace('Bearer ', '')
      let formData = new FormData()
      formData.append('file', this.fileData)
      const fname = this.fileData.name
      const id = this.profile.user_id
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorizationToken: token,
          'x-amz-meta-upload': JSON.stringify({
            User_Id: id,
            type: 'post',
            description: this.desc,
          }),
        },
      }
      try {
        let response = await this.$axios
          .put(
            `https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/upload/${id}/post/${this.desc}`,
            formData,
            config
          )
          .then((resp) => {
            console.log(resp)
          })
      } catch (err) {
        console.log(err)
      }
    },
  },
  computed: {
    mobile() {
      if (this.width <= 960) {
        return true
      }

      return false
    },
  },
}
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .col-xl,
  .col-xl-auto,
  .col-xl-12,
  .col-xl-11,
  .col-xl-10,
  .col-xl-9,
  .col-xl-8,
  .col-xl-7,
  .col-xl-6,
  .col-xl-5,
  .col-xl-4,
  .col-xl-3,
  .col-xl-2,
  .col-xl-1,
  .col-lg,
  .col-lg-auto,
  .col-lg-12,
  .col-lg-11,
  .col-lg-10,
  .col-lg-9,
  .col-lg-8,
  .col-lg-7,
  .col-lg-6,
  .col-lg-5,
  .col-lg-4,
  .col-lg-3,
  .col-lg-2,
  .col-lg-1,
  .col-md,
  .col-md-auto,
  .col-md-12,
  .col-md-11,
  .col-md-10,
  .col-md-9,
  .col-md-8,
  .col-md-7,
  .col-md-6,
  .col-md-5,
  .col-md-4,
  .col-md-3,
  .col-md-2,
  .col-md-1,
  .col-sm,
  .col-sm-auto,
  .col-sm-12,
  .col-sm-11,
  .col-sm-10,
  .col-sm-9,
  .col-sm-8,
  .col-sm-7,
  .col-sm-6,
  .col-sm-5,
  .col-sm-4,
  .col-sm-3,
  .col-sm-2,
  .col-sm-1,
  .col,
  .col-auto,
  .col-12,
  .col-11,
  .col-10,
  .col-9,
  .col-8,
  .col-7,
  .col-6,
  .col-5,
  .col-4,
  .col-3,
  .col-2,
  .col-1 {
    width: 100%;
    padding: 0;
  }

  .row {
    margin-right: 0;
  }

  .test {
    max-width: 100%;
  }
}
.profile-content {
  margin-top: 12em;
  padding: 0 5em;
}
.profile-card {
  padding: 3em;
}

.tabs-control {
  margin-top: 10em;
}
</style>

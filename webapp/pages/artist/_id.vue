<template>
  <div class="grid-container">
    <CoverPic :profileData="profile" id="cover" />
    <v-dialog
      v-model="dialog1"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          id="mobile-bio"
          class="white--text"
          rounded
          block
          color="indigo accent-4"
          v-bind="attrs"
          v-on="on"
        >
          About me
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Bio</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog1 = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <ArtistProfileCardComponent :profileData="profile" />
      </v-card>
    </v-dialog>
    <ArtistProfileCardComponent :profileData="profile" id="bio" />

   
      

 <div v-if="isUserSelf" id="portfolioBtn">

<v-btn text class="font-weight-bold mb-3 section-tab"  :class="isPostsSelected?'active':''" @click="selectPostsSection" > Projects </v-btn>
<v-btn text class="font-weight-bold mb-3 section-tab " :class="!isPostsSelected?'active':''" @click="selectTimelineSection"> Timeline </v-btn>

      <PortfolioButton :profile="profile" id="" />
      
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
          <v-card-title> Post Details </v-card-title>
          <v-card-text>
            <v-form class="px-3">
              <v-text-field label="Post Title" v-model="title"> </v-text-field>
              <v-text-field label="Description" v-model="desc"> </v-text-field>
              <v-file-input
                prepend-icon="mdi-camera"
                label="File input"
                @change="handleFile"
              ></v-file-input>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false"
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
    </div>
   <div id="posts">
      <timeline v-if="!isPostsSelected"/>
      <div v-else >
      <ImageGrid v-if="!isPostsNull" :postData="postData.posts" />
      
</div>
            
      
    

  </div>
  </div>
</template>

<script>
import CoverPic from '../../components/CoverPic'
import ArtistProfileCardComponent from '../../components/ArtistProfileCardComponent'
import ImageGrid from '../../components/ImageGrid'
import PortfolioButton from '../../components/PortfolioButton'
import timeline from '../../components/timeline'
export default {
  value: '_id',
  middleware: 'auth',
  components: {
    CoverPic,
    ImageGrid,
    ArtistProfileCardComponent,
    PortfolioButton,
    timeline
  },
  data() {
    return {
     
      user: '',
      isPostsNull: true,
      dialog: false,
      dialog1: false,
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
        artist_type: null
      },
      width: 0,
      title: '',
      desc: '',
      fileData: undefined,
      postData: [],
      isPostsSelected: true,
     
    }
  },
  async mounted() {
    const artistId = `artist_${this.$route.params.id}`
    try {
      const payload = {
        operation: 'get_profile',
        user_id: artistId
      }
      const resp = await this.$axios.put(
        'https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/profile/',
        payload
      )
      this.profile = resp.data.profile
    } catch (error) {
      console.log(error)
    }

    console.log(this.profile)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.fetchPosts()
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {

    selectPostsSection(){
      
      this.isPostsSelected = true
      return(this.isPostsSelected)
    },
    selectTimelineSection(){
      
      this.isPostsSelected = false
      return(this.isPostsSelected)
    },

    handleResize() {
      this.width = window.innerWidth
    },
    handleFile(file) {
      this.fileData = file
    },
    async fetchPosts() {
      const payload = {
        operation: 'get_posts_by_user',
        id: this.profile.user_id
      }
      const response = await this.$axios.put(
        'https://cuwewf4fsg.execute-api.ap-south-1.amazonaws.com/artwrkInit/posts',
        payload
      )
      this.postData = response.data
      console.log(this.postData?.posts?.length)
      if (this.postData?.posts?.length) {
        this.isPostsNull = false
      } else {
        this.isPostsNull = true
      }

      console.log(this.postData)
    },
    async createPost() {
      const state = this.$auth.getToken('local')
      const token = state.replace('Bearer ', '')
      let formData = new FormData()
      formData.append('file', this.fileData)
      const fname = this.fileData.name
      const id = this.profile.user_id
      const a = new Date()
      const time =
        a.getHours() +
        ':' +
        a.getMinutes() +
        ':' +
        a.getSeconds() +
        ':' +
        a.getMilliseconds()
      const date = a.getDate() + '/' + a.getMonth() + '/' + a.getFullYear()
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorizationToken: token,
          metadata: JSON.stringify({
            user_id: id,
            upload_type: 'post',
            title: this.title,
            description: this.desc,
            filename: fname + '_' + time,
            date_time: date + '_' + time
          })
        }
      }
      try {
        let response = await this.$axios
          .put(`uploadcontent`, formData, config)
          .then((resp) => {
            console.log(resp)
          })
      } catch (err) {
        console.log(err)
      } finally {
        this.dialog = false
        this.fetchPosts()
      }
    }
  },
  computed: {
    mobile() {
      if (this.width <= 960) {
        return true
      }

      return false
    },
    isUserSelf() {
      if (this.profile?.user_id === this.$auth?.user?.user_id) {
        return true
      }
      return false
    }
  }
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
.active{
  border-bottom: 1px solid black;
}

.grid-container {
  /* height: 100vh; */
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 1fr 7fr;
  grid-template-areas:
    'coverpic coverpic coverpic'
    'artistCard portfolio protfolio'
    'artistCard imageGrid imageGrid';
  gap: 12px;
}

#cover {
  grid-area: coverpic;
}
#bio {
  grid-area: artistCard;
}

#portfolioBtn {
  grid-area: portfolio;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-self: center;
  gap: 12px;
}
#upload {
  grid-area: uploadpic;
}
#posts {
  grid-area: imageGrid;
}
#mobile-bio {
  display: none;
}

@media screen and (max-width: 760px) {
  .grid-container {
    /* height: 100vh; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 1fr;
    grid-template-areas:
      'coverpic'
      'mobilebio'
      'portfolio'
      'imageGrid';
    gap: 12px;
    max-width: 100%;
  }
  #bio {
    display: none;
  }
  #mobile-bio {
    display: block;
  }
  #portfolioBtn {
    grid-area: portfolio;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
}
</style>

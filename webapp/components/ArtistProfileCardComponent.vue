<template>
  <v-card class="mx-auto my-12 tile" min-width="374">
    <v-card-actions class="pt-10">
      <div v-if="!isSelf">
      <v-btn mx-auto rounded color="indigo accent-4" dark> Connect</v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-list-item-title class="font-weight-bold pl-5"
        >Connections {{ profile.followers.length }}  </v-list-item-title  >
        
      <v-spacer />
      

      <v-btn v-if="isSelf" small v-on:click="editContent" icon>
        <artistProfileEdit :profileData="profile" />

        <i v-show="isEditing"><v-icon dark>mdi-content-save</v-icon></i>
      </v-btn>
    </v-card-actions>

    <v-list-item-content>
      <v-list-item-title class="font-weight-black pl-5 pt-10">{{
        profile.text
      }}</v-list-item-title>
      <v-list-item-title class="font-weight-black pl-3 pt-3"
        ><v-icon large> mdi-map-marker</v-icon> {{ profile.address }}
      </v-list-item-title>
    </v-list-item-content>
    <div>
      <div class="display-2 pl-15 pt-5 font-weight-black">Artist Score</div>
      <div class="display-2 pt-5 text-center font-weight-black">
        {{ profile.artist_score }}
      </div>
    </div>
    <v-list-item-title class="font-weight-black pl-5 pt-10"
      >Skillset</v-list-item-title
    >
    <v-list-item-content class="font-weight-black pl-5 ">
      <Skillset :skillData="profile.skill_tags" :isEdit="false" />
    </v-list-item-content>

    <v-list-item-title class="font-weight-black pl-5 pb-10"
      >Contact <br />
      <span class="social-link  pb-10" v-if="profile.twitter_link"
        ><a :href="profile.twitter_link" target="_blank"> Twiiter </a></span
      >
      <span class="social-link pl-5 pb-10" v-if="profile.facebook_link"
        ><a :href="`//` + profile.facebook_link" target="_blank">
          Facebook
        </a></span
      ><br />
      Email- {{ profile.email }}
    </v-list-item-title>
  </v-card>
</template>

<script>
import ArtistProfileEdit from '../components/ArtistProfileEdit'
import Skillset from '../components/Skillset'
export default {
  name: 'ArtistProfileCardComponent',
  components: {
    ArtistProfileEdit,
    Skillset
  },
  data: () => ({
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
    isSelf:false,
    isEditing: false
  }),
  computed: {},
  created() {
        this.profile = this.profileData,
        this.$nuxt.$on('save-profile', (newProfile) => {
        this.profile = newProfile
      
    });
    
    this.isSelf = this.$router?.currentRoute?.params?.id ===  this.profileData.username
    debugger
  },
  props: { profileData: { type: Object } },

  methods: {
    editContent: function editContent() {
      if (!this.isEditing) {
        this.isEditing = !this.isEditing
      } else {
        this.isEditing = !this.isEditing
      }
    }
  }
}
</script>

<style scoped>
.social-link a {
  text-decoration: none;
  cursor: pointer;
  color: black;
}
</style>

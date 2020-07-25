<template>
  <v-card class="mx-auto my-12 tile" min-width="374">
    <v-card-actions class="pt-10">
      <v-btn mx-auto rounded color="indigo accent-4" dark> Connect</v-btn>
      <v-spacer></v-spacer>
      <v-list-item-title class="font-weight-bold pl-5 "
        >Connections {{ profile.connections }}</v-list-item-title
      >
      <v-spacer />

      <v-btn small v-on:click="editContent" icon>
        <artistProfileEdit :profileData="profile" :event-bus="eventBus" />

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
        {{ profile.artistScore }}
      </div>
    </div>
    <v-list-item-title class="font-weight-black pl-5 pt-10"
      >Skillset</v-list-item-title
    >
    <v-list-item-content class="font-weight-black pl-5 pt-10">
      <Skillset
        :skillData="profile.skillset"
        :event-bus="eventBus"
        :isEdit="false"
      />
    </v-list-item-content>

    <v-list-item-title class="font-weight-black pl-5 pb-10"
      >Contact <br />
      Email-{{ profile.email }}
    </v-list-item-title>
  </v-card>
</template>

<script>
import ArtistProfileEdit from '../components/ArtistProfileEdit'
import Skillset from '../components/Skillset'
export default {
  name: 'ArtistProfileCard',
  components: {
    ArtistProfileEdit,
    Skillset
  },
  data: () => ({
    profile: {
      text: "Hi! I'm an UI/UX Designer based in India. ",
      address: 'Pune, India',
      artistScore: '1253',
      connections: '1.2k',
      email: 'abc@xyz.com',
      skillset: ['Photoshop', 'Illustrator']
    },
    isEditing: false
  }),
  computed: {
    eventBus() {
      return this
    }
  },
  created() {
    this.eventBus.$on('save-profile', (newProfile) => {
      this.profile = newProfile
    })
  },

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

<style></style>

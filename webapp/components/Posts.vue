<template>
  <div>
    <div id="gird-container">
      <div class="row1">
        <v-avatar color="indigo" size="48"
          ><v-icon v-if="!profile.profile_pic" dark size="40"
            >mdi-account</v-icon
          >
          <v-img v-else :src="profile.profile_pic"></v-img>
        </v-avatar>
        <h3>
          <nuxt-link :to="`/artist/` + profile.username">{{
            profile.username
          }}</nuxt-link>
        </h3>
      </div>
      <h1 class="row2">{{ postData.title }}</h1>
      <v-img class="row3" :src="postData.url"></v-img>
      <span class="row4">Upvote and rate</span>
      <p class="row5">
        {{ postData.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data() {
    return {
      loading: false
    }
  },
  props: {
    postData: { type: Object },
    profile: { type: Object }
  }
}
</script>

<style lang="css" scoped>
#gird-container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 0.3fr 0.5fr 6fr 0.5fr 2fr;
  grid-template-areas:
    'artistInfo'
    'postTitle'
    'post'
    'upvote'
    'postDesc';
}

.row1 {
  grid-area: artistInfo;
  justify-self: left;
  display: flex;
  align-items: center;
}
.row1 h3 {
  margin-left: 1em;

  cursor: pointer;
}
a {
  color: #000;
  text-decoration: none;
}
.row2 {
  grid-area: postTitle;
  justify-self: center;
}
.row3 {
  grid-area: post;
  justify-self: center;
}
.row4 {
  grid-area: upvote;
  justify-self: center;
}
.row5 {
  grid-area: postDesc;
  justify-self: center;
}
</style>

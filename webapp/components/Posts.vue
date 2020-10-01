<template>
  <div>
    <div id="gird-container">
      <v-avatar color="indigo" size="64" class="row1"
        ><v-icon size="40">mdi-account</v-icon>
      </v-avatar>
      <h3 class=" row1">Name</h3>

      <h1 class="row2">Post Name</h1>
      <v-img
        class="row3"
        src="https://images.unsplash.com/photo-1601221948541-43641bf493a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      ></v-img>
      <span class="row4">Upvote and rate</span>
      <p class="row5">
        Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquid totam obcaecati repudiandae quos! Modi quod amet doloribus aut
        at ullam dolor fuga, odit magnam necessitatibus esse saepe itaque
        obcaecati iste.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts'
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

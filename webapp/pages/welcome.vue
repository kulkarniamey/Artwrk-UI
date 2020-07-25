<template>
  <div>
    <section class="bg-container">
      <div class="hero-text-div text-justify">
        <h1 class="hero-text white--text pa-2 font-weight-bold">
          Welcome to ArtWrk!
        </h1>
        <h3 class="white--text font-weight-regular pa-2" subtitle-1>
          A responsive and modular web application which would act as a
          multi-functional social networking, recruitment driven community for
          all types of artists including media and entertainment related people.
        </h3>
        <v-btn
          color="white lighten-1"
          absolute
          right
          rounded
          nuxt
          to="../pages/auth/register.vue"
          class="pa-3"
        >
          <h4 class=" font-weight-regular pa-1">Join Us Now!</h4>
        </v-btn>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'welcome'
}
</script>

<style lang="css" scoped>
.bg-container {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../static/welcome.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 100vh;
}
.hero-text-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
}
.hero-text {
  font-size: 4em;
}
</style>

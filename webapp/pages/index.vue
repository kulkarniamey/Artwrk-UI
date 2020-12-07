<template>
  <div>
    <section class="bg-container">
      <div class="hero-text-div ">
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
          rounded
          nuxt
          to="/auth/register"
          class="pa-3 join-btn"
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.hero-text-div {
  margin: 0 2em;
}
.hero-text {
  font-size: 2em;
  text-align: left;
}

.join-btn {
  float: right;
}

/* Mobile view css */
@media screen and (min-width: 768px) {
  .hero-text {
    font-size: 4em;
  }
  .hero-text-div {
    margin: 0 20em;
  }
}
</style>

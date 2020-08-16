<template>
  <div>
    <section class="bg-container" :style="image">
      <div class="hero-text-div">
        <h1 class="hero-text white pa-2">
          We are <span class="white--text red pa-3">Coming Soon!</span>
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'comingsoon',
  data() {
    return {
      image: { backgroundImage: 'url(https://source.unsplash.com/random)' }
    }
  },
  mounted() {
    const profile = this.$auth.user
    if(profile?.type=== 'admin'){ this.$router.push('')}
    else{
    if (profile?.name === null) {
      console.log(this.$auth.user);
      this.$router.push('onboarding/')
    }

    }
  }
}
</script>

<style lang="css" scoped>
.bg-container {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.hero-text-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero-text {
  font-size: 4em;
}
</style>

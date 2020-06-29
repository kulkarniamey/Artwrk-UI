<template>
  <div>
    <div class="text-center cover">
      <v-avatar color="indigo" size="63"
        ><span class="white--text headline">UN</span></v-avatar
      >
      <h3 class="">Username</h3>
      <p class="">Name</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverPic'
}
</script>

<style lang="scss" scoped>
.cover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('../assets/art-backlight-blur-249203.jpg');
  background-position: center;
  background-size: cover;

  padding: 1rem 0;
  width: 100%;
  height: 20vh;

  position: absolute;
  left: 0;
  top: 0;
}
</style>

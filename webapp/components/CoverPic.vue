<template>
  <div>
    <div class="text-center cover">
      <v-container class="" fluid>Username</v-container>
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

  padding: 0;
  width: 100%;
  height: 10vh;
  position: absolute;
  left: 0;
  top: 0;
}
</style>

<template>
  <v-app dark>
    <div v-if="isError">
      <div class="bg">
        <div class="content">
          <h1 class=" custom-size-h1">
            404
          </h1>
          <h2 class="text-h5 font-weight-regular">
            Looks like you stumbled upon a wrong art!
          </h2>
          <h2 class="text-h5 font-weight-regular">
            We make no mistakes just happy little accidents.<br />
            <h2 class="text-h5 text-right font-weight-regular">-bob ross.</h2>
          </h2>
          <v-btn class="ma-2" dark tile @click="goBack" color="#0000ff">
            <v-icon left>mdi-arrow-left</v-icon>Home page
          </v-btn>
        </div>
      </div>
    </div>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      isError: true
    }
  },
  methods: {
    goBack() {
      this.isError = false
      this.$router.push('/comingsoon')
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  mounted() {
    this.isError = true
  }
}
</script>

<style scoped>
.bg {
  background-image: url('/svgg.svg');
  height: 100vh;
  background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: cover;
  overflow: hidden;
}

.custom-size-h1 {
  font-size: 18em;
  color: #0000ff;
  font-weight: 700;
}

.content {
  position: absolute;
  top: 25%;
  left: 25%;
  transform: translate(-30%, -30%);
}
</style>

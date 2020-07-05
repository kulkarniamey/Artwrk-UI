<template>
  <div>
    <h1>Welcome! {{ user }}</h1>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  name: 'welcome',
  head() {
    title: 'Welcome page'
  },
  data() {
    return {
      user: undefined
    }
  },
  mounted() {
    this.user = this.$auth.user.name
  }
}
</script>

<style lang="scss" scoped></style>

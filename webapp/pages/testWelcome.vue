<template>
  <div>
    <h1>Welcome!</h1>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  name: 'Welcome page',
  head() {
    title: 'Welcome page'
  },
}
</script>

<style lang="scss" scoped></style>

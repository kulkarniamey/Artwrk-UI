<template>
  <div>
    <CreatePost />
  </div>
</template>

<script>
import CreatePost from '../components/CreatePost'

export default {
  middleware: 'auth',
  name: 'createpost',
  head() {
    title: 'Post your project'
  },
  components: {
    CreatePost
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

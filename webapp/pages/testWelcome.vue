<template>
  <div>
    <SearchBar> </SearchBar>
    <h1>Welcome! {{ user }}</h1>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
export default {
  middleware: 'auth',
  name: 'welcome',
  components:{SearchBar},
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

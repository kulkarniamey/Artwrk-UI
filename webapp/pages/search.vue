<template>
  <div class="mt-10">
    <SearchBar > </SearchBar>
    
  <div>
    <artistonboardingform />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
import artistonboardingform from '../components/Onboarding/artistonboardform'

export default {
  middleware: 'auth',
  name: 'welcome',
  components:{SearchBar},
  head() {
    title: 'Welcome page'
  },
  components: {
    artistonboardingform
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

<template>
  <div>
    <div class="mt-10">
      <SearchBar> </SearchBar>
    </div>
    <div>
      <artistonboardingform :profileData="getProfile"/>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
import artistonboardingform from '../components/Onboarding/artistonboardform'

export default {
  middleware: 'auth',
  name: 'welcome',
  components: { SearchBar },
  head() {
    title: 'Welcome page'
  },
  components: {
    artistonboardingform
  },
  data() {
    return {
      user: undefined,
      profile: {}
    }
  },
  computed: {
    getProfile() {
      return this.profile
    }
  },
  created() {
    this.user = this.$auth.user.name
    this.profile = this.$auth.user
  }
}
</script>

<style lang="scss" scoped></style>

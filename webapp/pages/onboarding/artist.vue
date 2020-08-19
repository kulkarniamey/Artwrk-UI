<template>
  <div>
    <div class="mt-10"></div>
    <div>
      <artistonboardingform :profileData="getProfile" />
    </div>
  </div>
</template>

<script>
import artistonboardingform from '~/components/Onboarding/artistonboardform'

export default {
  middleware: 'auth',
  name: 'welcome',

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

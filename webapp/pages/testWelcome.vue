<template>
  <div>
    <artistonboardingform />
  </div>
</template>

<script>
import artistonboardingform from '../components/Artist Onboarding/artistonboardform'

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
      user: undefined
    }
  },
  mounted() {
    this.user = this.$auth.user.name
  }
}
</script>

<style lang="scss" scoped></style>

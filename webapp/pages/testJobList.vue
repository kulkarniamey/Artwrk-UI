<template>
  <div>
    <JobCard></JobCard>
  </div>
</template>

<script>
import JobCard from '../components/JobCard'
export default {
  name: 'testJobList',
  head() {
    title: 'Jobs'
  },
  components: {
    JobCard
  }
}
</script>

<style lang="scss" scoped></style>

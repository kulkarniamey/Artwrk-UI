<template>
    <div>
        <h5>Jobs Offered by Apple</h5>
        <JobCard />
    </div>
</template>

<script>
import JobCard from '../JobCard'

export default {
  name: 'CompanyJobs',
  components: { JobCard }
}
</script>

<style lang="scss" scoped>
</style>
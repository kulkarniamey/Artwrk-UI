<template>
  <div>
    <v-container>
      <CompanyHeader />
    </v-container>
    <CompanyBody />
    <CompanyJobs />
  </div>
</template>

<script>
import CompanyHeader from '../components/Company/CompanyHeader'
import CompanyBody from '../components/Company/CompanyBody'
import CompanyJobs from '../components/Company/CompanyJobs'
export default {
  name: 'comapany',
  head() {
    title: 'Company Profile'
  },
  components: {
    CompanyHeader,
    CompanyBody,
    CompanyJobs
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

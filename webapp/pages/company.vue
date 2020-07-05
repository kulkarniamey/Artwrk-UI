<template>
  <div>
    <CompanyHeader />
    <CompanyBody />
  </div>
</template>

<script>
import CompanyHeader from '../components/Company/CompanyHeader'
import CompanyBody from '../components/Company/CompanyBody'
export default {
  name: 'comapany',
  head() {
    title: 'Company Profile'
  },
  components: {
    CompanyHeader,
    CompanyBody
  }
}
</script>

<style lang="scss" scoped></style>

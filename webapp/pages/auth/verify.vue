<template>
  <Verify />
</template>

<script>
import Verify from '../../components/Verify'
export default {
  auth: 'guest',
  name: 'verify',
  layout: 'authlayout',
  components: {
    Verify
  }
}
</script>

<style lang="css" scoped></style>

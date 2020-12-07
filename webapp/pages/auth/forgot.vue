<template>
  <Forgotpass />
</template>

<script>
import Forgotpass from '../../components/Forgotpass'
export default {
  auth: 'guest',
  name: 'forgot',
  layout: 'authlayout',
  components: {
    Forgotpass
  }
}
</script>

<style lang="css" scoped></style>

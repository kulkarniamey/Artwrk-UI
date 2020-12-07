<template>
  <Resetpass />
</template>

<script>
import Resetpass from '../../components/Resetpass'
export default {
  auth: 'guest',
  name: 'reset',
  layout: 'authlayout',
  components: {
    Resetpass
  }
}
</script>

<style lang="css" scoped></style>

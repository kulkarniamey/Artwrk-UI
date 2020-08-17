<template>
  <div>
      <h1>Hello {{ user }}</h1>

  </div>
</template>

<script>
export default {
value:"_id",
data: () => ({
    user:'',
}),
mounted(){
  this.user = this.$route.params.id
}

}
</script>

<style>

</style>
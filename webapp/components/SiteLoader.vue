<template>
  <div class="loader">
<ArtWrkLogo style="margin:auto;"/>
  </div>
</template>

<script>
import ArtWrkLogo from '@/assets/ArtWrkLogo';
  export default {
    components: {ArtWrkLogo}
  }
</script>

<style lang="scss" scoped>
.loader{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-content: center;
  justify-items: center;
  
}
</style>
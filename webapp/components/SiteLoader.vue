<template>
  <div class="loader">
<ArtWrkLogo class="loader-pic" style="margin:auto;"/>
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
.loader-pic{
    opacity: 1;
    animation: fade 2s linear;
}

@keyframes fade {
  0%,100% { opacity: 0 }
  50% { opacity: 1 }
}
</style>
<template>
  <div class="loader" id="preloader">
    <div class="title">
      Art is an Explosion!
    </div>
    <div class="subtitle"><span class="span">Art</span>Wrk.</div>
    <div class="progressbar">
      <div class="complete"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteLoader'
}
</script>

<style lang="css" scoped>
.container {
  /* somehow this doesn't work  */
  background-image: url('/loader/4.jpg');
  background-size: cover;
}
.container h1 {
  font-family: 'Lobster', cursive !important;
  font-size: 10em !important;
  color: crimson;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  width: 100%;
  height: 100vh;
  background: linear-gradient(60deg, #232526, #414345);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.title {
  width: 100%;
  height: 100vh;
  background-image: url('/loader/1.jpg');
  background-size: 100% 100%;
  background-position: center;
  font-family: 'Lobster', cursive !important;
  font-size: 10em !important;
  text-align: center;
  line-height: 650px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-5deg);
  color: #ff0000;
  -webkit-background-clip: text;
  pointer-events: none;
  animation: anim 1s infinite, anim1 3s forwards;
}

@keyframes anim {
  0% {
    background-image: url('/loader/1.jpg');
  }
  20% {
    background-image: url('/loader/2.jpg');
  }
  40% {
    background-image: url('/loader/3.jpg');
  }
  60% {
    background-image: url('/loader/5.jpg');
  }
  80% {
    background-image: url('/loader/4.jpg');
  }
  100% {
    background-image: url('/loader/2.jpg');
  }
}

@keyframes anim1 {
  from {
    color: #ff0000;
  }
  to {
    color: transparent;
  }
}

.subtitle {
  font-family: monospace;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  letter-spacing: 8px;
}
.span {
  color: #ff0000;
  letter-spacing: 5px;
}

.progressbar {
  width: 10%;
  height: 2px;
  background-color: #262626;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.complete {
  width: 0%;
  height: 2px;
  position: relative;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left;
  background-color: #e6e6e6;
  animation: anim3 5s forwards;
}

@keyframes anim3 {
  0% {
    width: 0%;
  }
  25% {
    width: 25%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
</style>

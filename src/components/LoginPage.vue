<template>
  <div class="login-page">
    <div class="background" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <img :src="googleLogo" alt="Google Logo" />
  </div>
</template>

<script>
import bgImage from '@/assets/images/login-phase-bg.webp';
import googleLogo from '@/assets/images/logo-google.png';

export default {
  data() {
    return {
      bgImage,
      googleLogo
    };
  }
};
</script>

<style scoped>
.background {
  height: 100vh;
  background-size: cover;
  background-position: center;
}

img {
  width: 100px;
}
</style>

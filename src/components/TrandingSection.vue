<template>
  <section id="tranding">
    <div class="container">
      <h3 class="text-center section-subheading">- Popular Delivery -</h3>
      <h1 class="text-center section-heading">
        Reach your goals faster with expert mentors
      </h1>
    </div>
    <div class="container">
      <button class="my-button" @click="navigateToLogin">Start Mentoring</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrandingSection',
  methods: {
    navigateToLogin() {
      if (this.$router) {
        this.$router.push('/login');
      } else {
        console.error('Router is not configured properly');
      }
    }
  }
};
</script>

<style scoped>
@import '../assets/css/style.css';
</style>

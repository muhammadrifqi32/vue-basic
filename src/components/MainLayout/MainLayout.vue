<template>
  <div class="min-h-screen flex">
    <!-- Sidebar always stays to the left -->
    <Sidebar class="w-1/5" />
    <div class="w-4/5">
      <Navbar />
      <!-- Child content goes here -->
      <router-view class="border-2 border-black" />
    </div>
  </div>
</template>

<script>
import Navbar from "./Partials/Navbar.vue";
import Sidebar from "./Partials/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style scoped>
/* Add your styles */
</style>

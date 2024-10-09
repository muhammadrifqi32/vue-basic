<template>
  <Navbar />
  <Sidebar />
  <div class="content">
    <!-- This will render the child view, e.g., Dashboard -->
    <router-view />
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

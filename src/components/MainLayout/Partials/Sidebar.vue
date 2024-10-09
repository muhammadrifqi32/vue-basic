<template>
  <!-- Drawer -->
  <div class="drawer drawer-mobile">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content will go here -->
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
/* Add fixed positioning to ensure that the sidebar overlays properly */
.drawer-side {
  z-index: 50; /* Ensure the sidebar is above the content */
}

/* Adjust drawer width if needed */
.drawer-side .menu {
  width: 20rem; /* Set a fixed width for the sidebar */
}
</style>

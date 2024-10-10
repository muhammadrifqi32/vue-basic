<template>
  <div>
    <!-- Navbar -->
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <!-- Trigger drawer opening with navbar button -->
        <label
          for="my-drawer"
          role="button"
          class="btn btn-ghost btn-circle"
          tabindex="0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl"> Hi {{ username }}, Enjoy Vue </a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <!-- Logout Button with Logout Icon -->
        <div class="tooltip tooltip-bottom" data-tip="Logout">
          <button class="btn btn-ghost btn-circle" @click="handleLogout">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Include the Sidebar component -->
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const router = useRouter();
    const username = ref("");

    const handleLogout = () => {
      // Clear localStorage on logout
      localStorage.removeItem("username");
      router.push("/login");
    };

    // Fetch username from localStorage on mount
    onMounted(() => {
      username.value = localStorage.getItem("username") || "Guest";
    });

    return {
      handleLogout,
      username,
    };
  },
};
</script>

<style lang="scss" scoped></style>

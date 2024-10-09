<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="flex flex-col items-start space-y-4 p-6 border-2 border-gray-300 rounded-lg"
    >
      <h1 class="text-lg text-black text-center w-full">Login Form</h1>
      <div class="w-full">
        <p class="text-left mb-2">Username</p>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          required
          v-model="username"
        />
        <!-- Error message for username -->
        <span class="text-red-500 text-sm h-4 block">
          <span v-if="error && !usernameValid">Username not registered</span>
        </span>
      </div>
      <div class="w-full relative">
        <p class="text-left mb-2">Password</p>
        <input
          :type="passwordFieldType"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          required
          v-model="password"
        />
        <!-- Show/Hide password icon button -->
        <button
          type="button"
          class="absolute right-2 top-10"
          @click="togglePasswordVisibility"
        >
          <EyeIcon
            v-if="passwordFieldType === 'password'"
            class="h-5 w-5 text-gray-500"
          />
          <EyeSlashIcon v-else class="h-5 w-5 text-gray-500" />
        </button>
        <!-- Error message for password -->
        <span class="text-red-500 text-sm h-4 block">
          <span v-if="error && usernameValid && !passwordValid"
            >Wrong password</span
          >
        </span>
      </div>
      <div class="w-full flex justify-end">
        <button class="btn btn-outline btn-accent" @click="login">Login</button>
      </div>
      <div v-if="stateLogin" class="w-full mt-4">
        <div class="toast">
          <div class="alert alert-info">
            <span>Login Success!</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    EyeIcon,
    EyeSlashIcon,
  },
  setup() {
    const router = useRouter();
    const stateLogin = ref(false);
    const username = ref("");
    const password = ref("");
    const error = ref(false);
    const usernameValid = ref(true);
    const passwordValid = ref(true);
    const passwordFieldType = ref("password");

    const togglePasswordVisibility = () => {
      passwordFieldType.value =
        passwordFieldType.value === "password" ? "text" : "password";
    };

    const login = () => {
      // Reset validation states
      error.value = false;
      usernameValid.value = true;
      passwordValid.value = true;

      if (username.value !== "rifqi") {
        error.value = true;
        usernameValid.value = false;
      } else if (username.value === "rifqi" && password.value !== "12345") {
        error.value = true;
        passwordValid.value = false;
      } else if (username.value === "rifqi" && password.value === "12345") {
        error.value = false;
        stateLogin.value = true;

        // Hide toast after 3 seconds
        setTimeout(() => {
          stateLogin.value = false;
          router.push('/dashboard');
        }, 2000);
      }
    };

    return {
      stateLogin,
      username,
      password,
      error,
      usernameValid,
      passwordValid,
      passwordFieldType,
      togglePasswordVisibility,
      login,
    };
  },
};
</script>

<style lang="scss" scoped></style>

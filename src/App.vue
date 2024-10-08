<template>
  <div>
    <Login data-theme="pastel"></Login>
  </div>
  <!-- <div class="border-2 border-blue-600" data-theme="light">
    <Dashboard
      :Days="Days"
      Text="Text from App"
      Color="secondary"
      class="border-2 border-green-500 m-2"
    >
      <p>This is from app</p>
    </Dashboard>
  </div> -->
</template>

<script>
// import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Auth/Login.vue";
export default {
  components: {
    //untuk manggil
    // Dashboard,
    Login,
  },
  setup() {
    //deklarasi variable
    // const Days = [
    //   "Monday",
    //   "Tuesday",
    //   "Wednesday",
    //   "Thursday",
    //   "Friday",
    //   "Saturday",
    //   "Sunday",
    // ];
    // return { Days }; //agar variable yang udah di deklarasi bisa dipanggil.
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

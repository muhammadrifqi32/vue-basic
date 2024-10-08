<template>
  <div>
    <h1 class="text-lg text-green-500">
      <p>
        {{ MyData }}
      </p>
      <div class="border-2 border-yellow-300">
        <slot></slot>
      </div>
      <div class="border-2 border-blue-600">
        <button
          class="p-5 bg-green-500 text-white"
          :class="
            stateShowModal
              ? 'loading loading-spinner text-error'
              : 'btn-primary'
          "
          @click="showModal()"
        >
          Click Me
        </button>
        <div v-if="stateShowModal">
          <DashboardModal></DashboardModal>
        </div>
        <div v-else>
          <p>There are no modals</p>
        </div>
        <div class="w-full text-center items-center">
          <table class="table border-2">
            <thead>
              <tr>
                <th class="border-2 border-black">No</th>
                <th class="border-2 border-black">Month</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(array, index) in arrays" :key="index" class="hover">
                <td class="border-2 border-black">
                  {{ index + 1 }}
                </td>
                <td class="border-2 border-black">{{ array }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex flex-col">
            <p>{{ Days }}</p>
            <p>{{ Text }}</p>
            <p>{{ Color }}</p>
          </div>
        </div>
      </div>
    </h1>
  </div>
</template>

<script>
import { ref } from "vue";
import DashboardModal from "./Dashboard/DashboardModal.vue";
export default {
  props: ["Days", "Text", "Color"],
  components: {
    DashboardModal,
  },
  setup() {
    const MyData = "Hello World";
    let stateShowModal = ref(false);
    const arrays = ["January", "February", "March", "April", "May"];
    return { MyData, stateShowModal, arrays };
  },
  methods: {
    showModal() {
      console.log(this.stateShowModal);
      this.stateShowModal = !this.stateShowModal;
    },
  },
};
</script>

<style lang="scss" scoped></style>

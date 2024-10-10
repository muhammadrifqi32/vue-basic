<template>
  <div class="flex justify-center items-start pt-10">
    <div class="w-full max-w-3xl">
      <h1 class="text-center text-xl font-bold mb-4">
        This is Department View
      </h1>

      <!-- Button with DaisyUI Tooltip -->
      <div class="tooltip tooltip-top" data-tip="Add New Department">
        <button class="btn btn-primary mb-6" @click="openModal">
          <!-- SVG + Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      <!-- The Modal (no submit functionality) -->
      <dialog ref="modal" id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">Add New Department</h3>

          <!-- Form (kept for display, no submission) -->
          <form class="space-y-4">
            <div class="form-control">
              <label for="deptInitial" class="label">
                <span class="label-text">Department Initial</span>
              </label>
              <input
                v-model="form.dept_Initial"
                type="text"
                id="deptInitial"
                class="input input-bordered"
                placeholder="Enter Department Initial"
              />
            </div>

            <div class="form-control">
              <label for="deptName" class="label">
                <span class="label-text">Department Name</span>
              </label>
              <input
                v-model="form.dept_Name"
                type="text"
                id="deptName"
                class="input input-bordered"
                placeholder="Enter Department Name"
              />
            </div>

            <!-- Modal Actions -->
            <div class="modal-action">
              <button type="button" class="btn" @click="closeModal">
                Close
              </button>
            </div>
          </form>
        </div>
        <!-- Backdrop for closing modal when clicked outside -->
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div class="overflow-x-auto">
        <table class="table table-auto w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Department ID</th>
              <th>Initial</th>
              <th>Department Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dept, index) in departments" :key="dept.dept_ID">
              <th>{{ index + 1 }}</th>
              <td>{{ dept.dept_ID }}</td>
              <td>{{ dept.dept_Initial }}</td>
              <td>{{ dept.dept_Name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const departments = ref([]);
    const modal = ref(null);
    const form = ref({
      dept_Initial: "",
      dept_Name: "",
    });

    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7257/api/Departments"
        );
        if (response.data.status === 200) {
          departments.value = response.data.data;
        } else {
          console.error(
            "Failed to retrieve departments:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("There was an error fetching the departments:", error);
      }
    };

    const openModal = () => {
      modal.value.showModal();
    };

    const closeModal = () => {
      modal.value.close();
    };

    onMounted(() => {
      fetchDepartments();
    });

    return {
      departments,
      modal,
      form,
      openModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
}
</style>

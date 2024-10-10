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
  
        <!-- Pagination Controls -->
        <div class="join mt-4">
          <button 
            class="join-item btn" 
            :disabled="currentPage === 1" 
            @click="changePage(currentPage - 1)">
            Prev
          </button>
          <button 
            v-for="page in totalPages" 
            :key="page" 
            class="join-item btn" 
            :class="{'btn-active': page === currentPage}" 
            @click="changePage(page)">
            {{ page }}
          </button>
          <button 
            class="join-item btn" 
            :disabled="currentPage === totalPages" 
            @click="changePage(currentPage + 1)">
            Next
          </button>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from "vue";
  import axios from "axios";
  
  export default {
    setup() {
      const departments = ref([]);
      const modal = ref(null);
      const form = ref({
        dept_Initial: "",
        dept_Name: "",
      });
  
      // Pagination and Sorting State
      const currentPage = ref(1);
      const rowsPerPage = ref(10); // Number of rows per page
      const totalRecords = ref(0); // Total number of records
      const searchQuery = ref(""); // Search term
      const sortColumnIndex = ref(0); // Column to sort by
      const sortDirection = ref("asc"); // Sorting direction
  
      // Fetch departments using POST request
      const fetchDepartments = async () => {
        const requestBody = {
          draw: currentPage.value,
          start: (currentPage.value - 1) * rowsPerPage.value,
          length: rowsPerPage.value,
          search: {
            value: searchQuery.value,
            regex: false,
          },
          order: {
            dir: sortDirection.value,
            column: sortColumnIndex.value,
          },
        };
  
        try {
          const response = await axios.post(
            "https://localhost:7257/api/Departments/Paging",
            requestBody
          );
          if (response.status === 200) {
            departments.value = response.data.data; // Fetched department data
            totalRecords.value = response.data.recordsFiltered; // Update total records
          } else {
            console.error("Failed to retrieve departments:", response.data.message);
          }
        } catch (error) {
          console.error("There was an error fetching the departments:", error);
        }
      };
  
      // Calculate total pages for pagination
      const totalPages = computed(() => {
        return Math.ceil(totalRecords.value / rowsPerPage.value);
      });
  
      // Handle page change
      const changePage = (page) => {
        if (page >= 1 && page <= totalPages.value) {
          currentPage.value = page;
          fetchDepartments();
        }
      };
  
      // Open and close modal
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
        currentPage,
        rowsPerPage,
        totalPages,
        totalRecords,
        sortColumnIndex,
        sortDirection,
        searchQuery,
        fetchDepartments,
        changePage,
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
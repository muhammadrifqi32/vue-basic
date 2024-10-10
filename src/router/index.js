import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Auth/Login.vue";
// import Dashboard from "../components/Dashboard.vue";
import MainLayout from "../components/MainLayout/MainLayout.vue"; // Import MainLayout
import Department from "../components/Menu/Department.vue";
import Account from "../components/Menu/Account.vue";

const routes = [
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/page", // Authenticated routes with MainLayout wrapper
    component: MainLayout, // MainLayout as the wrapper
    children: [
      {
        path: "account", // This will be accessible as /app/dashboard
        component: Account,
        name: "account",
      },
      {
        path: "department", // This will be accessible as /app/dashboard
        component: Department,
        name: "department",
      },
    ],
  },
  {
    path: '/', // Redirect the root route '/' to '/login'
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

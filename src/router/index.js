import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Auth/Login.vue";
import Dashboard from "../components/Dashboard.vue";
import MainLayout from "../components/MainLayout/MainLayout.vue"; // Import MainLayout

const routes = [
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/app", // Authenticated routes with MainLayout wrapper
    component: MainLayout, // MainLayout as the wrapper
    children: [
      {
        path: "dashboard", // This will be accessible as /app/dashboard
        component: Dashboard,
        name: "dashboard",
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

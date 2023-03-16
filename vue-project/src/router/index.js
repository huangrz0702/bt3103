import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import FoodSearchPage from "../views/FoodSearchPage.vue";
import ProfilePage from "../views/ProfilePage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/FoodSearch",
    name: "FoodSearch",
    component: FoodSearchPage,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: ProfilePage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

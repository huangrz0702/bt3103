import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import FoodSearchPage from "../views/FoodSearchPage.vue";
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

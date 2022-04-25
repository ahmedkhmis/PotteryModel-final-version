import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import paint from "../views/ModelPottery.vue";
import cmd from "../views/PassCommande.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../views/WelcomeView.vue"),
  },
  {
    path: "/model",
    name: "model",
    component: paint,
  },
  {
    path: "/cmd",
    name: "cmd",
    component: cmd,
  },
  {
    path: "/shop",
    name: "shop",
    component: ()=>import('../views/ShopView.vue'),
  },
  {
    path: "/shopC1",
    name: "shop1",
    component: ()=>import('../views/ShopCommand1.vue'),
  },
  {
    path: "/shopC2",
    name: "shop2",
    component: ()=>import('../views/ShopCommand2.vue'),
  },
  {
    path: "/shopC3",
    name: "shop3",
    component: ()=>import('../views/ShopCommand3.vue'),
  },
  {
    path: "/shopC4",
    name: "shop4",
    component: ()=>import('../views/ShopCommand4.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

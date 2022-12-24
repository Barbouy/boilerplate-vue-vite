import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "boilerplate" */ "@/App.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "dashboard" }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

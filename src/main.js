/* eslint-disable sort-imports */

import "./styles/style.css"

import App from "./App.vue"
import { createApp } from "vue"
const app = createApp(App)

import store from "@/store"
import router from "@/router"
import icons from "@/plugins/icons.js"

app.use(store)
app.use(router)
app.use(icons)

app.mount("#app")

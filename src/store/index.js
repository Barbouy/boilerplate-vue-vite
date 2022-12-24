import { createStore } from "vuex"
import example from "./example.module"

export default createStore({
  modules: { example },
  strict: process.env.NODE_ENV !== "production"
})

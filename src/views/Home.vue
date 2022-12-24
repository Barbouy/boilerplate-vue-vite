<template>
  <div class="w-full h-screen flex flex-col gap-4 justify-center items-center">
    <span class="font-bold text-base text-gray-800">
      Boilerplate
    </span>
    <div class="text-sm text-gray-600 flex flex-col items-center">
      <span>
        Vite - Vue3 - TailwindCss
      </span>
      <span>
        VueX - Axios - VueRouter
      </span>
    </div>
    <div class="flex flex-col items-center text-sm text-gray-600">
      <span>moment</span>
      <span>
        Current time : {{ useMoment().format("HH:mm:ss [le] DD MMMM YYYY") }}
      </span>
    </div>
    <div class="flex flex-col items-center text-sm text-gray-600">
      <span>vue3-keypress</span>
      <span>
        Key pressed : {{  keyPressed   }}
      </span>
    </div>
    <div class="flex flex-col items-center text-sm text-gray-600">
      <span>materialdesignicon</span>
      <loading class="animate-spin" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useKeypress } from "vue3-keypress"
import { useMoment } from "@/composables/useMoment.js"

const keyPressed = ref(null)

function handleKeyPressed({ event }) {
  keyPressed.value = event.key
}

useKeypress({
  keyEvent: "keydown",
  keyBinds: [],
  onAnyKey: handleKeyPressed,
})
</script>
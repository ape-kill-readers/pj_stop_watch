<template>
  <div>
    <h2>Stopwatch</h2>
    <p>{{ formattedTime }}</p>
    <button @click="startTimer">Start</button>
    <button @click="stopTimer">Stop</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const time = ref(0)
    const intervalId = (ref < number) | (null > null)

    const startTimer = () => {
      if (!intervalId.value) {
        intervalId.value = setInterval(() => {
          time.value++
        }, 1000)
      }
    }

    const stopTimer = () => {
      if (intervalId.value) {
        clearInterval(intervalId.value)
        intervalId.value = null
      }
    }

    const formattedTime = computed(() => {
      const minutes = Math.floor(time.value / 60)
      const seconds = time.value % 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    })

    return { time, startTimer, stopTimer, formattedTime }
  },
}
</script>

<style scoped>
/* スタイルを追加 */
</style>

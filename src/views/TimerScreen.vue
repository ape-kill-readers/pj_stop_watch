<template>
  <div class="timer">
    <h2>Set Your Target Time</h2>
    <p>Your target time is: {{ targetTime }} seconds</p>
    <button @click="next">Proceed</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const targetTime = ref(Math.floor(Math.random() * 3) * 10 + 10) // 10, 20, 30秒からランダム選択

    const next = () => {
      router.push({
        name: 'discussion',
        params: { targetTime: targetTime.value },
      })
    }

    return { targetTime, next }
  },
}
</script>

<style scoped>
.timer {
  text-align: center;
  margin-top: 20px;
}
</style>

<template>
  <div class="set-time">
    <h2>Set Your Personal Target Time</h2>
    <input type="number" v-model="personalTime" min="1" max="60" />
    <button @click="submitTime">Submit</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const personalTime = ref(0)
    const router = useRouter()

    const submitTime = () => {
      if (personalTime.value > 0) {
        router.push({
          name: 'stopwatch',
          params: { personalTime: personalTime.value },
        })
      } else {
        alert('Please set a valid time')
      }
    }

    return { personalTime, submitTime }
  },
}
</script>

<style scoped>
.set-time {
  text-align: center;
  margin-top: 20px;
}
input {
  margin-bottom: 10px;
}
</style>

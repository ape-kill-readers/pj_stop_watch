<template>
  <div class="discussion">
    <h2>Discussion Time</h2>
    <p>{{ theme }}</p>
    <button @click="proceed">Proceed to Set Your Time</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const theme = ref('Discuss how you will reach your target time!')

    const proceed = () => {
      router.push({ name: 'set-time' })
    }

    return { theme, proceed }
  },
}
</script>

<style scoped>
.discussion {
  text-align: center;
  margin-top: 20px;
}
</style>

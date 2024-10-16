<template>
  <div class="ranking">
    <h2>Ranking</h2>
    <ul>
      <li v-for="(entry, index) in ranking" :key="index">
        {{ index + 1 }}. {{ entry.name }}: {{ entry.time }} seconds
      </li>
    </ul>
    <button @click="goHome">Back to Home</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const ranking = ref([
      { name: 'Team A', time: 30 },
      { name: 'Team B', time: 35 },
      { name: 'Team C', time: 40 },
      { name: 'Team D', time: 45 },
      { name: 'Team E', time: 50 },
    ])

    const goHome = () => {
      router.push({ name: 'home' })
    }

    return { ranking, goHome }
  },
}
</script>

<style scoped>
.ranking {
  text-align: center;
  margin-top: 20px;
}
</style>

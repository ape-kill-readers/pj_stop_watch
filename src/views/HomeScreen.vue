<template>
  <div class="home">
    <h2>Welcome to the Game</h2>
    <input v-model="teamName" placeholder="Enter team name" />
    <button @click="startGame">Start</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const teamName = ref('')
    const router = useRouter()

    const startGame = () => {
      if (teamName.value) {
        router.push({ name: 'timer', params: { teamName: teamName.value } })
      } else {
        alert('Please enter a team name')
      }
    }

    return { teamName, startGame }
  },
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 20px;
}
input {
  margin-bottom: 10px;
}
</style>

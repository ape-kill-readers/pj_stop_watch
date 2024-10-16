<template>
  <div>
    <input v-model="roomId" type="number" placeholder="パスワードを入力" />
    <button @click="checkRoomStatus">部屋に入る</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getRoomStatus } from '@/services/api/getRoomStatus'

export default defineComponent({
  setup() {
    const roomId = ref<number | null>(null)
    const host = ref(false)

    const checkRoomStatus = async () => {
      if (roomId.value) {
        const data = await getRoomStatus(roomId.value)
        if (data.type === 'room' && data.data.status === 'created') {
          host.value = true // クライアントがホスト
        }
      }
    }

    return {
      roomId,
      checkRoomStatus,
      host,
    }
  },
})
</script>

const BASE_URL = '/api'

export const enterRoom = async (roomId: number, token: string) => {
  const ws = new WebSocket(`${BASE_URL}/rooms/${roomId}/entry`)
  ws.onopen = () => {
    ws.send(JSON.stringify({ Authorization: `Bearer ${token}` }))
  }
  return ws
}

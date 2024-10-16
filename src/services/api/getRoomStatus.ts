import axios from 'axios'

const BASE_URL = '/api'

export const getRoomStatus = async (roomId: number) => {
  const response = await axios.get(`${BASE_URL}/rooms/${roomId}`, {
    headers: {
      Authorization: 'Basic ' + btoa('<ユーザID>:<パスワード>'), // ユーザIDとパスワードをbase64にエンコード
    },
  })
  return response.data
}

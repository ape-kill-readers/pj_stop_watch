import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ルーティングの設定ファイル
import Api from './api' // APIの設定ファイル

createApp(App).use(router).mount('#app')

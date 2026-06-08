import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 👇 加上這一行，請確保前後都有斜線，並且大小寫與 GitHub 儲存庫名稱完全一致
  base: '/TAOBAO-Pfishing-vue/' 
})

<script setup>
// 定義觸發事件，用於通知 App.vue 切換畫面
const emit = defineEmits(['navigate'])

// 返回登入頁的函式
const goLogin = () => {
  emit('navigate', 'login')
}
</script>

<template>
  <div class="card single-card">
    <button class="btn-back" @click="goLogin">?</button>
    
    <div class="header-text">
      <h1>免費註冊</h1>
      <p class="subtitle">Create Free Account</p>
      <div class="divider"></div>
    </div>

    <form>
      <div class="form-group">
        <label>電子信箱 Email</label>
        <div class="input-wrapper"><input type="email" placeholder="請輸入電子信箱"></div>
      </div>
      <div class="form-group">
        <label>電話號碼 Phone Number</label>
        <div class="input-wrapper"><input type="tel" placeholder="請輸入電話號碼"></div>
      </div>
      <div class="form-group">
        <label>身分證字號 ID Number</label>
        <div class="input-wrapper"><input type="text" placeholder="請輸入身分證字號"></div>
      </div>
      <div class="form-group">
        <label>密碼 Password</label>
        <div class="input-wrapper"><input type="password" placeholder="請輸入登入密碼"></div>
      </div>
      
      <button type="button" class="btn-primary mt-4 rounded-full">立即註冊 Register Now</button>
      
      <div class="center-text mt-2">
        <button type="button" class="btn-text" @click="goLogin">已有帳號？立即登入 Login Now</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* 特定於註冊頁面的微調樣式可以放這裡，共用樣式則放在全域 style.css */
.header-text { text-align: left; }
</style>
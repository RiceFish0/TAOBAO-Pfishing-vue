<script setup>
import { ref } from 'vue'
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'
import LoginView from './components/LoginView.vue'
import RegisterView from './components/RegisterView.vue'
import VerifyView from './components/VerifyView.vue'

// 當前顯示的視圖狀態 ('login', 'register', 'verify')
const currentView = ref('login')

// 切換視圖的函數
function switchView(view) {
  currentView.value = view
}
</script>

<template>
  <div class="app-layout">
    <div class="bg-blur top-right"></div>
    <div class="bg-blur bottom-left"></div>

    <AppHeader @navigate="switchView" />

    <main>
      <LoginView v-if="currentView === 'login'" @navigate="switchView" />
      <RegisterView v-if="currentView === 'register'" @navigate="switchView" />
      <VerifyView v-if="currentView === 'verify'" @navigate="switchView" />
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* 這裡定義 App-level 的佈局樣式 */
.app-layout {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  z-index: 1;
}
</style>

<script setup>
import taobaoLogo from '@/assets/淘寶logo.png' 

const emit = defineEmits(['navigate'])

function goHome() {
  emit('navigate', 'login')
}
</script>

<template>
  <header>
    <div class="logo" id="logo-btn" @click="goHome">
      <img :src="taobaoLogo" alt="Taobao Logo" class="logo-icon">
      <span>Taobao</span>
    </div>
    <nav class="desktop-nav">
      <a href="#">Feedback</a>
      <a href="#">Help</a>
      <a href="#">Global Site</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
}

.logo {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;   
  gap: 0.25rem;          
}

.logo-icon {
  height: 3rem;           
  width: auto;
  object-fit: contain;
}

.logo span {
  font-size: 1.5rem;       
  font-weight: 800;
  color: #FF5000;            
}

.desktop-nav { 
  display: flex; 
  gap: 2rem; 
}

.desktop-nav a { 
  text-decoration: none; 
  color: var(--text-muted); 
  font-size: 0.875rem; 
  font-weight: 500;
}

.desktop-nav a:hover { 
  color: var(--primary); 
}
</style>
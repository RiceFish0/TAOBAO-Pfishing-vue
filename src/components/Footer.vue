<script setup>
// Footer 僅作展示用途
</script>

<template>
  <footer>
    <div class="footer-links">
      <a href="#">About Taobao</a>
      <a href="#">Partners</a>
      <a href="#">Marketing Center</a>
      <a href="#">Privacy Policy</a>
    </div>
    <div class="copyright">? Alibaba.com Taobao. All Rights Reserved.</div>
  </footer>
</template>

<style scoped>
footer {
  padding: 3rem;
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  position: relative;
}
.footer-links { 
  display: flex; 
  justify-content: center; 
  gap: 1.5rem; 
  flex-wrap: wrap; 
  margin-bottom: 1rem; 
}
.footer-links a { 
  text-decoration: none; 
  color: var(--text-muted); 
  font-size: 0.75rem; 
}
.footer-links a:hover { 
  color: var(--primary); 
}
.copyright { 
  font-size: 0.625rem; 
  color: var(--text-muted); 
  opacity: 0.5; 
  letter-spacing: 0.1em; 
  text-transform: uppercase; 
}
</style>
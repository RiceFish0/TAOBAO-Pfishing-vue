<script setup>
import qrCodeImage from '../assets/陶寶釣魚網頁-VaRBo2.png' // 模擬引用圖片

const emit = defineEmits(['navigate'])

function goToRegister() {
  emit('navigate', 'register')
}

function goToVerify() {
  emit('navigate', 'verify')
}
</script>

<template>
  <div id="view-login" class="card grid-card">
    <div class="qr-section">
      <h2>手機掃碼登入</h2>
      <p class="subtitle">QR Code Login</p>
      <div class="qr-box">
        <img :src="qrCodeImage" alt="身分驗證 QR Code" class="qr-image">
      </div>
      <p class="qr-hint">打開 <span>手機淘寶</span> 掃碼登入</p>
      <div class="links">
        <a href="#">下載淘寶</a>
        <a href="#">幫助中心</a>
      </div>
    </div>

    <div class="form-section">
      <div class="flex-between mb-4">
        <div>
          <h2>密碼登入</h2>
          <p class="subtitle">Password Login</p>
        </div>
        <button type="button" class="btn-text" id="btn-go-verify" @click="goToVerify">身份驗證 &gt;</button>
      </div>

      <form>
        <div class="form-group">
          <label>帳號名/郵箱/手機號</label>
          <div class="input-wrapper">
            <input type="text" placeholder="輸入用戶名">
          </div>
        </div>
        <div class="form-group">
          <div class="flex-between">
            <label>密碼</label>
            <button type="button" class="btn-text">忘記密碼?</button>
          </div>
          <div class="input-wrapper">
            <input type="password" placeholder="輸入登入密碼">
          </div>
        </div>
        <button type="button" class="btn-primary mt-2">登入</button>
      </form>

      <div class="flex-between mt-4 form-footer">
        <div class="social-links">
          <a href="#">Facebook</a>
          <a href="#">Alipay</a>
        </div>
        <div class="action-links">
          <button type="button" class="btn-text" id="btn-forgot-account" @click="goToVerify">忘記帳號</button>
          <button type="button" class="btn-text bold" id="btn-go-register" @click="goToRegister">免費註冊</button>
        </div>
      </div>

      <div class="terms">
        <input type="checkbox" id="terms">
        <label for="terms">我已閱讀並同意 <a>淘寶平台服務協議</a>、<a>隱私權政策</a>、<a>法律聲明</a> 及 <a>支付寶服務協議</a>。</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 左右兩側區塊的排版 */
.qr-section, .form-section { 
  padding: 3rem; 
  display: flex; 
  flex-direction: column; 
}

/* 左側 QR Code 區塊專屬 */
.qr-section { 
  align-items: center; 
  text-align: center; 
}
@media (min-width: 992px) {
  .qr-section { border-right: 1px solid var(--border-color); }
}

.qr-box { 
  background: var(--surface-hover); 
  padding: 1rem; 
  border-radius: 12px; 
  margin-bottom: 1.5rem; 
}

/* 拯救版面的關鍵：限制 QR Code 圖片大小 */
.qr-image {
  width: 160px;
  height: 160px;
  object-fit: contain; 
  border-radius: 8px;
  background: white; 
  padding: 8px;      
}

.qr-hint { font-size: 0.875rem; color: var(--text-muted); }
.qr-hint span { color: var(--primary); font-weight: bold; }

.links { display: flex; gap: 1.5rem; margin-top: 3rem; }
.links a { font-size: 0.75rem; color: var(--text-muted); text-decoration: none; }
.links a:hover { color: var(--primary); }

/* 右側表單底部與社群連結專屬 */
.form-footer { margin-top: 2rem; }
.social-links a { text-decoration: none; margin-right: 1rem; color: var(--text-muted); font-size: 0.75rem; font-weight: 500; }
.social-links a:hover { color: var(--primary); }
.action-links button { margin-left: 1rem; }

/* 服務條款 Checkbox 排版 */
.terms { display: flex; align-items: flex-start; gap: 0.5rem; margin-top: 2rem; }
.terms input { width: 16px; height: 16px; margin-top: 2px; accent-color: var(--primary); }
.terms label { font-size: 0.625rem; line-height: 1.6; color: var(--text-muted); }
.terms a { color: var(--text-muted); text-decoration: underline; cursor: pointer;}
.terms a:hover { color: var(--primary); }
</style>
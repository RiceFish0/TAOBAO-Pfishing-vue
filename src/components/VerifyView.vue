<script setup>
const emit = defineEmits(['navigate'])

const goLogin = () => {
  emit('navigate', 'login')
}
</script>

<template>
  <div class="card single-card">
    <button class="btn-back" @click="goLogin">?</button>
    
    <div class="header-text">
      <h1>身份驗證</h1>
      <p class="subtitle">Identity Verification</p>
      <div class="alert-box">提示：若忘記帳號/密碼，驗證銀行卡身分即可找回帳號/密碼</div>
      <div class="divider"></div>
    </div>

    <form>
      <div class="form-group">
        <label>銀行帳號 Bank Account Number</label>
        <div class="input-wrapper"><input type="text" placeholder="請輸入帳號"></div>
      </div>
      <div class="form-group">
        <label>密碼 Password</label>
        <div class="input-wrapper"><input type="password" placeholder="請輸入交易密碼"></div>
      </div>
      <div class="form-group w-50">
        <label>三碼驗證碼 CVV</label>
        <div class="input-wrapper"><input type="text" maxlength="3" placeholder="CVV" class="tracking-wide"></div>
      </div>
      
      <button type="button" class="btn-primary mt-4 rounded-full">驗證身分 Verify Identity</button>
      
      <div class="center-text mt-2">
        <button type="button" class="btn-text">忘記支付密碼？ Forgot Payment Password?</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.header-text { text-align: left; }
</style>
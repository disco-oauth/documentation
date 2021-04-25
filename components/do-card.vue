<template>
  <div class="do-card">
    <div class="c-header">
      <slot name="header" />
    </div>
    <hr class="c-divider" />
    <div class="c-main">
      <slot />
    </div>
    <hr v-if="footer" class="c-divider" />
    <div class="c-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: "do-card",
  props: ['footer']
}
</script>

<style scoped>
.do-card {
  background-color: var(--vs-theme-bg2);
  box-shadow: 0 0 4px 2px #222;
  padding: 2rem;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.c-header {
  font-size: 1.5rem;
  width: 100%;
  padding-bottom: 1.5rem;
}

.c-main {
  width: 100%;
  font-size: 1.35rem;
  line-height: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.c-actions {
  width: 100%;
  margin-top: 2rem;
}

.c-divider {
  height: 0;
  width: 80%;
  border-bottom: var(--vs-gray-4) 1px solid;
}

.subtitle {
  margin-top: 0 !important;
  color: #ddd;
}

p {
  margin-top: 1.5rem;
  width: 100%;
  margin-bottom: 1.5rem;
}

@media only screen and (max-width: 1280px) {
  .do-card {
    width: 90% !important;
  }
}
</style>

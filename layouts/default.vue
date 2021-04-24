<template>
  <div>
    <vs-navbar fixed center-collapsed v-model="active" style="padding-top: 1rem; padding-bottom: 1rem;">
      <template #left>
        <h2>Disco-OAuth</h2>
      </template>
      <vs-navbar-item to="/" :active="active === 'home'" id="home" class="nav-item">
        Home
      </vs-navbar-item>
      <vs-navbar-group class="nav-group">
        Documentation
        <template #items>
          <div v-for="(lg, link) in links" :key="link" style="width: 100%; ">
            <h3 class="title">{{ link }}</h3>
            <vs-navbar-item v-for="(n, l) in lg" :key="l" :to="`/docs/${version}/${l}`" :active="active === 'docs-' + l" :id="'docs-' + l" class="nav-item">{{ n }}</vs-navbar-item>
          </div>
        </template>
      </vs-navbar-group>
      <template #right>
        <vs-select placeholder="Version" v-model="version">
          <vs-option v-for="(ver, i) in versions" @click="$store.commit('change', ver)" :key="i" :label="'v' + ver" :value="ver">v{{ ver }}</vs-option>
        </vs-select>
        <vs-navbar-item href="https://discord.gg/TWmyuEeddz"><span class="mdi mdi-discord" style="font-size: 1.75rem;" /></vs-navbar-item>
        <vs-navbar-item href="https://github.com/disco-oauth/disco-oauth"><span class="mdi mdi-github" style="font-size: 1.75rem;" /></vs-navbar-item>
        <vs-navbar-item href="https://npmjs.com/package/disco-oauth"><span class="mdi mdi-npm" style="font-size: 1.75rem;" /></vs-navbar-item>
      </template>
    </vs-navbar>
    <div class="page">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'home'
  }),
  computed: {
    version() {
      return this.$store.state.version;
    },
    versions() {
      return Object.keys(this.$store.state.versions);
    },
    links() {
      return this.$store.state.versions[this.$store.state.version];
    }
  }
}
</script>

<style>
html {
  font-size: 12px !important;
  word-spacing: 1px !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

body {
  background-color: var(--vs-theme-bg);
  color: var(--vs-theme-color);
  padding-bottom: 2rem;
}

button {
  font-size: 1.5rem !important;
}

.title {
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.nav-item, .nav-group > button {
  font-size: 1.25rem !important;
  font-weight: 300 !important;
}

.nav-item.active {
  font-weight: bold !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page {
  margin-top: 7rem;
}

.center-all {
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

code {
  display: inline-block;
  font-family: 'Fira Mono', monospace !important;
  font-size: 1.2rem;
  background-color: var(--vs-theme-code);
  color: var(--vs-theme-code2);
  padding: 0.25rem 0.75rem;
  margin: 0.5rem 0;
  line-height: 2.25rem;
}
</style>

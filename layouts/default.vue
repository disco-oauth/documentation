<template>
  <div>
    <vs-navbar fixed center-collapsed right-collapsed v-model="active" style="padding-top: 1rem; padding-bottom: 1rem;">
      <template #left>
        <vs-button icon shadow color="#fff" class="hide-large" @click="drawer = true" style="padding: 0 0.25rem; margin: 0 1.5rem 0 0;">
          <span class="mdi mdi-menu" style="font-size: 1.75rem;" />
        </vs-button>
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
      <vs-navbar-group class="nav-group">
        Guide
        <template #items>
          <div v-for="(lg, link) in guides" :key="link" style="width: 100%; ">
            <h3 class="title">{{ link }}</h3>
            <vs-navbar-item v-for="(n, l) in lg" :key="l" :to="`/guide/${l}`" :active="active === 'guide-' + l" :id="'guide-' + l" class="nav-item">{{ n }}</vs-navbar-item>
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
    <vs-sidebar absolute v-model="active" text-white :open.sync="drawer">
      <vs-sidebar-item class="side-item" to="/" id="home">Home</vs-sidebar-item>
      <vs-sidebar-group >
        <template #header>
          <vs-sidebar-item class="side-item" arrow>
            <span style="margin-left: 1rem;">Documentation</span>
          </vs-sidebar-item>
        </template>
        <div v-for="(lg, link) in links" :key="link" style="width: 100%; ">
          <h3 style="margin-left: 1rem;" class="title">{{ link }}</h3>
          <vs-sidebar-item v-for="(n, l) in lg" :key="l" :to="`/docs/${version}/${l}`" :active="active === 'docs-' + l" :id="'docs-' + l" class="side-item">{{ n }}</vs-sidebar-item>
        </div>
      </vs-sidebar-group>
      <vs-sidebar-group >
        <template #header>
          <vs-sidebar-item class="side-item" arrow>
            <span style="margin-left: 1rem;">Guide</span>
          </vs-sidebar-item>
        </template>
        <div v-for="(lg, link) in guides" :key="link" style="width: 100%; ">
          <h3 style="margin-left: 1rem;" class="title">{{ link }}</h3>
          <vs-sidebar-item v-for="(n, l) in lg" :key="l" :to="`/guide/${l}`" :active="active === 'guide-' + l" :id="'guide-' + l" class="side-item">{{ n }}</vs-sidebar-item>
        </div>
      </vs-sidebar-group>
    </vs-sidebar>
    <div class="page">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'home',
    drawer: false
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
    },
    guides() {
      return {
        'Get Started': {
          'intro': 'Introduction',
          'discord-setup': 'Discord Setup',
          'app-setup': 'Server Setup'
        },
        'Integrating the API': {
          'the-client': 'Prepare client',
          'authentication': 'Authentication',
          'details': 'Fetching details'
        }
      }
    }
  }
}
</script>

<style>
.hide-small {
  display: none !important;
}

.hide-large {
  display: block !important;
}

@media only screen and (min-width: 872px) {
  .hide-small {
    display: block !important;
  }
  .hide-large {
    display: none !important;
  }
}

html {
  font-size: 12px !important;
  word-spacing: 1px !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 8px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: none;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #f1f1f1;
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
  overflow-y: auto;
  overflow-x: hidden;
  height: 90vh;
}

.center-all {
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.center-stuff {
  display: flex;
  flex-direction: column;
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
  white-space: nowrap;
}

code * {
  font-family: 'Fira Mono', monospace !important;
}

img {
  max-width: 100%;
  margin: 1rem 0;
  border: 1px solid #666;
  border-radius: 4px;
}

.side-item * {
  font-size: 1.5rem !important;
  font-weight: 300 !important;
}
</style>

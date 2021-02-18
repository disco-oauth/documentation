<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list flat subheader>
        <v-list-item :to="'/'" router exact>
          <v-list-item-action><v-icon>mdi-home</v-icon></v-list-item-action>
          <v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon='mdi-book-open-page-variant'>
          <template v-slot:activator><v-list-item-title>Docs</v-list-item-title></template>
          <div v-for='(entries, titles) in items[version]' :key='titles'>
            <v-subheader v-text='titles' />
            <v-list-item v-for='entry in entries' :key='entry.title' :to='"/docs/" + version + entry.to' router exact>
              <v-list-item-title v-text='entry.title' />
            </v-list-item>
            <v-divider v-if='titles !== "Typedefs"' />
          </div>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class='d-none d-md-block' v-text="title" />
      <v-spacer class='d-none d-md-block' />
      <v-select solo placeholder='Version' class='mx-8 mt-8 pa-0' :items='versions' v-model='version'></v-select>
      <v-spacer />
      <v-btn icon @click.stop='$vuetify.theme.dark = !$vuetify.theme.dark'><v-icon>mdi-theme-light-dark</v-icon></v-btn>
      <v-btn class='d-none d-md-flex' icon v-for='ext in externals' :key='ext.icon' :href='ext.link' target='_blank'><v-icon>mdi-{{ ext.icon }}</v-icon></v-btn>
      <v-menu
        transition="slide-y-transition"
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class='d-flex d-md-none' icon v-bind="attrs" v-on="on"><v-icon>mdi-dots-vertical</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(ext, i) in externals" :key="i" :href='ext.link' target='_blank'>
            <v-list-item-action><v-icon>mdi-{{ ext.icon }}</v-icon></v-list-item-action>
            <v-list-item-title>{{ ext.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class='overflow-auto'>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} by disco-oauth.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      dark: true,
      drawer: false,
      fixed: false,
      version: '4.2.7',
      versions: ['4.2.7'],
      items: {
        "4.2.7": {
          "General": [
            { title: 'Get Started', to: '/get-started' },
            { title: 'FAQ', to: '/faq' },
          ],
          "Classes": [
            { title: 'APIError', to: '/api-error' },
            { title: 'Client', to: '/client' },
            { title: 'Connection', to: '/connection' },
            { title: 'Connections', to: '/connections' },
            { title: 'Guild', to: '/guild' },
            { title: 'Guilds', to: '/guilds' },
            { title: 'User', to: '/user' }
          ]
        },
      },
      externals: [
        {
          icon: 'discord',
          name: 'Discord',
          link: 'https://discord.gg/TWmyuEeddz'
        },
        {
          icon: 'github',
          name: 'GitHub',
          link: 'https://github.com/TheDrone7/disco-oauth'
        },
        {
          icon: 'npm',
          name: 'NPM',
          link: 'https://npmjs.com/package/disco-oauth'
        },
      ],
      title: 'Disco-OAuth'
    }
  },
  computed: {
    path() {
      if (process.client) return window.location.pathname;
      else return '/';
    }
  }
}
</script>

<style>
html, body {
  overflow: hidden !important;
}
.overflow-auto {
  overflow: auto;
  max-height: 95vh;
}
</style>

<style lang='scss'>
@import '~/assets/variables.scss';

code {
  color: #ffffe0 !important;
  font-family: $code-kbd-font-family !important;
  overflow-x: auto;
}

.theme--light code {
  color: #333300 !important;
}
</style>

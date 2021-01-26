<template>
  <v-row class='mt-4' align='center' justify='center'>
    <v-col cols='12' md='8'>
      <doc-section title='Getting Started'>
        <p class='my-0'>First of all, you are expected to have a fair knowledge of the following technologies:</p>
        <ul>
          <li v-for='tech in techs' :key='tech.name'><a :href='tech.link' v-text='tech.name' target='_blank' /></li>
        </ul>
      </doc-section>

      <doc-section title='Installation'>
        <p>Disco-Oauth can be installed using whichever package manager you prefer. Below are the commands for installing <code>disco-oauth</code> using npm and yarn.</p>
        <v-tabs v-model='pm'><v-tab>NPM</v-tab><v-tab>Yarn</v-tab></v-tabs>
        <v-tabs-items v-model='pm'>
          <v-tab-item>
            <v-card flat>
              <v-card-title><code>npm install --save disco-oauth</code></v-card-title>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-title><code>yarn add disco-oauth</code></v-card-title>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-alert class='mt-4' :icon='false' outlined border='left' type='warning'>You can also use <code>TheDrone7/disco-oauth</code> instead of <code>disco-oauth</code> to install the latest, undocumented version of disco-oauth from GitHub.</v-alert>
      </doc-section>

      <doc-section title='Usage'>
        <p>Now that the library is installed, you can import and initiate the OAuth2 client in your node.js webapp with the following lines of code</p>
        <code class='d-block'>
          const OAuthClient = require('disco-oauth');<br />
          const client = new OAuthClient('discord-app-client-id', 'discord-app-client-secret');
        </code>
        <p class='mt-4'>Normally, you would want to keep your <code>discord-app-client-secret</code> hidden from others. You can achieve this by storing it as an environment variable and then accessing it using <code>process.env</code>.</p>
      </doc-section>

      <v-card tile>
        <v-card-title>Next Steps</v-card-title>
        <v-card-text>You are now ready to use the library, <nuxt-link to='/docs/client' exact>click here</nuxt-link> to view the documentation for the Client class.</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'get-started',
  data() {
    return {
      pm: 'npm',
      techs: [
        { name: 'Node.js', link: 'https://nodejs.org/'},
        { name: 'NPM', link: 'https://npmjs.com/'},
        { name: 'OAuth2', link: 'https://oauth.net/2/'},
        { name: 'Restful APIs', link: 'https://restfulapi.net/'}
      ]
    }
  },
  head: {
    title: 'Get Started'
  }
};
</script>

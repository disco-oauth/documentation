<template>
  <div class="center-all">
    <do-card>
      <template #header>
        <h2>Prerequisite knowledge</h2>
      </template>
      <p>Before you get started, you are expected to have decent knowledge of the following technologies: -</p>
      <ul>
        <li><a href="https://nodejs.org/" target="_blank">Node.JS</a></li>
        <li><a href="https://npmjs.com/" target="_blank">NPM</a></li>
        <li><a href="https://oauth.net/2/" target="_blank">OAuth2</a></li>
        <li><a href="https://restfulapi.net/" target="_blank">Restful APIs</a></li>
      </ul>
    </do-card>
    <do-card>
      <template #header>
        <h2>Installation</h2>
      </template>
      <p>You can very easily get started with disco-oauth by simply installing it using any of your preferred NodeJS package managers.</p>
      <h4>NPM</h4>
      <p><code>npm install --save disco-oauth</code></p>
      <h4>Yarn</h4>
      <p><code>yarn add disco-oauth</code></p>
      <vs-alert color="warn" shadow>
        <p style="font-size: 1.5rem">You can also use <strong>disco-oauth/disco-oauth</strong> instead of just <strong>disco-oauth</strong> to install the latest under-development version of the library from GitHub.</p>
      </vs-alert>
    </do-card>
    <do-card footer="true">
      <template #header>
        <h2>Usage</h2>
      </template>
      <p>Now that the library is installed, you can use it by simply importing it to your app and creating an instance of the Client class.</p>
      <code>
        const OAuthClient = require('disco-oauth');<br />
        const client = new OAuthClient('my-discord-client-id', 'my-discord-client-secret');
      </code>
      <p>Normally, you would want to keep your client secret hidden from others. For this, it would be best to store it among the environment variables and access it using <code>process.env</code>.</p>
      <template #actions>
        <p style="font-size: 1.5rem">You are now ready to use the library. <nuxt-link :to="'/docs/' + $store.state.version + '/client'">Click here</nuxt-link> to learn more.</p>
      </template>
    </do-card>
  </div>
</template>

<script>
export default {
  name: "get-started",
  async asyncData({ params, store }) {
    store.commit('change', params.version);
  }
}
</script>

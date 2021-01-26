<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Disco-OAuth
          <v-spacer />
          <code class='text-subtitle-1' style="font-family: 'Fira Mono', monospace !important;">npm install --save disco-oauth</code>
        </v-card-title>
        <v-card-text>
          <v-row justify='space-between' class='mx-0 my-4'>
            <img src="https://img.shields.io/npm/v/disco-oauth?style=for-the-badge" alt="Version">
            <img src="https://img.shields.io/npm/dt/disco-oauth?style=for-the-badge" alt="NPM downloads">
            <img src="https://img.shields.io/github/issues/TheDrone7/disco-oauth?style=for-the-badge" alt="Github issues">
          </v-row>
          <hr class='my-3' />
          <p>Disco-OAuth is a small Node.js library that eases the implementation of Discord OAuth2 API in your backend servers.</p>
          <p>It is an object-oriented library giving you the ease of use and good quality at the same time!</p>
          <p>This is also frequently updated to provide all the cool new stuff that discord launches for users and developers alike.</p>
          <p>For more information on disco-oauth, check out the <nuxt-link exact to='/docs/4.2.7/get-started'>documentation</nuxt-link>.</p>
          <p>If you have questions, please join the official <a href="https://discord.gg/4mmeuEV" target="_blank" title="chat">discord</a>.</p>
          <p>Find a bug? Report it on the github <a href="https://github.com/TheDrone7/disco-oauth/issues" target="_blank" title="contribute">issue board</a>.</p>
          <div class="text-xs-right"><em><small>&mdash; TheDrone7</small></em></div>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-btn color="blurple" class='white--text' href='https://discord.gg/4mmeuEV'>
            Join Discord
          </v-btn>
          <v-spacer />
          <v-btn color="primary" nuxt to="/docs/4.2.7/get-started">
            Get Started
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {}
</script>

<template>
  <div class="center-all">
    <do-card footer="true">
      <template #header>
        <div class="big-header">
          <h2 style="display: flex; align-items: center;">Disco-OAuth <img style="margin-left: 1rem;" src="https://img.shields.io/npm/v/disco-oauth?style=for-the-badge" alt="Version" /></h2>
          <code>npm install --save disco-oauth</code>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 1.5rem;">
          <img src="https://img.shields.io/npm/dt/disco-oauth?style=for-the-badge" alt="NPM downloads" />
          <img src="https://img.shields.io/github/issues/TheDrone7/disco-oauth?style=for-the-badge" alt="Github issues" />
        </div>
      </template>
      <p>Disco-OAuth is a small Node.js library that eases the implementation of Discord OAuth2 API in your backend servers.</p>
      <p>It is an object-oriented library giving you the ease of use and good quality at the same time!</p>
      <p>This is also frequently updated to provide all the cool new stuff that discord launches for users and developers alike.</p>
      <p>For more information on disco-oauth, check out the <nuxt-link :to="'/docs/' + $store.state.version + '/get-started'">documentation</nuxt-link>.</p>
      <p>If you have questions, please join the official <a href="https://discord.com/invite/TWmyuEeddz">discord</a>.</p>
      <p>Find a bug? Report it on the github <a href="https://github.com/TheDrone7/disco-oauth/issues">issue board</a>.</p>
      <p><em>- TheDrone7</em></p>
      <template #actions>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <vs-button href="https://discord.com/invite/TWmyuEeddz" square size="large" color="#7289da" gradient>Discord</vs-button>
          <vs-button :to="'/docs/' + $store.state.version + '/get-started'" square size="large" color="primary" gradient>Get Started</vs-button>
        </div>
      </template>
    </do-card>
  </div>
</template>

<script>
export default {
  name: 'index',
  head: {
    title: 'Home'
  }
}
</script>

<style>
.big-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media only screen and (max-width: 872px) {
  .big-header {
    flex-direction: column;
  }
}
</style>

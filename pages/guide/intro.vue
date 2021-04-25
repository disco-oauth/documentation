<template>
  <div class="center-all">
    <do-card footer="true">
      <template #header>
        <h2>Overview</h2>
      </template>
      <p>
        This is the official guide to <nuxt-link to="/">Disco-OAuth</nuxt-link> npm library which enables users to integrate discord OAuth2 into their web apps easily.
        Please note that this guide is only applicable to the latest version of the library (as displayed on the <nuxt-link to="/">home page</nuxt-link>)
        In this guide, we will be building a very simple app, that fetches the user's information and guilds and displays the data.
        For the example that we build in the website, we will be using the following technologies:
      </p>
      <ul>
        <li><strong>ExpressJS</strong> :: For the backend.</li>
        <li><strong>Disco-OAuth</strong> :: For the authentication.</li>
        <li><strong>EJS</strong> :: As the templating engine for SSR.</li>
        <li><strong>Water.CSS</strong> :: For styling everything.</li>
      </ul>
      <template #actions>
        <div style="width: 100%; display: flex; flex-direction: row-reverse; justify-content: space-between">
          <vs-button size="small" square gradient to="/guide/discord-setup">Next: Discord Setup</vs-button>
        </div>
      </template>
    </do-card>
  </div>
</template>

<script>
export default {
  name: "intro",
  head: {
    title: 'Introduction'
  }
}
</script>

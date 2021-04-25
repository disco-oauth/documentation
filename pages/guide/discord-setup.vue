<template>
  <div class="center-all">
    <do-card>
      <template #header>
        <h2>Creating a new app</h2>
      </template>
      <div class="center-stuff">
        <p>
          Firstly, go to <a href="https://discord.com/developers/applications">Discord Developer Portal</a> and
          click on the <code>New Application</code> button on the top-right corner of the screen.
          You'll be asked to enter a name and select a team for your new application.
        </p>
        <p>
          For this tutorial, the name will be <strong>Disco-OAuth guide</strong> and the second field is left to default i.e. <strong>Personal</strong>.
          Be sure to go through <a href="https://discord.com/developers/docs/legal" target="_blank">Discord API ToS</a> so you don't accidentally get banned from using the API.
          A sample form is shown below.
        </p>
        <img src="https://media.discordapp.net/attachments/540108289984430091/835786109576282142/unknown.png" alt="New Application" />
      </div>
    </do-card>
    <do-card footer="true">
      <template #header>
        <h2>Setting up</h2>
      </template>
      <p>Now that your new app has been created, we need to set a few values in the developer portal before it can be used in our app.</p>
      <vs-alert style="font-size: 1.35rem;" flat>
        You may want to set up a description and app icon before moving forward.
      </vs-alert>
      <p>Go to the <code>OAuth2</code> tab. And under the redirects heading, click on <code>Add Redirect</code> and enter the following URL (or any other redirect URL you may want to use) and click on <code>Save Changes</code>.</p>
      <code style="width: 100%">http://localhost:3000/login</code>
      <img src="https://media.discordapp.net/attachments/540108289984430091/835790643757973524/unknown.png" alt="OAuth2 settings" />
      <p>From the same tab, click on the <code>Copy</code> button under the Client Secret section and store it somewhere safe locally. This will be used later.</p>
      <p>Do the same with your <strong>Client ID</strong> and store it along the Client Secret for later use as well.</p>
      <p>Now, lets get to the coding part!</p>
      <template #actions>
        <div style="width: 100%; display: flex; flex-direction: row-reverse; justify-content: space-between">
          <vs-button size="small" square gradient to="/guide/app-setup">Next: Server Setup</vs-button>
          <vs-button size="small" color="danger" square gradient to="/guide/intro">Prev: Introduction</vs-button>
        </div>
      </template>
    </do-card>
  </div>
</template>

<script>
export default {
  name: "discord-setup",
  head: {
    title: 'Discord Setup'
  }
}
</script>

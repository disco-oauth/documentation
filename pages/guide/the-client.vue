<template>
  <div class="center-all">
    <do-card>
      <template #header>
        <h2>ENV Variables</h2>
      </template>
      <div class="center-stuff">
        <p>
          We saved our app's <strong>Client Secret</strong> early on. Create a new file inside the <code>Guide</code> folder called <code>.env</code> (exactly that, it has no name).
          And inside it, add the following line of code:
        </p>
        <code style="width: 100%;">clientSecret="my-client-secret"</code>
        <p>And replace <code>my-client-secret</code> with your own client's secret.</p>
        <p>This will set it up as an environment variable. These are variables that you do not want the public to see when your code is open source.</p>
        <p>
          Now that we have set up our env variable, we need to be able to read these variables. For this, head to the <code>www</code> file inside the <code>bin</code> folder
          and add the following line of code at the top
        </p>
        <code class="prettyprint" style="width: 100%;">require('dotenv').config();</code>
        <p>This will use the <code>dotenv</code> package that we installed in the last step to read and set up our environment variables from the <code>.env</code> file.</p>
      </div>
    </do-card>
    <do-card footer="true">
      <template #header>
        <h2>The client</h2>
      </template>
      <p>
        Create a new file named <code>oauth.js</code> directly inside the <code>Guide</code> folder.
        Inside this file, add the following code.
      </p>
      <code class="prettyprint" style="width: 100%;">
        const Client = require('disco-oauth');<br />
        const client = new Client('my-client-id', process.env.clientSecret);<br /><br />

        client.setScopes('identify', 'guilds');<br />
        client.setRedirect('http://localhost:3000/login');<br /><br />

        module.exports = client;
      </code>
      <p>
        Here, in the first line, we simply import the OAuth2 Client class from the library.
        In the next line, we create our own client.
        The first parameter, is the client's ID that we saved earlier (replace <code>my-client-id</code> with it.
        The second parameter, is our client's secret that we saved in our <code>.env</code> file.
      </p>
      <p>
        Then we set up our required scopes and a redirect URI for our client. You can use any number of scopes you like (at least one is needed).
        <a href="https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes" target="_blank">Click here</a> to view the list of all valid scopes.
        The redirect URI has the be the exact same as the one you entered in your discord developer portal. EXACTLY SAME.
      </p>
      <p>Then we simply export the client for use in our routes where the authentication will take place.</p>
      <template #actions>
        <div style="width: 100%; display: flex; flex-direction: row-reverse; justify-content: space-between">
          <vs-button size="small" square gradient to="/guide/authentication">Next: Authentication</vs-button>
          <vs-button size="small" color="danger" square gradient to="/guide/app-setup">Prev: Server Setup</vs-button>
        </div>
      </template>
    </do-card>
  </div>
</template>

<script>
export default {
  name: "the-client",
  head: {
    title: 'Prepare Client'
  },
  mounted() {
    PR.prettyPrint();
  }
}
</script>

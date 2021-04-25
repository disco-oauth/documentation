<template>
  <div class="center-all">
    <do-card>
      <template #header>
        <h2>Setting up express</h2>
      </template>
      <div class="center-stuff">
        <p>
          For our backend, we will be using <a href="https://expressjs.com/" target="_blank">ExpressJS</a> - an easy to use web framework.
          As for our frontend, we will be using <a href="https://expressjs.com/en/starter/generator.html" target="_blank">EJS</a>.
          To set all this up, we will simply use <a href="https://ejs.co/" target="_blank">Express Generator</a>.
        </p>
        <p>
          Make sure you have the latest version of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> installed and all environment variables properly set up.
          Then, use the following command in your command prompt or linux terminal or windows powershell to install Express Generator.
        </p>
        <code style="width: 100%;">$ npm i -g express-generator</code>
        <p>
          This will globally install express-generator so we can use it as a command line tool. Next, create a new folder for your app, for this example, we will just call it <code>Guide</code>.
          Open up a command prompt or linux terminal or windows powershell inside this folder. And use the following command to set up your express app.
        </p>
        <code style="width: 100%">$ express --view=ejs</code>
        <p>This will create all essential files and code for your initial server.</p>
      </div>
    </do-card>
    <do-card footer="true">
      <template #header>
        <h2>Adding dependencies</h2>
      </template>
      <p>Your basic express app is set up but I would recommend doing the following before getting to real work.</p>
      <p>Firstly, open up all files and remove all the comments. The generated code has a lot of comments that make the code look more complex than it actually is.</p>
      <p>Next, open up all JS files and replace all the <code>var</code> keywords with <code>const</code> keyword. Just a good practice.</p>
      <p>
        And finally, inside the command prompt or linux terminal or windows powershell inside the <code>Guide</code> folder,
        run the following command to install the latest version of <code>disco-oauth</code> and the <code>dotenv</code> package that will enable us to keep secrets in a <code>.env</code> file.
      </p>
      <code style="width: 100%">$ npm i -S disco-oauth dotenv</code>
      <p>And now you're all set up for coding your very own web app with discord OAuth!</p>
      <template #actions>
        <div style="width: 100%; display: flex; flex-direction: row-reverse; justify-content: space-between">
          <vs-button size="small" square gradient to="/guide/the-client">Next: Preparing the client</vs-button>
          <vs-button size="small" color="danger" square gradient to="/guide/discord-setup">Prev: Discord Setup</vs-button>
        </div>
      </template>
    </do-card>
  </div>
</template>

<script>
export default {
  name: "app-setup"
}
</script>

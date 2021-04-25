<template>
  <div class="center-all">
    <do-card>
      <template #header>
        <h2>User details</h2>
      </template>
      <div class="center-stuff">
        <p>
          We need to verify that the user is actually logged in and that the access token is valid before the user data is fetched.
          For this, we will first define a common handler for all routes that need fetching user data.
          We will call this handler <code>verify</code>.
        </p>
        <p>
          What this handler will basically do is, check for the existence of a user key.
          If one exists, it will check the key's validity.
          If the key is valid, the request is passed on to the next handler.
          If the key is invalid, the token is refreshed, a new key is generated and the request is passed on to the next handler.
          If any of these things fail, the user is logged out and is asked to log in again.
        </p>
        <p>
          Lets code this!
        </p>
        <p>
          Inside the <code>users.js</code> file under the <code>routes</code> directory, import the client
          (<code class="prettyprint">const client = require('../oauth');</code>) and remove all code after imports and router creation (except export) then add the following code.
        </p>
        <code style="width: 100%;" class="prettyprint">
          const verify = async (req, res, next) => {<br />
          &#8195;if (req.cookies['user-key']) {<br />
          &#8195;&#8195;try {<br />
          &#8195;&#8195;&#8195;const validity = client.checkValidity(req.cookies['user-key']);<br />
          &#8195;&#8195;&#8195;if (validity.expired) {<br />
          &#8195;&#8195;&#8195;&#8195;const newKey = await client.refreshToken(req.cookies['user-key']);<br />
          &#8195;&#8195;&#8195;&#8195;res.cookie('user-key', newKey);<br />
          &#8195;&#8195;&#8195;}<br />
          &#8195;&#8195;&#8195;next();<br />
          &#8195;&#8195;} catch (err) {<br />
          &#8195;&#8195;&#8195;res.cookie('user-key', 'deleted', { maxAge: -1 });<br />
          &#8195;&#8195;&#8195;res.redirect('/');<br />
          &#8195;&#8195;}<br />
          &#8195;} else res.redirect('/');<br />
          }
        </code>
        <p>Next up, we just want to use this new function in our requests. Lets make our <code>/user</code> route handler then. Inside the same file, write the following code:</p>
        <code style="width: 100%" class="prettyprint">
          router.get('/', verify, async (req, res) => {<br />
          &#8195;const user = await client.users.fetch(req.cookies['user-key']);<br />
          &#8195;res.render('home', { title: 'Disco-OAuth User', user });<br />
          });
        </code>
        <p>
          Since all routes in the <code>users.js</code> file are prefixed by the route <code>/user</code> due to our configuration in <code>app.js</code>,
          the <code>/</code> route inside this file will actually work for <code>/user</code>.
        </p>
        <p>
          The request first goes through the verify handler and then to the next handler which simply fetches the user details and renders the <code>home</code> view.
          Which displays the user details.
        </p>
        <vs-alert flat style="font-size: 1.35rem" color="warn">
          <p>Please note that disco-oauth caches all the user, guilds and connections details you fetch and prioritized fetching from the cache instead of discord API.</p>
          <p>To always fetch from the API, pass a second parameter to the fetch method and set it to <code>true</code>.</p>
          <code class="prettyprint" style="width: 100%">
            const user = await client.users.fetch(req.cookies['user-key'], true);
          </code>
        </vs-alert>
      </div>
    </do-card>
    <do-card>
      <template #header>
        <h2>Display user details</h2>
      </template>
      <div class="center-stuff">
        <p>
          Now that we are done with fetching user details, its time to display them to the user.
          For this, first create a new file named <code>home.ejs</code> in the <code>views</code> directory.
          Inside this file, add the following code.
        </p>
        <code class="prettyprint" style="width: 100%;">
          &lt;!DOCTYPE html&gt;<br />
          &lt;html lang="en"&gt;<br />
          &#8195;&lt;%- include('./head.ejs', { title }) %&gt;<br />
          &#8195;&lt;body&gt;<br />
          &#8195;&#8195;&lt;img src="&lt;%= user.avatarUrl(256) %&gt;" alt="&lt;%= user.username %&gt;" /&gt;<br />
          &#8195;&#8195;&lt;h1&gt;Welcome &lt;%= user.username %&gt;&lt;/h1&gt;<br />
          &#8195;&#8195;&lt;p&gt;You are currently logged in as &lt;strong&gt;&lt;%= user.tag %&gt;&lt;/strong&gt; and your ID is &lt;code&gt;&lt;%= user.id %&gt;&lt;/code&gt;&lt;/p&gt;<br />
          &#8195;&#8195;&lt;p&gt;Your account was created on &lt;strong&gt;&lt;%= user.createdAt.toUTCString() %&gt;&lt;/strong&gt;&lt;/p&gt;<br />
          &#8195;&#8195;&lt;p&gt;Nitro status: &lt;strong&gt;&lt;%= user.premiumType %&gt;&lt;/strong&gt;&lt;/p&gt;<br />
          &#8195;&#8195;&lt;p&gt;User flags: &lt;/p&gt;<br />
          &#8195;&#8195;&lt;ul&gt;<br />
          &#8195;&#8195;&lt;li&gt;&lt;%- user.userFlags.join('&lt;/li&gt;&lt;li&gt;') %&gt;&lt;/li&gt;<br />
          &#8195;&#8195;&lt;/ul&gt;<br />
          &#8195;&#8195;&lt;a href="/user/guilds"&gt;Click here to view your guilds&lt;/a&gt;&lt;br /&gt;&lt;br /&gt;<br />
          &#8195;&#8195;&lt;a href="/logout"&gt;Click here to log out&lt;/a&gt;<br />
          &#8195;&lt;/body&gt;<br />
          &lt;/html&gt;<br />
        </code>
        <p>
          Here, we simply display use the <nuxt-link to="/docs/5.1.0/user">user object</nuxt-link>'s properties to display the logged in user's
        </p>
        <ul style="width: 100%;">
          <li>Avatar</li>
          <li>Username</li>
          <li>Tag</li>
          <li>ID</li>
          <li>Time of account creation</li>
          <li>Type of nitro subscription</li>
          <li>Public flags</li>
        </ul>
      </div>
    </do-card>
    <do-card>
      <template #header>
        <h2>Guild details</h2>
      </template>
      <div class="center-stuff">
        <p>
          Just below the normal user route, we will add a new route, just the way we added the user route as shown below.
        </p>
        <code style="width: 100%;" class="prettyprint">
          router.get('/guilds', verify, async (req, res) => {<br />
          &#8195;const guilds = await client.guilds.fetch(req.cookies['user-key']);<br />
          &#8195;res.render('guilds', { title: 'Disco-OAuth Guilds', guilds });<br />
          });<br />
        </code>
        <p>
          This is absolutely similar to the user route we defined above,
          the request first goes to the verify handler and then the route handler simply gets the guilds then and then loads the <strong>guilds</strong> view.
        </p>
      </div>
    </do-card>
    <do-card footer="true">
      <template #header>
        <h2>Display guilds</h2>
      </template>
      <div class="center-stuff">
        <p>
          Create a new file named <code>guilds.ejs</code> under the <code>views</code> directory.
          And inside this new file, add the following code.
        </p>
        <code style="width: 100%;" class="prettyprint">
          &lt;!DOCTYPE html&gt;<br />
          &lt;html lang="en"&gt;<br />
          &#8195;&lt;%- include('./head.ejs', { title }) %&gt;<br />
          &#8195;&lt;body&gt;<br />
          &#8195;&#8195;&lt;h1&gt;GUILDS!&lt;/h1&gt;<br />
          &#8195;&#8195;&lt;p&gt;You are currently a member of the following guilds&lt;/p&gt;<br />
          &#8195;&#8195;&lt;ul&gt;<br />
          &#8195;&#8195;&#8195;&lt;% guilds.forEach(g =&gt; { %&gt;<br />
          &#8195;&#8195;&#8195;&#8195;&lt;li&gt;&lt;%= g.id %&gt; :: &lt;%= g.name %&gt;&lt;/li&gt;<br />
          &#8195;&#8195;&#8195;&lt;% }) %&gt;<br />
          &#8195;&#8195;&lt;/ul&gt;<br />
          &#8195;&#8195;&lt;a href="/user"&gt;Click here to view your own details.&lt;/a&gt;<br />
          &#8195;&lt;/body&gt;<br />
          &lt;/html&gt;
        </code>
        <p>This page lists all the guilds the logged in user is a member of. It displays their ID and name.</p>
      </div>
      <template #actions>
        <p style="font-size: 1.5rem">
          And now, you are done with your very own express app that uses disco-oauth!
          The final product of the guide is available as a live project <a href="https://replit.com/@TheDrone7/Guide" target="_blank">over here</a>.
        </p>
      </template>
    </do-card>
  </div>
</template>

<script>
export default {
  name: "details",
  head: {
    title: 'Fetching details'
  },
  mounted() {
    PR.prettyPrint();
  }
}
</script>

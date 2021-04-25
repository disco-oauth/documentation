<template>
  <div class="center-all">
    <do-card>
      <template #header>
        <h2>Set up auth variables</h2>
      </template>
      <div class="center-stuff">
        <p>
          Head to the <code>index.js</code> file inside the <code>routes</code> directory. The file would by default look something like this:
        </p>
        <code class="prettyprint" style="width: 100%">
          const express = require('express');<br />
          const router = express.Router();<br /><br />

          router.get('/', function(req, res, next) {<br />
            &#8195;res.render('index', { title: 'Express' });<br />
          });<br /><br />

          module.exports = router;<br />
        </code>
        <p>
          We are going to modify this, lets get started by importing our client, add the following code to the first line of the file.
        </p>
        <code class="prettyprint" style="width: 100%">
          const client = require('../oauth');
        </code>
        <p>
          Now that we have our client, remove the third parameter (<code>next</code>) from the <code>/</code> route handler since we won't be needing it.
          For our EJS parameters, alongside the title, pass an <code>auth</code> parameter that will contain the link for the user to verify at.
          You can also change the title itself to something that suits your needs, in our case, we change it to <strong>Disco-OAuth Guide</strong>.
          But before serving our ejs, we will store this new state in the user's cookies. This is to prevent CSRF attacks,
          Since each time the auth property is used, a new state is generated, 2 users will never have the same state.
        </p>
        <p>
          So, we first get the link and state from our client, store the new generated state in our user's cookies and send the link to the frontend.
          Our code should look something like this:
        </p>
        <code style="width: 100%" class="prettyprint">
          const client = require('../oauth');<br />
          const express = require('express');<br />
          const router = express.Router();<br /><br />

          router.get('/', function(req, res) {<br />
            &#8195;const { link, state } = client.auth;<br />
            &#8195;res.cookie('user-state', state);<br />
            &#8195;res.render('index', { title: 'Disco-OAuth Guide', link });<br />
          });<br /><br />

          module.exports = router;
        </code>
      </div>
    </do-card>
    <do-card>
      <template #header>
        <h2>Login route</h2>
      </template>
      <div class="center-stuff">
        <p>
          Once the user goes to the link generated above, the user is redirected to the redirect URI we set up.
          Here, we will first verify the received state and match it with the state stored in the user's cookies.
          If they match, the login request is valid and we use the authorization code returned by discord to login the user.
          To achieve this, just above the <code>module.exports = router;</code> line, add the following code:
        </p>
        <code style="width: 100%" class="prettyprint">
          router.get('/login', async (req, res) => {<br />
          &#8195;if (req.query.state && req.query.code && req.cookies['user-state']) {<br />
          &#8195;&#8195;if (req.query.state === req.cookies['user-state']) {<br />
          &#8195;&#8195;&#8195;const userKey = await client.getAccess(req.query.code).catch(console.error);<br />
          &#8195;&#8195;&#8195;res.cookie('user-state', 'deleted', { maxAge: -1 });<br />
          &#8195;&#8195;&#8195;res.cookie('user-key', userKey);<br />
          &#8195;&#8195;&#8195;res.redirect('/user');<br />
          &#8195;&#8195;} else {<br />
          &#8195;&#8195;&#8195;res.send('States do not match. Nice try hackerman!');<br />
          &#8195;&#8195;}<br />
          &#8195;} else {<br />
          &#8195;&#8195;res.send('Invalid login request.');<br />
          &#8195;}<br />
          });<br />
        </code>
        <p>
          Here, we are defining the handler for route <code>/login</code> since that is what we defined as our redirect URI.
          You may have to use some other route depending on what you set as your redirect URI.
        </p>
        <p>
          Inside the handler, we first verify that a state is returned in the callback URL alongside an authentication code and there should also be a state in the user's cookies.
          We then verify if the returned state matches the state stored in the cookies.
        </p>
        <p>
          If it's all valid, then the authentication code returned by the API is used for fetching the user's access token and a user key is generated to be stored as a session variable.
          In our case, we just store it as a cookie to keep it all simple. And then the user is redirect to the <code>/user</code> route which we will deal with in the next step.
          <vs-alert flat style="font-size: 1.35rem">
            Note that we make our handler async since the <code>getAccess</code> method is an async method and we await it's result.
            We also add a catch clause to it for error handling.
          </vs-alert>
        </p>
      </div>
    </do-card>
    <do-card>
      <template #header>
        <h2>The frontend</h2>
      </template>
      <p>
        Now that we are done with all the logic, we need to enable the user to actually be able to log in.
        For this, we first create a new file named <code>head.ejs</code> inside the <code>views</code> directory.
        Inside this file, add the following code:
      </p>
      <code style="width: 100%" class="prettyprint">
        &lt;head&gt;<br />
          &#8195;&lt;title&gt;&lt;%= title %&gt;&lt;/title&gt;<br />
          &#8195;&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"&gt;<br />
        &lt;/head&gt;
      </code>
      <p>
        Here, we just tell it to use a default head tag that uses a title provided by us and waterCSS.
        We will use this as a component in all our pages to quickly set up the head tag.
        Now go the the <code>index.ejs</code> file and remove it's <code>&lt;head&gt;</code> tag and replace it with the following code:
      </p>
      <code style="width: 100%" class="prettyprint">
        <%- include('./head.ejs', { title }) %>
      </code>
      <p>
        We import our new head tag this way in all our pages.
        Now, inside the body tag, add the following line of code:
      </p>
      <code style="width: 100%" class="prettyprint">
        &lt;a href="&lt;%= link %&gt;" target="_blank"&gt;Click here to log in&lt;/a&gt;
      </code>
      <p>
        This will display the link to our users so they can click on it to login to our app.
      </p>
    </do-card>
    <do-card footer="true">
      <template #header>
        <h2>Final modifications</h2>
      </template>
      <div class="center-stuff">
        <p>Before we move on to getting and using and displaying user data, lets make some polish changes.</p>
        <p>First of all, go to your <code>app.js</code> file in the root directory, there (after removing all the comments), around line 22, you'll see the following line of code: </p>
        <code style="width: 100%" class="prettyprint">
          app.use('/users', usersRouter);
        </code>
        <p>In that line, change <code>/users</code> to <code>/user</code>. This will allow us to keep our routes more organized.</p>
        <p>
          Next up, head to <code>index.js</code> inside the <code>routes</code> directory.
          We will make it so that if the user is logged in, the user gets taken to the logged in page directly instead of the page where the user has to log in.
          Next, if the user's access token has expired, we try to fetch a new access token using the refresh token.
          If we cannot refresh the access token, only then do we make the user log in again.
        </p>
        <p>
          Let's write the code for it! Change your <code>/</code> route handler to look as show below.
        </p>
        <code style="width: 100%;" class="prettyprint">
          router.get('/', async (req, res) => {<br />
          &#8195;if (req.cookies['user-key']) {<br />
          &#8195;&#8195;try {<br />
          &#8195;&#8195;&#8195;const keyValidity = client.checkValidity(req.cookies['user-key']);<br />
          &#8195;&#8195;&#8195;if (keyValidity.expired) {<br />
          &#8195;&#8195;&#8195;&#8195;const newKey = await client.refreshToken(req.cookies['user-key']);<br />
          &#8195;&#8195;&#8195;&#8195;res.cookie('user-key', newKey);<br />
          &#8195;&#8195;&#8195;&#8195;res.redirect('/user');<br />
          &#8195;&#8195;&#8195;} else {<br />
          &#8195;&#8195;&#8195;&#8195;res.redirect('/user');<br />
          &#8195;&#8195;&#8195;}<br />
          &#8195;&#8195;} catch (err) {<br />
          &#8195;&#8195;&#8195;console.error(err);<br />
          &#8195;&#8195;&#8195;const { link, state } = client.auth;<br />
          &#8195;&#8195;&#8195;res.cookie('user-key', 'deleted', { maxAge: -1 });<br />
          &#8195;&#8195;&#8195;res.cookie('user-state', state);<br />
          &#8195;&#8195;&#8195;res.render('index', { title: 'Disco-OAuth Guide', link });<br />
          &#8195;&#8195;}<br />
          &#8195;} else {<br />
          &#8195;&#8195;const { link, state } = client.auth;<br />
          &#8195;&#8195;res.cookie('user-state', state);<br />
          &#8195;&#8195;res.render('index', { title: 'Disco-OAuth Guide', link });<br />
          &#8195;}<br />
          });
        </code>
        <p>
          We first use the <strong>checkValidity</strong> method to verify if the user-key is still valid i.e. the user's access token has expired or not.
        </p>
        <p>
          If you pass an invalid user-key here i.e. the access token is not a proper jsonwebtoken signed using your client's secret, it throws an error.
          If we get this error, the user has probably manually added the key to their cookies or you have changed your client secret, either way, the user needs to login again.
        </p>
        <p>
          After that check is done, if the access token has not expired, the user is directly taken to the logged in page.
          If it has expired, the <code>refreshToken</code> method is used to attempt refreshing the token.
          If refresh is successful, user is taken to the logged in page.
          If it fails, user needs to login again.
        </p>
        <p>If there is no key in the cookies to begin with, the user needs to login anyways.</p>
      </div>
      <template #actions>
        <div style="width: 100%; display: flex; flex-direction: row-reverse; justify-content: space-between">
          <vs-button size="small" square gradient to="/guide/details">Next: Fetching Details</vs-button>
          <vs-button size="small" color="danger" square gradient to="/guide/the-client">Prev: Prepare Client</vs-button>
        </div>
      </template>
    </do-card>
  </div>
</template>

<script>
export default {
  name: "authentication",
  head: {
    title: 'Authentication'
  },
  mounted() {
    PR.prettyPrint();
  }
}
</script>

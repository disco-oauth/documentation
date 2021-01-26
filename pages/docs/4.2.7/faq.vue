<template>
  <v-row class='mt-4' align='center' justify='center'>
    <v-col cols='12' md='8'>
      <social-view :title='"FAQ - Disco-OAuth"' :description='"Frequently asked questions and commonly encountererd errors with disco-oauth."' />
      <doc-section title='FAQ'>
        <p>Here are some of the commonly asked questions, if you are encountering an issue, that isn't mentioned here, be sure to check out the <a href='https://github.com/TheDrone7/disco-oauth/issues' target='_blank'>GitHub issues board</a>.</p>
      </doc-section>
      <v-divider class='my-6' />
      <doc-section title='I keep getting&nbsp;<code>i.toLowerCase is not a function</code>&nbsp;error.'>
        <p>You are probably setting your scopes as an array. In the version <code>4.x.x</code>, the <code>Client.setScopes</code> method was redone to take in each scope as an individual parameter instead of an array of scopes</p>
        <p class='mb-0'>So, if your code is something like this: </p>
        <code class='d-block'>myClient.setScopes(['identify', 'guilds]);</code>
        <p class='mt-4 mb-0'>Then, change it to:</p>
        <code class='d-block'>myClient.setScopes('identify', 'guilds');</code>
      </doc-section>
      <v-divider class='my-6' />
      <doc-section title='I keep getting&nbsp;<code>Invalid access token</code>&nbsp;error.'>
        <p>This was my bad as a developer as the error message is not very clear. But this message appears when your request returns error code 401.</p>
        <p>This can take place when:</p>
        <ol>
          <li><b>Getting access token            :</b> The authorization code that you're sending to fetch the access token has expired.</li>
          <li><b>Getting users/guilds/connections:</b> The user-key that you're using to fetch the data (access token) has expired.</li>
        </ol>
        <p class='mt-8 mb-2'>You can also <code>catch</code> the promise rejection by adding the below code snipped at the end of each client method you use.</p>
        <code class='d-block'>
          /* myClient.someMethod(...) */ <br />
          &#8195;.catch(err => console.error(`${err.statusCode} :: ${err.message}`));
        </code>
        <p class='mt-6'>Now everytime you encounter an error, you can check the logs for the status code and match it <nuxt-link exact to='/docs/4.2.7/api-error'>here</nuxt-link> or <a href='https://discord.com/developers/docs/topics/opcodes-and-status-codes#http-http-response-codes' target='_blank'>the official discord API docs</a>.</p>
      </doc-section>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'faq',
  head: {
    title: 'FAQ'
  }
};
</script>

<style scoped>

</style>

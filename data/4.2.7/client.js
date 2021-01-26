export default {
  title: 'Client',
  desc: 'A class representing a Discord OAuth2 Client provided by the library.',
  name: 'Discord OAuth2 client',
  params: [
    {
      name: 'Client ID',
      desc: 'The client ID of your discord application.',
      example: '159985870458322944'
    }, {
      name: 'Client secret',
      desc: 'The client secret of your discord application.',
      example: 'et3MK****************x48cqYLEQ'
    }
  ],
  properties: [
    {
      name: 'authCodeLink',
      labels: ['read-only'],
      desc: 'A string generated after setting a value for scopes and redirect URI where the user needs to be redirected for authentication.',
      example: 'https://discord.com/api/oauth2/authorize?response_type=code&client_id=157730590492196864&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=https%3A%2F%2Fnicememe.website&prompt=consent',
      type: 'string'
    }, {
      name: 'redirectURI',
      labels: [],
      desc: 'A string that contains one of the redirect URIs of your discord app.',
      example: 'http%3A%2F%2Flocalhost%3A3000%2Flogin',
      type: 'string'
    }, {
      name: 'scopes',
      labels: [],
      desc: 'An array of <a href="https://discordapp.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes" target="_blank">Discord OAuth2 scopes</a>.',
      example: '[\'identify\', \'guilds\']',
      type: 'array',
      arrayOf: 'string'
    }
  ],
  methods: [
    {
      name: 'getAccess',
      labels: ['async'],
      desc: 'Gets the access token from discord API and returns a user-specific <code>key</code>.',
      parameters: [
        {
          name: 'code',
          type: 'string',
          desc: 'The authorization code from the request querystring received at the endpoint specified as the redirect URI.'
        }
      ],
      example: 'myClient.getAccess(req.query.code); // This actually works if you\'re using express',
      type: 'promise',
      promised: 'string',
      returns: 'A user-specific key, a <a href="https://jwt.io/" target="_blank">JWT</a> of the user\'s <a href="https://discordapp.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response" target="_blank">access token response</a>.'
    }, {
      name: 'getUser',
      labels: ['async'],
      desc: 'Gets a user from discord whose user-specific key is provided.',
      parameters: [
        {
          name: 'key',
          type: 'string',
          desc: 'The user-specific <code>key</code> received after getting access.',
        }
      ],
      example: 'myClient.getUser(req.cookies.userKey);',
      type: 'promise',
      promised: 'internal',
      internal: 'user',
      version: '4.2.7',
      returns: 'The user whose user-specific key was provided.'
    }, {
      name: 'getGuilds',
      labels: ['async'],
      desc: 'Gets a user\'s guilds from discord whose user-specific key is provided.',
      parameters: [
        {
          name: 'key',
          type: 'string',
          desc: 'The user-specific <code>key</code> received after getting access.',
        }
      ],
      example: 'myClient.getGuilds(req.cookies.userKey);',
      type: 'promise',
      promised: 'internal',
      internal: 'guilds',
      version: '4.2.7',
      returns: 'The guilds of the user whose user-specific key was provided.'
    }, {
      name: 'getConnections',
      labels: ['async'],
      desc: 'Gets a user\'s connections from discord whose user-specific key is provided.',
      parameters: [
        {
          name: 'key',
          type: 'string',
          desc: 'The user-specific <code>key</code> received after getting access.',
        }
      ],
      example: 'myClient.getConnections(req.cookies.userKey);',
      type: 'promise',
      promised: 'internal',
      internal: 'connections',
      version: '4.2.7',
      returns: 'The connections of the user whose user-specific key was provided.'
    }, {
      name: 'refreshAccess',
      labels: ['async'],
      desc: 'Refreshes a user\'s access token in case the old one has expired (or is about to expire).',
      parameters: [
        {
          name: 'key',
          type: 'string',
          desc: 'The user-specific <code>key</code> received after getting access first.',
        }
      ],
      example: 'myClient.refreshAccess(req.cookies.userKey);',
      type: 'promise',
      promised: 'string',
      returns: 'A new user-specific <code>key</code>.'
    }, {
      name: 'setRedirect',
      labels: [],
      desc: 'Sets the redirect URI that the client is expecting to receive the authorization code at.',
      parameters: [
        {
          name: 'uri',
          type: 'string',
          desc: 'The new redirect URI.',
        }
      ],
      example: 'myClient.setRedirect(\'http%3A%2F%2Flocalhost%3A3000%2Flogin\');',
      type: 'internal',
      internal: 'client',
      version: '4.2.7',
      returns: 'The client with the redirect URI now set.'
    }, {
      name: 'setScopes',
      labels: [],
      desc: 'Sets the scopes that the client is expecting to receive the authorization code for.',
      parameters: [
        {
          name: '...scopes',
          type: 'array',
          arrayOf: 'string',
          desc: 'An array of scopes or each scope as a different parameter.',
        }
      ],
      example: 'myClient.setScopes(\'identify\', \'guilds\');',
      type: 'internal',
      internal: 'client',
      version: '4.2.7',
      returns: 'The client with the scopes now set.'
    }
  ]
}

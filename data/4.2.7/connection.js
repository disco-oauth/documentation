export default {
  title: 'Connection',
  desc: 'A class representing a discord user\'s connection.',
  name: 'Authorized discord user\'s connection',
  params: [
    {
      name: 'Connection data',
      desc: 'The connection data returned by the discord API.',
      example: '{ "id": "38010647", ... }'
    }
  ],
  properties: [
    {
      name: 'id',
      labels: ['read-only'],
      desc: 'The connection\'s unique ID.',
      example: '38010647',
      type: 'string'
    }, {
      name: 'name',
      labels: ['read-only'],
      desc: 'The connection\'s public name.',
      example: 'TheDrone7',
      type: 'string'
    }, {
      name: 'service',
      labels: ['read-only'],
      desc: 'The service this connection connects the discord user to.',
      example: 'GitHub',
      type: 'string'
    }, {
      name: 'isVerified',
      labels: ['read-only'],
      desc: 'Whether the connection is verified.',
      example: 'true',
      type: 'boolean'
    }, {
      name: 'friendSync',
      labels: ['read-only'],
      desc: 'Whether the friends from the service are being synced with the user\'s discord friends.',
      example: 'false',
      type: 'boolean'
    }, {
      name: 'showActivity',
      labels: ['read-only'],
      desc: 'Whether activity from this connection is displayed on user\'s profile.',
      example: 'true',
      type: 'boolean'
    }, {
      name: 'isPublic',
      labels: ['read-only'],
      desc: 'Whether the connection is publicly displayed on the user\'s profile.',
      example: 'false',
      type: 'boolean'
    }
  ],
  methods: []
}

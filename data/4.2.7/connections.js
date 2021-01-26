export default {
  title: 'Connections',
  desc: 'A collection of discord <a href="/docs/4.2.7/connection">Connection</a> objects.',
  classExtends: {
    type: 'map-type'
  },
  name: 'Authorized discord user\'s connections',
  params: [
    {
      name: '...connections',
      desc: 'The array of connection data returned by the discord API.',
      example: '[{ "id": "38010647", ... }, ...]'
    }
  ],
  properties: [],
  methods: [
    {
      name: 'toJSON',
      labels: [],
      desc: 'Converts the map into a JSON object.',
      parameters: [],
      example: 'myConnections.toJSON();',
      type: 'object-type',
      returns: 'The generated JSON object..'
    }
  ]
}

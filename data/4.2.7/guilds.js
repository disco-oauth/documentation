export default {
  title: 'Guilds',
  desc: 'A collection of discord <a href="/docs/4.2.7/guild">Guild</a> objects.',
  classExtends: {
    type: 'map-type'
  },
  name: 'Authorized discord user\'s guilds',
  params: [
    {
      name: '...guilds',
      desc: 'The array of guild data returned by the discord API.',
      example: '[{ "id": "436813926735413248", ... }, ...]'
    }
  ],
  properties: [],
  methods: [
    {
      name: 'toJSON',
      labels: [],
      desc: 'Converts the map into a JSON object.',
      parameters: [],
      example: 'myGuilds.toJSON();',
      type: 'object-type',
      returns: 'The generated JSON object..'
    }
  ]
}

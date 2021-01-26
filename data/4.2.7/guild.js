export default {
  title: 'Guild',
  desc: 'A class representing a discord guild.',
  name: 'Authorized discord user\'s guild',
  params: [
    {
      name: 'Guild data',
      desc: 'The guild data returned by the discord API.',
      example: '{ "id": "436813926735413248", ... }'
    }
  ],
  properties: [
    {
      name: 'id',
      labels: ['read-only'],
      desc: 'The guild\'s unique ID.',
      example: '436813926735413248',
      type: 'string'
    }, {
      name: 'name',
      labels: ['read-only'],
      desc: 'The guild\'s public name.',
      example: 'D-R-O-N-E',
      type: 'string'
    }, {
      name: 'iconHash',
      labels: ['read-only'],
      desc: 'The guild\'s icon image hash.',
      example: '6adc151f1df1bc98d82db947c4a408e7',
      type: 'string'
    }, {
      name: 'features',
      labels: ['read-only'],
      desc: 'The guild\'s features in use.',
      example: '[\'VANITY_URL\', \'COMMUNITY\']',
      type: 'array',
      arrayOf: 'string'
    }, {
      name: 'isOwner',
      labels: ['read-only'],
      desc: 'Whether the authorized user is the owner of this guild.',
      example: 'false',
      type: 'boolean'
    }, {
      name: 'permissions',
      labels: ['read-only'],
      desc: 'The permissions that the authorized user has in this guild.',
      example: '[\'CHANGE_NICKNAME\', \'MANAGE_NICKNAMES\']',
      type: 'array',
      arrayOf: 'string'
    }, {
      name: 'createdTimestamp',
      labels: ['read-only'],
      desc: 'The user\'s account creation timestamp.',
      example: '1509430417000',
      type: 'number'
    }, {
      name: 'createdAt',
      labels: ['read-only'],
      desc: 'The date-time object of the time of creation of the user\'s account.',
      example: 'Tue, 31 Oct 2017 11:43:37 GMT',
      type: 'date'
    }
  ],
  methods: [
    {
      name: 'iconUrl',
      labels: [],
      desc: 'Generates a link to the guild\'s icon of desired size.',
      parameters: [
        {
          name: 'size',
          type: 'number',
          desc: 'The desired size of the icon image (in pixels). Defaults to 512px.'
        }
      ],
      example: 'myGuild.iconUrl(128);',
      type: 'string',
      returns: 'The generated link to the guild\'s icon image.'
    }
  ]
}

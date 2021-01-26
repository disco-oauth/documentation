export default {
  title: 'User',
  desc: 'A class representing a discord user.',
  name: 'Authorized discord user',
  params: [
    {
      name: 'User data',
      desc: 'The user data returned by the discord API.',
      example: '{ "id": "80351110224678912", ... }'
    }
  ],
  properties: [
    {
      name: 'username',
      labels: ['read-only'],
      desc: 'The user\'s discord username.',
      example: 'TheDrone7',
      type: 'string'
    }, {
      name: 'locale',
      labels: ['read-only'],
      desc: 'The user\'s prefered locale.',
      example: 'en-US',
      type: 'string'
    }, {
      name: 'isMFAEnabled',
      labels: ['read-only'],
      desc: 'Whether the user has enabled 2-factor authentication.',
      example: 'true',
      type: 'boolean'
    }, {
      name: 'discriminator',
      labels: ['read-only'],
      desc: 'The user\'s 4-digit discriminator.',
      example: '1624',
      type: 'number'
    }, {
      name: 'id',
      labels: ['read-only'],
      desc: 'The user\'s discord ID.',
      example: '374886124126208000',
      type: 'string'
    }, {
      name: 'emailId',
      labels: ['read-only'],
      desc: 'The user\'s E-Mail ID.',
      example: 'john.doe@example.com',
      type: 'string'
    }, {
      name: 'emailVerified',
      labels: ['read-only'],
      desc: 'Whether the user has verified their E-Mail.',
      example: 'true',
      type: 'boolean'
    }, {
      name: 'avatarHash',
      labels: ['read-only'],
      desc: 'The user\'s discord avatar hash.',
      example: '4f898c82d018f1f9ddd478229d36f943',
      type: 'string'
    }, {
      name: 'userFlags',
      labels: ['read-only'],
      desc: 'A list of flags displayed on the user\'s profile.',
      example: '[\'HypeSquad House of Balance\']',
      type: 'array',
      arrayOf: 'string'
    }, {
      name: 'premiumType',
      labels: ['read-only'],
      desc: 'The type of user\'s premium subscription.',
      example: 'Nitro',
      type: 'string'
    }, {
      name: 'bot',
      labels: ['read-only'],
      desc: 'Whether the user is a bot user.',
      example: 'true',
      type: 'boolean'
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
      name: 'avatarUrl',
      labels: [],
      desc: 'Generates a link to the user\'s avatar of desired size.',
      parameters: [
        {
          name: 'size',
          type: 'number',
          desc: 'The desired size of the avatar image (in pixels). Defaults to 512px.'
        }
      ],
      example: 'myUser.avatarUrl(1024);',
      type: 'string',
      returns: 'The generated link to the user\'s avatar image.'
    }
  ]
}

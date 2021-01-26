export default {
  title: 'APIError',
  desc: 'A class representing the errors received from discord\'s API.',
  classExtends: {
    type: 'error'
  },
  name: 'Discord API error',
  params: [
    {
      name: 'statusCode',
      desc: 'The status code of the response received from the discord API after making the request.',
      example: '401'
    }
  ],
  properties: [{
    name: 'statusCode',
    labels: ['read-only'],
    desc: 'The status code returned by discord API in the response.',
    example: '500',
    type: 'number'
  }],
  methods: []
}

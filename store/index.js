const versions = {};

export const state = () => ({
  version: '5.1.0',
  versions: {
    '5.1.0': {
      'General': {
        'get-started': 'Get Started',
        'faq': 'FAQ'
      },
      'Classes': {
        'api-error': 'APIError',
        'client': 'Client',
        'collection': 'Collection',
        'connection': 'Connection',
        'connections': 'Connections',
        'connections-collection': 'ConnectionsCollection',
        'guild': 'Guild',
        'guilds': 'Guilds',
        'guilds-collection': 'GuildsCollection',
        'user': 'User',
        'user-collection': 'UserCollection'
      }
    }
  },
  docFiles: {}
});

export const mutations = {
  change(state, v) {
    state.version = v;
  },
  readFiles(state, filesObj) {
    state.docFiles = filesObj;
  }
}

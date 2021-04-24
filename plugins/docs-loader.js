const fs = require('fs');

const versions = fs.readdirSync('docs');
const docsData = {};
versions.forEach(v => {
  docsData[v] = {};
  const docFiles = fs.readdirSync('docs/' + v).map(f => f.substring(0, f.lastIndexOf('.')));
  docFiles.forEach(f => {
    docsData[v][f] = JSON.parse(fs.readFileSync('docs/' + v + '/' + f + '.json').toString());
  });
});

export default (ctx) => {
  ctx.store.commit('readFiles', docsData);
}

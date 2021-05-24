//
// Entities
//

const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res) => {
  res.json(require('../config').server.hello);
});

module.exports.init = (config, server, database) => {
  console.log('Loading entities...');

  fs.readdirSync('./src/entities', { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(dir => {
      const name = dir.name;
      console.log('. ' + name);
      const entity = require('./' + name);
      entity.init(config, server, database);
      router.use('/' + name, entity.routes);
    });
  console.log('OK');
};

module.exports.router = router;
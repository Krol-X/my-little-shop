//
// Entities
//

const router = require('express').Router();
const fs = require('fs');
const { gql } = require('apollo-server');
const { buildScheme } = require('../tools');

router.get('/', (req, res) => {
  res.json(require('../config').server.hello);
});

module.exports.init = () => {
  console.log('Loading entities...');

  let schemes = [], resolvers = {};

  fs.readdirSync('./src/entities', { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(dir => {
      const name = dir.name;
      console.log('. ' + name);
      const { scheme, controller } = require('./' + name);
      schemes.push(scheme);
      resolvers = Object.assign(resolvers, controller);
    });
  console.log('OK');

  const scheme = buildScheme(schemes);
  console.log(`\nScheme is:\n${scheme}\n\n`);
  return { typeDefs: gql(scheme), resolvers: resolvers };
};

module.exports.router = router;
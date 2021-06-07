//
// Tools
//

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports.buildScheme = (schemes) => {
  let result = '', queries = '', mutations = '';

  schemes.forEach(x => {
    result = result.concat(x.root, '\n');
    queries = queries.concat(x.query, '\n');
    mutations = mutations.concat(x.mutation, '\n');
  });

  return result.concat(
    queries !== ''? `\ntype Query { ${queries}}`: '',
    mutations !== ''? `\ntype Mutation { ${mutations}}`: ''
  );
};


module.exports.hashPassField = (root) => {
  let result = Object.assign({}, root);
  if (!!result && !!result.password) {
    result.password = bcrypt.hashSync(result.password, 7);
  }
  return result;
};

module.exports.checkPass = (pass, hash) => {
  return bcrypt.compareSync(pass, hash);
};

const secret = config.server.secret_key;

module.exports.newToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

module.exports.fromToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};
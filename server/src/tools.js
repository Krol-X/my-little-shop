//
// Tools
//

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

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

module.exports.hashPass = async (root) => {
  if (!!root.password) {
    root.password = await bcrypt.hash(root.password, 7);
  }
  return root;
};

module.exports.genToken = (payload) => {
  return jwt.sign(payload, config.server.secret_key, { expiresIn: '24h' });
};

module.exports.decodeToken = (token) => {
  try {
    return jwt.verify(token, config.server.secret_key);
  } catch (err) {
    return null;
  }
};
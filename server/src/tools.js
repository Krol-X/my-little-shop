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

module.exports.hashPass = (pass) => {
  return bcrypt.hashSync(pass, 7);
};

module.exports.hashPassField = (root) => {
  if (!!root && !!root.password) {
    root.password = bcrypt.hashSync(root.password, 7);
  }
  return root;
};

module.exports.hashCheck = (pass, hash) => {
  return bcrypt.compareSync(pass, hash);
};

module.exports.fixFields = (info) => {
  let result = !!info._doc? info._doc: info;
  result = Object.assign({}, result);
  if (!!info._id) result.id = info._id;
  delete result.password;
  return result;
};

const secret = config.server.secret_key;

module.exports.genToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

module.exports.decodeToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};
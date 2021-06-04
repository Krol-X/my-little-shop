//
// Entity User
//

const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: String,
  role: String,
  password: String,
  regdate: { type: String, default: Date.now }
});

module.exports.model = model('User', schema);
module.exports.scheme = require('./scheme');
module.exports.controller = require('./controller');
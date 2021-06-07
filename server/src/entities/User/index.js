//
// Entity User
//

const { Schema, model } = require('mongoose');

const mongoSchema = new Schema({
  name: { type: String, unique: true },
  password: String,
  role: String,
  regdate: { type: String, default: Date.now }
}, { _id: false }); // todo: disable _id?

module.exports.model = model('User', mongoSchema);

module.exports.scheme = require('./scheme');
module.exports.controller = require('./controller');
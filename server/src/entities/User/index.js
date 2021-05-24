//
// Entity User
//

const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true, min: 1, max: 64 },
  role: { type: String, required: true, min: 1, max: 64 },
  email: { type: String, required: true, min: 6, max: 64 },
  passhash: { type: String },
  regdate: { type: String, default: Date.now }
});

module.exports = {
  init: require('./controller').init,
  model: model('User', schema),
  routes: require('./routes')
};
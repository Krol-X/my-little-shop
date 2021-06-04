//
// Entity User
//

const { Schema, model } = require('mongoose');
const { defFromFields } = require('../../helpers');

const fields = {
  name: '',
  role: '',
  email: '',
  passhash: '',
  regdate: Date.now
};

const schema = new Schema(defFromFields(fields, {
  name: { required: true },
  email: { required: true },
  regdate: { type: String, default: Date.now }
}));

module.exports.fields = fields;
module.exports.model = model('User', schema);
module.exports.service = require('./service');
module.exports.controller = require('./controller');
module.exports.validator = require('./validator');
module.exports.routes = require('./routes');
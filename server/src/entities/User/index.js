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
  regdate: { type: String }
}));

module.exports = {
  fields: fields,
  model: model('User', schema),
  controller: require('./controller'),
  routes: require('./routes'),
  service: require('./service'),
  validator: require('./validator')
};
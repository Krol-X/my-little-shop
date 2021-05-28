//
// Entity User: service
//

const { filterFields, changeFields } = require('../../helpers');
const { model, fields } = require('./index');

module.exports.UserAdd = (user) => {
  const item = filterFields(user, fields);
  return model.collection.insertOne(item);
};

module.exports.UserList = (filter) => model.find(
  filterFields(filter, fields, true)
);

module.exports.UserInfo = (id) => model.findById(id);

module.exports.UserChange = (id, user) => model.findById(id)
  .then(item =>
    model.updateOne(item, changeFields(item.model(), user))
  );

module.exports.UserRemove = (id) => model.findByIdAndRemove(id);
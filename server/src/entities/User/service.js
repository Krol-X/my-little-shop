//
// Entity User: service
//

const { filterFields } = require('../../helpers');
const { model, fields } = require('./index');

module.exports.UserAdd = async (user) => {
  const item = filterFields(user, fields);
  const result = model.collection.insertOne(item);
  return { item: item, result: result };
};

module.exports.UserList = async (filter) => {
  // todo
};

module.exports.UserInfo = async (id) => {
  // todo
};

module.exports.UserChange = async (user) => {
  // todo
};

module.exports.UserDelete = async (id) => {
  // todo
};
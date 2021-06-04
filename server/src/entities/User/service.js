//
// Entity User: service
//

const { filterFields, changeFields } = require('../../helpers');
const { model, fields } = require('./index');

module.exports.UserAdd = user => {
  const item = filterFields(user, fields);
  return model.collection.insertOne(item);
};

module.exports.UserList = filter => model.find(() =>
  filterFields(filter, fields, true)
);

module.exports.UserInfo = ({ _id }) => model.findById(_id);

// module.exports.UserChange = user => model.findById(user._id)
//   .then(item =>
//     model.updateOne(item, changeFields(filterFields(item, fields), user))
//   );
module.exports.UserChange = (id, user) => model.findByIdAndUpdate(id, filterFields(user, fields));

module.exports.UserRemove = ({ _id }) => model.findByIdAndRemove(_id);
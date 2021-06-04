//
// Entity User: controller
//

const { model } = require('./index');

module.exports = {

  User: {
    GetMany: (filter) => model.find(filter)
  }

};
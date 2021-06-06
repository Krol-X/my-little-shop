//
// Entity User: controller
//

const { model } = require('./index');
const { hashPass } = require('../../tools');

module.exports = {

  Query: {

    'getUsers': (parent, { filter }) => model.find(filter)

  },


  Mutation: {

    'addUser': async (_, { user }) => {
      const item = new model(user);
      return await model.collection.insertOne(await hashPass(item)).then(it => it.ops[0]);
    },

    'setUserById': async (_, { id, fields }) =>
      await model.findByIdAndUpdate(id, await hashPass(fields), { new: true }).then(it => it),

    'delUserById': async (_, { id }) =>
      await model.findByIdAndRemove(id).then(it => it)

  }

};
//
// Entity User: controller
//

const config = require('../../config');
const { model } = require('./index');
const {
  hashPassField, checkPass, newToken, fromToken
} = require('../../tools');

const logic = {};

//  addUser [v]
logic.addUser = async (isAdmin, info) => {
  let result = null;
  try {
    if (isAdmin) {
      let user = await model.collection.insertOne(
        new model(hashPassField(info))
      );
      if (!!user) result = user.ops[0];
    }
  } catch (err) {
    console.log(`addUser: ${err}`);
  }
  return result;
};

//  findUser [v]
logic.findUser = async (isAdmin, filter) =>
  !!isAdmin? await model.find(filter || {}): null;

//  findOneUser [v]
logic.findOneUser = async (isAdmin, filter) =>
  !!isAdmin? await model.findOne(filter || {}): null;

//  setUser [v]
logic.setUser = async (isAdmin, name, info) =>
  !!isAdmin? await model.findOneAndUpdate(
    { 'name': name }, info, { new: true }
  ): null;

//  delUser [v]
logic.delUser = async (isAdmin, name) =>
  !!isAdmin && isAdmin.name !== name?
    await model.findOneAndRemove({ 'name': name }): null;

//  registerUser [v]
//  1. Try to register
//  2. Login
logic.registerUser = async (_, info) => {
  info.role = 'User';
  let new_user = await logic.addUser(true, info);
  return !!new_user? await logic.loginUser(false, info): null;
};

//  loginUser [v]
//  1. Find user
//  2. Check it password
//  3. Generate token
//  4. Return name+token
logic.loginUser = async (_, { name, password }) => {
  let user = await logic.findOneUser(true, { name: name });
  if (!!user && checkPass(password, user.password)) {
    let token = newToken({ name: name });
    return { 'name': name, 'token': token };
  } else {
    return null;
  }
};

//  authUser [v]
//  1. Decode token
//  2. Return found info about user
logic.authUser = async (_, token) => {
  let data = fromToken(token);
  if (!!data) {
    return await logic.findOneUser(true, { name: data.name });
  } else {
    return null;
  }
};

const logic_call = async (token, fun, ...args) => {
  let isAdmin = false;
  if (token !== undefined) {
    let data = fromToken(token);
    if (!!data) {
      let user = await logic.findOneUser(true, { name: data.name });
      if (!!user && user.role === 'Admin') isAdmin = Object.assign({}, user._doc);
    }
  }
  if (config.debug.print_logic) {
    console.log(`Call: ${fun}`);
    console.log(`isAdmin: ${isAdmin}`);
    console.log(`args: `, args);
  }
  let result = await logic[fun](isAdmin, ...args);
  if (config.debug.print_logic) {
    console.log(`Result: ${result}`);
    console.log();
  }
  return result;
};


module.exports = {

  Query: {
    'getUsers': async (_, { t, filter }) =>
      logic_call(t, 'findUser', filter),

    // Public Methods
    'loginUser': async (_, { info }) =>
      logic_call(undefined, 'loginUser', info),
    'authUser': async (_, { token }) =>
      logic_call(undefined, 'authUser', token)
  },

  Mutation: {
    'addUser': async (_, { t, info }) =>
      logic_call(t, 'addUser', info),
    'setUser': async (_, { t, name, info }) =>
      logic_call(t, 'setUser', name, info),
    'delUser': async (_, { t, name }) =>
      logic_call(t, 'delUser', name),

    // Public Methods
    'registerUser': async (_, { info }) =>
      logic_call(undefined, 'registerUser', info)
  }

};


//
// Generate admin if no users
//
logic.findUser(true).then(async users => {
  if (users.length === 0) {
    const cfg = config.server;
    console.log(`
Generating admin: ${cfg.default_admin}
Password: ${cfg.default_admin_pass}
`);
    await logic.addUser(true, {
      name: cfg.default_admin,
      password: cfg.default_admin_pass,
      role: 'Admin'
    });
  }
});
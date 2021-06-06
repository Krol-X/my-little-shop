//
// Entity User: controller
//

const config = require('../../config');
const { model } = require('./index');
const {
  hashPassField, hashCheck,
  genToken, decodeToken,
  fixFields
} = require('../../tools');

const logic = {
  addUser: async (info) => {
    const item = new model(info);
    return await model.collection.insertOne(hashPassField(item))
      .then(it => it.ops[0]);
  },
  findUser: (filter) => {
    return model.find(filter || {});
  },
  findOneUser: (filter) => {
    return model.findOne(filter || {});
  },
  findOneUserById: (id) => {
    return model.findById(id);
  },
  setUserById: async (id, info) => {
    return await model.findByIdAndUpdate(id,
      hashPassField(info), { new: true })
      .then(it => it);
  },
  delUserById: async (id) => {
    return await model.findByIdAndRemove(id).then(it => it);
  },
  login: async (info) => {
    const user = await logic.findOneUser(fixFields(info));
    if (user && hashCheck(info.password, user.password)) {
      user.token = genToken(fixFields(user));
      return user;
    }
    return null;
  },
  auth: async (token) => {
    const data = decodeToken(token);
    if (data) data.token = token;
    return data;
  }
};

logic.findOneUserById('60bd2681473fb11550151343')
  .then(x => console.log(x));

const checkAdmin = async (token) => {
  const data = decodeToken(token);
  if (data) {
    // todo: Strange bug
    //console.log(data._id)
    await logic.findOneUserById(data._id).then(
      user =>
        !!user && data.role === 'Admin'? data: false
    );
  }
  return false;
};

// Generate admin if no users
logic.findUser().then(async users => {
  if (users.length === 0) {
    const cfg = config.server;
    console.log(`
Generating admin: ${cfg.default_admin}
Password: ${cfg.default_admin_pass}
`);
    await logic.addUser({
      name: cfg.default_admin,
      password: cfg.default_admin_pass,
      role: 'Admin'
    });
  }
});


module.exports = {

  Query: {
    'getUsers': async (parent, { t, filter }) => {
      if (!!await checkAdmin(t)) return logic.findUser(filter);
    },

    // Public Methods
    'loginUser': async (_, { info }) => {
      return await logic.login(info);
    },
    'authUser': async (_, { token }) => {
      return await logic.auth(token);
    }
  },

  Mutation: {
    'addUser': async (_, { t, info }) => {
      if (!!await checkAdmin(t)) return await logic.addUser(info);
    },
    'setUserById': async (_, { t, id, info }) => {
      if (!!await checkAdmin(t)) return await logic.setUserById(id, info);
    },
    'delUserById': async (_, { t, id }) => {
      let admin = await checkAdmin(t);
      console.log('delUserById', admin, id);
      //if (admin && admin.id !== id) return await logic.delUserById(id);
    },

    // Public Methods
    'registerUser': async (_, { info }) => {
      info.role = 'User';
      if (await logic.addUser(info)) {
        return await logic.login(info);
      }
      return null;
    }
  }

};
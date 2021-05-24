//
// Entity User: controller
//

const { service } = require('./index');

module.exports.init = (config, server, database) => {
  // pass
};

module.exports.Add = (req, res, next) => {
  service.UserAdd(req.body).then(
    ({ item, result }) =>
      result.then(res.json(item)).catch(next)
  );
};

module.exports.List = (req, res, next) => {
  service.UserList(req.body).then(
    ({ items, result }) =>
      result.then(res.json(items)).catch(next)
  );
};

module.exports.Info = (req, res, next) => {
  service.UserInfo(req.body).then(
    ({ item, result }) =>
      result.then(res.json(item)).catch(next)
  );
};

module.exports.Change = (req, res, next) => {
  service.UserChange(req.body).then(
    ({ item, result }) =>
      result.then(res.json(item)).catch(next)
  );
};

module.exports.Delete = (req, res, next) => {
  service.UserDelete(req.body).then(
    ({ item, result }) =>
      result.then(res.json(item)).catch(next)
  );
};
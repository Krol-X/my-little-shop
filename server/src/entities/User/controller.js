//
// Entity User: controller
//

const { service } = require('./index');
const { ApiError } = require('../../error');

module.exports.init = (config, server, database) => {
  // pass
};

const controller = (func, req, res, next, { params, cb } = { params: [] }) => {
  func(...params).then(
    cb || (result => res.json(result))
  ).catch(
    error => next(ApiError.internal(error))
  )
};

module.exports.Add = (req, res, next) =>
  controller(service.UserAdd, req, res, next, {
    cb: result => res.json(result.ops[0])
  });

module.exports.List = (req, res, next) =>
  controller(service.UserList, req, res, next);

module.exports.Info = (req, res, next) =>
  controller(service.UserInfo, req, res, next, {
    params: [req.params.id]
  });

module.exports.Change = (req, res, next) => {
  controller(service.UserChange, req, res, next, {
    params: [req.params.id, req.body]
  });
};

module.exports.Delete = (req, res, next) =>
  controller(service.UserRemove, req, res, next);
//
// Entity User: controller
//

//const { service } = require('./index');
const service = require('./service');
const { ApiError } = require('../../error');

module.exports.init = (config, server, database) => {
  // pass
};

const controller = (f, req, res, next) => {
  f(req.body).then(
    result => res.json(result)
  ).catch(
    error => {
      console.log(`${f.name} error: ${error}`);
      next(ApiError.badRequest(error));
    }
  );
};

module.exports.Add = (req, res, next) =>
  controller(service.UserAdd, req, res, next);

module.exports.List = (req, res, next) =>
  controller(service.UserList, req, res, next);

module.exports.Info = (req, res, next) =>
  controller(service.UserInfo, req, res, next);

module.exports.Change = (req, res, next) =>
  controller(service.UserChange, req, res, next);

module.exports.Delete = (req, res, next) =>
  controller(service.UserRemove, req, res, next);
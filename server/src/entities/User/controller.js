//
// Entity User: controller
//

module.exports.init = (config, server, database) => {
  console.log('> User init');
};

module.exports.Add = (req, res) => {
  res.json('User create');
};

module.exports.List = (req, res) => {
  res.json('Users list');
};

module.exports.Info = (req, res) => {
  res.json(`User ${req.params.id} info`);
};

module.exports.Change = (req, res) => {
  res.json(`User ${req.params.id} change`);
};

module.exports.Delete = (req, res) => {
  res.json(`User ${req.params.id} delete`);
};
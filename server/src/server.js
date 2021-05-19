module.exports.init = (config) => {
  try {
    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser');

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(config.server.routePrefix, require('./routes.js'));

    module.exports.app = app;
    return app;
  } catch (err) {
    console.log('Cannot initialize server: ', err);
    throw err;
  }
};

module.exports.start = async (app, config) => {
  const port = config.server.port;

  try {
    await app.listen(port);
    console.log(`Server is up at port http://localhost:${port}`);
  } catch (err) {
    console.log(`Cannot up at port ${port} server: ${err}`);
    throw err;
  }
};
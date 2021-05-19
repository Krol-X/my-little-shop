const config = require('./config');
const database = require('./database');
const server = require('./server');

const app = server.init(config);

server.start(app, config);
app.listen();
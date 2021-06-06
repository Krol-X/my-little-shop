//
// index.js
//

const config = require('./config');
const database = require('./database');
const server = require('./server');

database.init(config);
const app = server.init(config);

await server.start(app, config);
app.listen();
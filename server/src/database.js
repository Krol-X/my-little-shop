//
// Database initialization
//

const mongoose = require('mongoose');

module.exports.init = (config) => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  };
  try {
    const url = config.database.url;
    console.log(`Connecting to database: ${url}`);
    mongoose.connect(url, options);
    console.log('OK');
  } catch (err) {
    console.log('Cannot initialize database: ', err);
    throw err;
  }
  return mongoose.connection;
};
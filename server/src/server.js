//
// Server initialization
//

module.exports.init = (config) => {
  try {
    const express = require('express');
    const cors = require('cors');
    const { ApolloServer } = require('apollo-server-express');

    const { typeDefs, resolvers } = require('./entities').init();

    const server = new ApolloServer({
      typeDefs, resolvers,
      playground: config.playground
    });
    const app = express();
    server.applyMiddleware({ app });
    app.use(cors());

    app.get('/', (req, res) => {
      res.send(`<h1>My little-shop server</h1><br><a href="/graphql">GraphiQL link</a>`);
    });

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
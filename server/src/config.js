//
// Configuration
//

module.exports = {
  database: {
    name: process.env.DB_NAME || 'temp-db',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '27017'
  },
  server: {
    hello: process.env.SERVER_HELLO || 'my-little-shop server',
    port: process.env.PORT || 4000,
    secret_key: process.env.SECRET_KEY || 'admin',
    routePrefix: process.env.ROUTE_PREFIX || '/'
  }
};
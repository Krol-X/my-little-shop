//
// Configuration
//

module.exports = {
  database: {
    url: process.env.DB_URL || 'mongodb://localhost/my-little-shop'
  },
  server: {
    hello: process.env.HELLO || 'my-little-shop server',
    port: process.env.PORT || 4000,
    secret_key: process.env.SECRET_KEY || 'admin',
    routePrefix: process.env.ROUTE_PREFIX || '/',
    playground: process.env.PLAYGROUND || true,
    tracing: process.env.TRACING || true
  }
};
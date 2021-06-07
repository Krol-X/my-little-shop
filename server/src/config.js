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
    default_admin: process.env.DEFAULT_ADMIN || 'admin',
    default_admin_pass: process.env.DEFAULT_ADMIN_PASS || 'admin',
    secret_key: process.env.SECRET_KEY || 'my-secret-key',
    routePrefix: process.env.ROUTE_PREFIX || '/'
  },
  debug: {
    print_scheme: process.env.DEBUG_SCHEME || false,
    playground: process.env.DEBUG_PLAYGROUND || true,
    print_logic: process.env.DEBUG_PRINT_LOGIC || false
  }
};
const packageJson = require('../package.json');

module.exports = {
  app: {
    name: packageJson.name,
    version: packageJson.version,
  },
  server: {
    port: parseInt(process.env.PORT, 10),
  },
  logs: {
    level: process.env.LOGS_LEVEL || 'debug',
    isDevelopmentMode: process.env.LOGS_IS_DEVELOPMENT || false,
  },
  mongo: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/test_db',
    options: {
      auto_reconnect: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
  },
  provider: {
    url: process.env.PROVIDER_URL || 'https://jsonplaceholder.typicode.com',
  },
};

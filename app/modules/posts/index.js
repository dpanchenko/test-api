const router = require('./router');
const service = require('./service');

module.exports = {
  init: (app) => {
    app.use('/posts', router);
  },
  service,
};

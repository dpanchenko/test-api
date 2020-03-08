const config = require('config');
const request = require('request-promise-native');

const logger = require('../../helpers/logger');
const InternalServerError = require('../../errors/InternalServerError');

const PROVIDER_URL = config.get('provider.url');

const getUser = async (id) => {
  try {
    const result = await request({
      uri: `${PROVIDER_URL}/users/${id}`,
      method: 'GET',
      json: true,
    });

    return result;
  } catch (err) {
    logger.error(`Provider failure on get user data: ${err.message}`);

    throw new InternalServerError('Get user info failed');
  }
};

module.exports = {
  getUser,
};

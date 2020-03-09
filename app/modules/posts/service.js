const config = require('config');
const request = require('request-promise-native');

const logger = require('../../helpers/logger');
const postModel = require('./model');
const InternalServerError = require('../../errors/InternalServerError');
const NotFoundError = require('../../errors/NotFoundError');

const PROVIDER_URL = config.get('provider.url');

const importData = async () => {
  try {
    const result = await request({
      uri: `${PROVIDER_URL}/posts`,
      method: 'GET',
      json: true,
    });

    await postModel.deleteMany();

    const items = result.map(({ id, userId, title, body }) => ({ id, userId, title, body }));

    await postModel.insertMany(items);

    return { count: result.length };
  } catch (err) {
    logger.error(`Provider get posts error with message: ${err.message}`);

    throw new InternalServerError('Import posts failed');
  }
};

const getList = async (offset, limit) => {
  const [count, items] = await Promise.all([
    postModel.countDocuments().exec(),
    postModel.find().select('id title createdAt').skip(offset).limit(limit).exec(), // eslint-disable-line
  ]);

  return { count, items };
};

const getPost = async (id) => {
  const result = await postModel.findOne({ id }).select('-_id -__v').exec();

  if (!result) {
    throw new NotFoundError('Post not found', { id });
  }


  return result;
};

module.exports = {
  importData,
  getList,
  getPost,
};

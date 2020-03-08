const express = require('express');
const validator = require('express-validation');

const sendResult = require('../../helpers/result');

const postsService = require('./service');
const { idValidation, paginatorValidation } = require('./validations');

const router = express.Router();

/**
 * @api {post} /posts/import Import posts
 * @apiDescription Import posts from provider to local database.
 * @apiName ImportPosts
 * @apiGroup Posts
 *
 * @apiSuccess {Number} count count of imported posts.
 */
router.post('/import', async (req, res) => {
  const result = await postsService.importData();

  return sendResult(res, result);
});

/**
 * @api {get} /posts Get list
 * @apiDescription Get list of posts from local database. Support pagination.
 * @apiName PostsList
 * @apiGroup Posts
 *
 * @apiHeader {Number} x-offset Users unique ID.
 * @apiHeader {Number} x-limit Users unique ID.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-offset": "10",
 *       "x-limit": "5"
 *     }
 *
 * @apiSuccess {Object} result Posts list result.
 * @apiSuccess {Number} result.count Count of all posts in DB.
 * @apiSuccess {Object[]} result.items List of posts.
 * @apiSuccess {Number} result.items.id Post id.
 * @apiSuccess {String} result.items.title Post author id.
 * @apiSuccess {Date} result.items.createdAt Post creation date.
*/
router.get('/', validator(paginatorValidation), async (req, res) => {
  const offset = parseInt(req.headers['x-offset'], 10);
  const limit = parseInt(req.headers['x-limit'], 10);

  const result = await postsService.getList(offset, limit);

  return sendResult(res, result);
});

/**
 * @api {get} /posts/:id Get post
 * @apiDescription Get post data from local database by id.
 * @apiName PostInfo
 * @apiGroup Posts
 *
 * @apiParam {Number} id Post id.
 *
 * @apiSuccess {Object} post Post data.
 * @apiSuccess {Number} result.items.id Post id.
 * @apiSuccess {Number} result.items.userId Post id.
 * @apiSuccess {String} result.items.title Post author id.
 * @apiSuccess {String} result.items.body Post body id.
 * @apiSuccess {Date} result.items.createdAt Post creation date.
 */
router.get('/:id', validator(idValidation), async (req, res) => {
  const { id } = req.params;

  const result = await postsService.getPost(id);

  return sendResult(res, result);
});

module.exports = router;

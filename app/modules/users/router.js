const express = require('express');
const validator = require('express-validation');

const sendResult = require('../../helpers/result');

const usersService = require('./service');
const { idValidation } = require('./validations');

const router = express.Router();

/**
 * @api {get} /users/:id Get user
 * @apiDescription Get user data from remote provider.
 * @apiName userInfo
 * @apiGroup Users
 *
 * @apiParam {Number} id User id.
 *
 * @apiSuccess {Object} user User data.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "name": "Leanne Graham",
 *         "username": "Bret",
 *         "email": "Sincere@april.biz",
 *         "address": {
 *             "street": "Kulas Light",
 *             "suite": "Apt. 556",
 *             "city": "Gwenborough",
 *             "zipcode": "92998-3874",
 *             "geo": {
 *                 "lat": "-37.3159",
 *                 "lng": "81.1496"
 *             }
 *         },
 *         "phone": "1-770-736-8031 x56442",
 *         "website": "hildegard.org",
 *         "company": {
 *             "name": "Romaguera-Crona",
 *             "catchPhrase": "Multi-layered client-server neural-net",
 *             "bs": "harness real-time e-markets"
 *         }
 *     }
 */

router.get('/:id', validator(idValidation), async (req, res) => {
  const { id } = req.params;

  const result = await usersService.getUser(id);

  return sendResult(res, result);
});

module.exports = router;

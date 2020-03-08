const joi = require('joi');

const paginatorValidation = {
  headers: {
    'x-offset': joi.string().regex(/^\d+$/).default('0'),
    'x-limit': joi.string().regex(/^\d+$/).default('10'),
  },
};

const idValidation = {
  params: {
    id: joi.string().regex(/^\d+$/).required(),
  },
};

module.exports = {
  idValidation,
  paginatorValidation,
};

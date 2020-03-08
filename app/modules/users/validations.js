const joi = require('joi');

const idValidation = {
  params: {
    id: joi.string().regex(/^\d+$/).required(),
  },
};

module.exports = {
  idValidation,
};

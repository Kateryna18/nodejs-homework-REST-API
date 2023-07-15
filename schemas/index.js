const Joi = require('joi');

const JoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  })

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const shemas = {
  JoiSchema,
  updateFavoriteSchema,
}

module.exports = {
  shemas,
};
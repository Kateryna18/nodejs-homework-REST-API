const { Contact } = require("../../models/index");
const { HttpError } = require("../../helpers");
const { shemas } = require("../../schemas");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { error } = shemas.JoiSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

  module.exports = addContact;
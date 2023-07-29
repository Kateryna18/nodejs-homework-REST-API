const { Contact } = require("../../models/index");
const { HttpError } = require("../../helpers");
const { shemas } = require("../../schemas");


const updateFavorite = async (req, res) => {
  const { error } = shemas.updateFavoriteSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateFavorite;
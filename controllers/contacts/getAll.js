const { Contact } = require("../../models/index");

const getAll = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10, favorite = false } = req.query;
    const skip = (page - 1) * limit;
    const query = {
      owner,
    };
  
    if (favorite) {
      query.favorite = true;
    }
  
    const result = await Contact.find(query, null, { skip, limit });
  
    res.json(result);
  };

  module.exports = getAll;
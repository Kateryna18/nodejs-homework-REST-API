const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { isValidId } = require("../../middlewares");


router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put("/:contactId", isValidId, JoiSchema.validate(req.body), ctrl.updateById);


module.exports = router;

const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { isValidId, authenticate } = require("../../middlewares");
const { shemas } = require("../../schemas")


router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, ctrl.addContact);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

router.put("/:contactId", authenticate, isValidId, ctrl.updateById);

router.patch("/:contactId/favorite", authenticate, isValidId, ctrl.updateFavorite)


module.exports = router;

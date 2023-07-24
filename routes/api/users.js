const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const { isValidId } = require("../../middlewares");
const { shemas } = require("../../schemas")



router.post("/register", ctrl.register)

router.post("/login", ctrl.login)


module.exports = router;
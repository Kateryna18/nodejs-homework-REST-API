const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth/index");
const { isValidId, authenticate } = require("../../middlewares");
const { shemas } = require("../../schemas")



router.post("/register", ctrl.register)

router.post("/login", ctrl.login)

router.get("/current", authenticate, ctrl.getCurrentUser)

router.post("/logout", authenticate, ctrl.logout)

// router.patch("/", authenticate, ctrl.updateSubscription)


module.exports = router;
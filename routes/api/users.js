const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth/index");
const { isValidId, authenticate, upload } = require("../../middlewares");
const { shemas } = require("../../schemas")



router.post("/register", ctrl.register)

router.get("/verify/:verificationToken", ctrl.verifyEmail)

router.post("/verify", ctrl.resendVerifyEmail)

router.post("/login", ctrl.login)

router.get("/current", authenticate, ctrl.getCurrentUser)

router.post("/logout", authenticate, ctrl.logout)

// router.patch("/", authenticate, ctrl.updateSubscription)

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar)


module.exports = router;
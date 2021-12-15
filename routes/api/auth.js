const express = require("express");
const { validation, authenticate, uploadAvatar } = require("../../middlewares");
const { auth: controllers } = require("../../controllers");
const { joiUserSchema } = require("../../models");

const router = express.Router();

router.post("/users/signup", validation(joiUserSchema), controllers.signup);

router.post("/users/login", validation(joiUserSchema), controllers.login);

router.post("/users/logout", authenticate, controllers.logout);

router.get("/users/current", authenticate, controllers.getCurrentUser);

router.patch(
  "/users/avatars",
  authenticate,
  uploadAvatar.single("avatarURL"),
  controllers.updateAvatar
);

module.exports = router;

const express = require("express");
const router = express.Router();
const { contacts: controllers } = require("../../controllers");
const { validation, authenticate } = require("../../middlewares");
const { joiContactSchema } = require("../../models");

router.get("/", authenticate, controllers.getAllContacts);

router.get("/:contactId", authenticate, controllers.getContactById);

router.post(
  "/",
  authenticate,
  validation(joiContactSchema),
  controllers.addNewContact
);

router.delete("/:contactId", authenticate, controllers.deleteContactById);

router.patch("/:contactId/favorite", authenticate, controllers.changeStatus);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  deleteContactById,
  addNewContact,
  contactUpdate,
} = require("../../controllers");
const { validationMiddleware } = require("../../middlewares");

router.get("/", getAllContacts);

router.get("/:contactId", getContactById);

router.post("/", addNewContact);

router.delete("/:contactId", deleteContactById);

router.put("/:contactId", validationMiddleware, contactUpdate);

module.exports = router;

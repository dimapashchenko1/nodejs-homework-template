const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  deleteContactById,
  addNewContact,
  contactUpdate,
  changeStatus,
} = require("../../controllers/contacts");
const { validationMiddleware } = require("../../middlewares");

router.get("/", getAllContacts);

router.get("/:contactId", getContactById);

router.post("/", addNewContact);

router.delete("/:contactId", deleteContactById);

router.put("/:contactId", contactUpdate);

router.patch("/:contactId/favorite", changeStatus);

module.exports = router;

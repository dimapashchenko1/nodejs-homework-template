const { Contacts } = require("../../schema/contactModel");

const getContact = async (contactId) => {
  const searchContact = await Contacts.findById(contactId);
  return searchContact;
};

module.exports = getContact;

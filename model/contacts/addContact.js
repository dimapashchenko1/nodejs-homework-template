const { Contacts } = require("../../schema/contactModel");

const addContact = async (body) => {
  const contact = new Contacts({ ...body });
  await contact.save();
  return contact;
};

module.exports = addContact;

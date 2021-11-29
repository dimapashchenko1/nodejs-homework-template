const listContacts = require("./listContacts");

const getContact = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => String(item.id) === String(contactId));
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContact;

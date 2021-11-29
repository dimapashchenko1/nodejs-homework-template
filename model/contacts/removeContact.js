const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "../../db/contacts.json");
const listContacts = require("./listContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(
    (item) => String(item.id) === String(contactId)
  );
  if (idx === -1) {
    return null;
  }
  const removedContact = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return removedContact;
};

module.exports = removeContact;

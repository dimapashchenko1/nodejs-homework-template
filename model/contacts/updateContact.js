const path = require("path");
const contactsPath = path.join(__dirname, "../../db/contacts.json");
// const { listContacts } = require("./index");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  if (!body) {
    return null;
  }
  const idx = contacts.findIndex(
    (item) => String(item.id) === String(contactId)
  );
  if (idx === -1) {
    throw new Error(`Id ${contactId} not found`);
  }
  contacts[idx] = { ...contacts[idx], ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[idx];
};

module.exports = updateContact;

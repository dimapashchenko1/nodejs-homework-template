const fs = require("fs/promises");
const crypto = require("crypto");
const path = require("path");
const contactsPath = path.join(__dirname, "../../db/contacts.json");

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { ...body, id: crypto.randomUUID() };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

module.exports = addContact;

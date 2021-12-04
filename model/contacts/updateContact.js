const { Contacts } = require("../../schema/contactModel");

const updateContact = async (contactId, body) => {
  const getContactById = await Contacts.findOneAndUpdate(
    { contactId },
    { ...body },
    { new: true }
  );
  return getContactById;
};
module.exports = updateContact;

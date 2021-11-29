const { listContacts } = require("../../model/contacts/index");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await listContacts();
    console.table(contacts);

    res.json({
      status: "success",
      code: 200,
      data: { contacts },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContacts;

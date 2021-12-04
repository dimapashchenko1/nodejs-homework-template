const { addContact } = require("../../model/contacts/index");

const addNewContact = async (req, res, next) => {
  try {
    const result = await addContact(req.body);
    console.log(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addNewContact;

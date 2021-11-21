const { updateContact } = require("../model/index");

const contactUpdate = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    if (!contactId) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
      return;
    }
    if (!result) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "Missing field",
      });
      return;
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = contactUpdate;

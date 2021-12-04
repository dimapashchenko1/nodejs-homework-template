const { Contacts } = require("../../schema/contactModel");

const changeStatus = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const result = await Contacts.findByIdAndUpdate(
      contactId,
      { favorite: true },
      { new: true }
    );
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

module.exports = changeStatus;

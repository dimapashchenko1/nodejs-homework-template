const { getContact } = require("../model/index");

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await getContact(contactId);
    if (!result) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
      return;
    }
    res.json({
      status: "success",
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;

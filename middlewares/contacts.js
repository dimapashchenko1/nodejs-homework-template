const Joi = require("joi");

const validationMiddleware = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(25).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    const postError = new Error(error.message);
    postError.status = 400;
    next(postError);
  }
  next();
  return validationMiddleware;
};

module.exports = validationMiddleware;

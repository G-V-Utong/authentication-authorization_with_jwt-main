const joi = require("joi");

const validateInfo = async (req, res, next) => {
  try {
    const adminSchema = joi.object({
      email: joi.string().email().empty().required().messages({
        "string.base": `"email" must be of type "text"`,
        "string.empty": `"email" field can not be empty`,
        "string.required": `"email" is required`,
      }),
      firstName: joi.string().empty().required().messages({
        "string.base": `"firstname" must be of type "string"`,
        "string.empty": `"firstName" field can not be empty`,
        "string.required": `"firstName" is required`,
      }),

      lastName: joi.string().empty().required().messages({
        "string.base": `"lastname" must be of type "string"`,
        "string.empty": `"lastName" field can not be empty`,
        "string.required": `"lastName" is required`,
      }),
    });

    await adminSchema.validateAsync(req.body, { abortEarly: true });
    next();
  } catch (error) {
    res.status(422).json({
      message: "invalid information",
      error: error.message,
    });
  }
};

module.exports = { validateInfo };

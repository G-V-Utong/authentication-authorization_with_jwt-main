const joi = require("joi");

const validateProduct = async (req, res, next) => {
  try {
    const productSchema = joi.object({
      productName: joi.string().empty().required().messages({
        "string.base": `"productName" must be of type "text"`,
        "string.empty": `"productName" can not be empty`,
        "string.required": `"productName" is required`,
      }),
      description: joi.string().empty().required().messages({
        "string.base": `"description" must be of type "text"`,
        "string.empty": `"description" can not be empty`,
        "string.required": `"description" is required`,
      }),
      price: joi.number().empty().required().messages({
        "number.base": `"pice" must be of type "number"`,
        "number.empty": `"price" can not be empty`,
        "number.required": `"price" is required`,
      }),
      size: joi.number().empty().required().messages({
        "number.base": `"size" must be of type "number"`,
        "number.empty": `"size" can not be empty`,
        "number.required": `"size" is required`,
      }),
      color: joi.string().empty().required().messages({
        "string.base": `"color" must be of type "text"`,
        "string.empty": `"color" can not be empty`,
        "string.required": `"color" is required`,
      }),
      quantityPerUnit: joi.number().empty().required().messages({
        "quantity.base": `"size" must be of type "number"`,
        "quantity.empty": `"size" can not be empty`,
        "quantity.required": `"size" is required`,
      }),
    });
    await productSchema.validateAsync(req.body, { abortEarly: true });
    next();
  } catch (error) {
    res.status(422).json({
      message: "invalid information",
      error: error.message,
    });
  }
};

module.exports = {validateProduct}
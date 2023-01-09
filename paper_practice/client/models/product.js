const mongoose = require("mongoose");
const joi = require("@hapi/joi");

const productScheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Product = mongoose.model("product", productScheme);

function validateProduct(data) {
  const schema = joi.object({
    name: joi.string().min(5).required(),
    price: joi.number().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product=Product;
module.exports.validate=validateProduct;

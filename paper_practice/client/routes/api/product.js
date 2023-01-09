const express = require("express");
const {Product} = require("../../models/product");
const validateProduct = require("../../middlewares/productValidate");
const auth = require("../../middlewares/authenticationForLogedInUsers");
const admminAuth = require("../../middlewares/adminAuth");
var router = express.Router();

// get products
router.get("/",async (req, res) => {
    let page = Number(req.query.page ? req.query.page : 1);
    let limit = Number(req.query.limit ? req.query.limit : 10);
    let skip = (page - 1) * limit;
    const products = await Product.find().skip(skip).limit(limit);
    res.send(products);
  // res.status(200).json({
  //   status: "success",
  //   results: products.length,
  //   products,
    
  // });
});

// get product by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res
        .status(404)
        .send("The product with the given ID was not found.");

    res.status(200).send(product);
    res.send(product);
  } catch (error) {
    res.status(404).send("The product with the given ID was not found.");
  }
});

// post product
router.post("/upload", validateProduct ,async (req, res) => {
  const newProduct = await Product.create(req.body);
  await newProduct.save();
  res.status(201).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

// delete product
router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    message: "Product deleted successfully",
  });
});

// update product
router.put("/:id", validateProduct ,async (req, res) => {
  const data = await Product.findById(req.params.id);
  data.name = req.body.name;
  data.price = req.body.price;
  await data.save();
  res.status(200).json({
    status: "success",
    message: "Product updated successfully",
  });
});

module.exports = router;

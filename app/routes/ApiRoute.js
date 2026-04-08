const express = require("express");
const ProductController = require("../controller/ProductController");

const router = express.Router();

router.post('/v1/product', ProductController.createProduct);
router.get('/v1/product', ProductController.getAllProduct);
router.get('/v1/product/:id', ProductController.getProductById);
router.put('/v1/product/:id', ProductController.updateProductById);
router.delete('/v1/product/:id', ProductController.deleteProductById);


module.exports=router;
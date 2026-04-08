const Product = require("../models/ProductSchema");
const httpStatus = require("../utils/httpStatus");

class ProductController {
  async createProduct(req, res) {
    try {
      const { name, description, price, variants } = req.body;

      if (!name || !description || !price || !variants) {
        return res.status(httpStatus.BAD_REQUEST).json({
          success: false,
          message: "All fields are required",
        });
      }

      const Pro = new Product({
        name,
        description,
        price,
        variants,
      });

      const result = await Pro.save();

      if (result) {
        return res.status(httpStatus.OK).json({
          success: true,
          message: "Product created successsfully",
          data: result,
        });
      }
    } catch (error) {
      console.error("Error in createStudent:", error);
      return res.status(httpStatus.SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getAllProduct(req, res) {
    try {
      const products = await Product.find({ isDeleted: false });
      return res.status(httpStatus.OK).json({ success: true, data: products });
    } catch (error) {
      return res.status(httpStatus.SERVER_ERROR).json({ success: false, message: error.message });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product || product.isDeleted) {
        return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "Product not found" });
      }
      return res.status(httpStatus.OK).json({ success: true, data: product });
    } catch (error) {
      return res.status(httpStatus.SERVER_ERROR).json({ success: false, message: error.message });
    }
  }

  async updateProductById(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product || product.isDeleted) {
        return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "Product not found" });
      }
      return res.status(httpStatus.OK).json({ success: true, message: "Product updated", data: product });
    } catch (error) {
      return res.status(httpStatus.SERVER_ERROR).json({ success: false, message: error.message });
    }
  }

  async deleteProductById(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
      if (!product) {
        return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "Product not found" });
      }
      return res.status(httpStatus.OK).json({ success: true, message: "Product deleted" });
    } catch (error) {
      return res.status(httpStatus.SERVER_ERROR).json({ success: false, message: error.message });
    }
  }
}

module.exports = new ProductController();

// {
//   "name": "Nike Air Max",
//   "description": "Comfortable running shoes",
//   "price": 120,
//   "variants": [
//     { "size": "M", "color": "Red", "stock": 10 }
//   ]
// }

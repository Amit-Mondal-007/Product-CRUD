const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    shortDescription: {
      type: String,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    discountePrice: {
      type: Number,
      trim: true,
    },
    currency: {
      type: Number,
      trim: true,
    },

    variants: [
      {
        size: {
          type: String,
        },
        color: {
          type: String,
        },
        stock: {
          type: Number,
        },
        price: {
          type: Number,
        },
      },
    ],

    images: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
    ratings: [
      {
        average: {
          type: Number,
        },
        count: {
          type: Number,
        },
      },
    ],
    tags: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["draft", "active", "archived"],
      default: "draft",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);


module.exports = mongoose.model("Product", ProductSchema);
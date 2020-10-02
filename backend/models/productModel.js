import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
  },
  { timestamps: true }
);

const productSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: number, required: true, default: 0 },
    numReviews: { type: number, required: true, default: 0 },
    price: { type: number, required: true, default: 0 },
    inStock: { type: number, required: true, default: 0 }
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
export default Product;

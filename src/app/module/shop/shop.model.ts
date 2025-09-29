import { Schema, model } from 'mongoose'
import { TShop } from './shop.interface'

const shopSchema = new Schema<TShop>(
  {
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    category: { type: String, required: true },
    productImages: [{ type: String, required: true }],
    inStock: { type: Boolean, default: true },
    stockQuantity: { type: Number, required: true },

    features: [{ type: String }],
    specifications: [
      {
        key: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],

    slug: { type: String, required: true, unique: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
    tags: [{ type: String }],
    demoVideoUrl: { type: String },

    featured: { type: Boolean, default: false },
    popular: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },

    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
  },
  { timestamps: true },
)

export const Shop = model<TShop>('Shop', shopSchema)

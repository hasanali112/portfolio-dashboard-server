import { Request } from 'express'
import { TShop } from './shop.interface'
import { Shop } from './shop.model'

const productCreate = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] }
  const payload = JSON.parse(req.body.data)

  if (files?.productImages) {
    payload.productImages = files.productImages.map(
      (file: Express.Multer.File) => file.path,
    )
  }

  const result = await Shop.create(payload)
  return result
}

const allProductsGet = async () => {
  const result = await Shop.find({ isActive: true }).sort({ createdAt: -1 })
  return result
}

const productById = async (id: string) => {
  const result = await Shop.findById(id)
  return result
}

const productBySlug = async (slug: string) => {
  const result = await Shop.findOne({ slug, isActive: true })
  return result
}

const updateProduct = async (id: string, product: Partial<TShop>) => {
  const result = await Shop.findByIdAndUpdate(id, product, { new: true })
  return result
}

const deleteProduct = async (id: string) => {
  const result = await Shop.findByIdAndDelete(id)
  return result
}

const getFeaturedProducts = async () => {
  const result = await Shop.find({ featured: true, isActive: true }).limit(6)
  return result
}

const getProductsByCategory = async (category: string) => {
  const result = await Shop.find({ category, isActive: true })
  return result
}

export const shopService = {
  productCreate,
  allProductsGet,
  productById,
  productBySlug,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByCategory,
}

import { Request, Response } from 'express'
import { shopService } from './shop.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await shopService.productCreate(req)
  sendResponse(res, {
    statusCode: 200,
    message: 'Product created successfully! 🎉',
    data: result,
  })
})

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await shopService.allProductsGet()
  sendResponse(res, {
    statusCode: 200,
    message: 'Products retrieved successfully! 🎉',
    data: result,
  })
})

const getProductById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await shopService.productById(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Product retrieved successfully! 🎉',
    data: result,
  })
})

const getProductBySlug = catchAsync(async (req: Request, res: Response) => {
  const slug = req.params.slug
  const result = await shopService.productBySlug(slug)
  sendResponse(res, {
    statusCode: 200,
    message: 'Product retrieved successfully! 🎉',
    data: result,
  })
})

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const productData = req.body
  const result = await shopService.updateProduct(id, productData)
  sendResponse(res, {
    statusCode: 200,
    message: 'Product updated successfully! 🎉',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await shopService.deleteProduct(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Product deleted successfully! 🎉',
    data: result,
  })
})

const getFeaturedProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await shopService.getFeaturedProducts()
  sendResponse(res, {
    statusCode: 200,
    message: 'Featured products retrieved successfully! 🎉',
    data: result,
  })
})

const getProductsByCategory = catchAsync(async (req: Request, res: Response) => {
  const category = req.params.category
  const result = await shopService.getProductsByCategory(category)
  sendResponse(res, {
    statusCode: 200,
    message: 'Products by category retrieved successfully! 🎉',
    data: result,
  })
})

export const shopController = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductBySlug,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByCategory,
}

import { Request, Response } from 'express'
import { blogService } from './blog.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogService.blogCreate(req)
  sendResponse(res, {
    statusCode: 200,
    message: 'Blog created successfully! 🎉',
    data: result,
  })
})

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await blogService.allBlogsGet()
  sendResponse(res, {
    statusCode: 200,
    message: 'Blogs retrieved successfully! 🎉',
    data: result,
  })
})

const getBlogsById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await blogService.blogsById(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Blog retrieved successfully! 🎉',
    data: result,
  })
})

const getBlogBySlug = catchAsync(async (req: Request, res: Response) => {
  const slug = req.params.slug
  const result = await blogService.blogBySlug(slug)
  sendResponse(res, {
    statusCode: 200,
    message: 'Blog retrieved successfully! 🎉',
    data: result,
  })
})

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const blogData = req.body
  const result = await blogService.updateBlog(id, blogData)
  sendResponse(res, {
    statusCode: 200,
    message: 'Blog updated successfully! 🎉',
    data: result,
  })
})

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await blogService.deleteBlog(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Blog deleted successfully! 🎉',
    data: result,
  })
})

const incrementViews = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await blogService.incrementViews(id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Blog views updated! 🎉',
    data: result,
  })
})

export const blogController = {
  createBlog,
  getAllBlogs,
  getBlogsById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  incrementViews,
}

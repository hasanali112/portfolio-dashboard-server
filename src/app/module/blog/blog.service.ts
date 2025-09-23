import { Request } from 'express'
import { TBlog } from './blog.interface'
import { Blog } from './blog.model'

const blogCreate = async (req: Request) => {
  const file = req.file
  const payload = JSON.parse(req.body.data)
  payload.blogImage = file?.path

  const result = await Blog.create(payload)
  return result
}

const allBlogsGet = async () => {
  const result = await Blog.find().sort({ createdAt: -1 })
  return result
}

const blogsById = async (id: string) => {
  const result = await Blog.findById(id)
  return result
}

const blogBySlug = async (slug: string) => {
  const result = await Blog.findOne({ slug })
  return result
}

const updateBlog = async (id: string, blog: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, blog, { new: true })
  return result
}

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id)
  return result
}

const incrementViews = async (id: string) => {
  const result = await Blog.findByIdAndUpdate(
    id,
    { $inc: { views: 1 } },
    { new: true },
  )
  return result
}

export const blogService = {
  blogCreate,
  allBlogsGet,
  blogsById,
  blogBySlug,
  updateBlog,
  deleteBlog,
  incrementViews,
}

import express from 'express'
import { blogController } from './blog.controller'
import { updloadSingleImage } from '../../config/cloudinary/multer.config'

const route = express.Router()

route.post(
  '/',
  updloadSingleImage('blogImage'),
  blogController.createBlog
)
route.get('/', blogController.getAllBlogs)
route.get('/:id', blogController.getBlogsById)
route.get('/slug/:slug', blogController.getBlogBySlug)
route.put('/:id', blogController.updateBlog)
route.delete('/:id', blogController.deleteBlog)
route.patch('/:id/views', blogController.incrementViews)

// Comment routes
route.post('/:id/comments', blogController.createComment)
route.get('/:id/comments', blogController.getComments)

export const blogRoute = route

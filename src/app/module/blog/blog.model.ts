import { Schema, model } from 'mongoose'
import { TBlog } from './blog.interface'

const blogSchema = new Schema<TBlog>(
  {
    blogImage: { type: String, required: true },
    topic: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },

    slug: { type: String, required: true, unique: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
    tags: [{ type: String }],

    author: {
      name: { type: String, required: true },
      profileImage: { type: String },
      bio: { type: String },
    },

    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    recent: { type: Boolean, default: false },
    popular: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },

    readTime: { type: String },
  },
  { timestamps: true },
)

export const Blog = model<TBlog>('Blog', blogSchema)

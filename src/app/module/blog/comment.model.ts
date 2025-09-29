import { Schema, model } from 'mongoose';

export interface IComment {
  blogId: string;
  name: string;
  email: string;
  comment: string;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    blogId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export const Comment = model<IComment>('Comment', commentSchema);

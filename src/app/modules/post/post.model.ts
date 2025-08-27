import { Schema, model } from "mongoose";
import { IPost } from "./post.interface";


const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Post = model<IPost>("Post", postSchema);
export default Post;

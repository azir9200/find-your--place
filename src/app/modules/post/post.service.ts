import { IPost } from "./post.interface";
import Post from "./post.model";

// Create a new post
const createPost = async (data: IPost) => {
  try {
    const post = new Post(data);
    const savedPost = await post.save();
    console.log("Post created:", savedPost);
    return savedPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// Get all posts
const getPosts = async () => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    console.log(`Fetched ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Get a single post by ID
const getPostById = async (id: string) => {
  try {
    const post = await Post.findById(id);
    if (!post) {
      console.warn(`Post with id ${id} not found`);
    } else {
      console.log("Fetched post:", post);
    }
    return post;
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    throw error;
  }
};

export const postService = {
  createPost,
  getPosts,
  getPostById,
};

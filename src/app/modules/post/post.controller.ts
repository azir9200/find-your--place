import { postService } from "./post.service";

import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import Post from "./post.model";

const createPost = catchAsync(async (req, res) => {
  const result = await postService.createPost(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Post  created successfully",
    data: result,
  });
});

const getAllPosts = catchAsync(async (req, res) => {
  const result = await postService.getPosts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Post retrieved successfully !",
    data: result,
  });
});

const getPostById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await postService.getPostById(id);
  if (!data) {
    res.status(404).json({
      message: "Post ID not found",
      success: false,
      data: data,
    });
    return;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Post retrieved successfully",
    data: data,
  });
});

export const postController = {
  createPost,
  getAllPosts,
  getPostById,
};

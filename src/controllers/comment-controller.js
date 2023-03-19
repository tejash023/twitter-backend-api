import { CommentService } from "../services/index.js";
import { SuccessCodes } from "../utils/error-codes.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
  try {
    const respose = await commentService.createComment(
      req.query.modelId,
      req.query.modelType,
      req.user.id,
      req.body.content
    );

    return res.status(SuccessCodes.CREATED).json({
      success: true,
      data: respose,
      message: "comment created successfully",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      error: error,
    });
  }
};
